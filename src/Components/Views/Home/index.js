//@flow
import React, { Component } from "react";
import { Transition } from "semantic-ui-react";
import Header from "../../Molecules/Header";
import Table from "../../Molecules/Table";
import Pagination from "../../Molecules/Pagination"
import ErrorCard from "../../Molecules/ErrorCard"
import {type IssueType, getIssuesUrl, getTotalIssuesUrl} from "../../General/githubApiHelpers"
import {saveInCache, getFromCache} from "../../General/cacheManager"
import styles from "./styles.less"


type Props = { 
  repo: string,
  user: string,
  issuesLimit: number
}

type State = {
    visible: bool,
    currentPage: number,
    loading: bool,
    hasErrors: bool,
    totalIssues: number,
    filter?: string,
    sort?: string,
    direction?:string,
    issues: Array<IssueType>
}

const emptyIssues: Array<IssueType> = []

class Home extends Component<Props, State> {

  state = {
    totalIssues: 0,
    visible: false,
    currentPage: 1,
    loading: true,
    hasErrors: false,
    filter: "all",
    sort: "created",
    direction: "desc",
    issues: emptyIssues
  };

  async fetchIssues(append?: bool){

    const issuesUrl: string = getIssuesUrl({
        user: this.props.user,  
        repo: this.props.repo, 
        query: {
          "page": ((this.state.currentPage || 0) - 1).toString(), 
          "per_page": (this.props.issuesLimit || 0).toString(), 
          "state": this.state.filter, 
          "sort": this.state.sort,
          "direction": this.state.direction
        } 
    });


    if(getFromCache(issuesUrl))
    {
        //console.log("cached")
        const res = getFromCache(issuesUrl)
       this.setState({issues: append?[...this.state.issues, ...res]:res});
      
    }
    else
     await fetch( issuesUrl )
          .then(res => res.json())
            .then(res => {

              this.setState({issues: append?[...this.state.issues, ...res]:res});

              saveInCache(issuesUrl, JSON.stringify(res));


            })
            .catch((err) => this.setState({hasErrors:true}));

  }

 async  fetchIssuesCount(){

    const totalIssuesUrl: string =  getTotalIssuesUrl({
      user:this.props.user, 
      repo:this.props.repo, 
      state: this.state.filter === "all"? "" : this.state.filter
    });


   if(getFromCache(totalIssuesUrl))
    {
        //console.log("cached")
        this.setState({totalIssues: getFromCache(totalIssuesUrl).total_count});
    }
    else
     await fetch(totalIssuesUrl)
          .then(res => res.json())
            .then(res => {

              saveInCache(totalIssuesUrl, JSON.stringify(res));
              this.setState({totalIssues: res.total_count});
          })
            .catch((err) => this.setState({hasErrors:true}));
  }


  //This funcion is made to handle caching
  async fecthManager(fetchIssuesCount?: bool){

    await this.setState({loading: true});
    await this.fetchIssues();
    if(fetchIssuesCount)
      await this.fetchIssuesCount();
  
    this.setState({loading: false, visible: true});
  }

  async componentDidMount() {

    await this.fetchIssues();
    await this.fetchIssuesCount();
    this.setState({loading: false, visible: true});

  }

  //Requirement
  changePagination(page: number){

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    this.setState({currentPage: page})
    this.fecthManager()

  }

    //UX optimization
   async appendPagination(page: number){
    await this.setState({currentPage: page})
    this.fetchIssues(true)

  }


  //Requirement
  changeFilter(filter: string){


    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
 
    
    this.setState({filter, currentPage:1})
    this.fecthManager(true)

  }

  //Requirement
  changeOrder(sort: string, direction: string){

      window.scrollTo({
      top: 0,
      behavior: 'smooth'
      });


      this.setState({sort, direction})
      this.fecthManager()
  }

  render() {
    return (
        <div className = {styles.body}>

         <Header
          changeFilter = {this.changeFilter.bind(this)}
          changeOrder = {this.changeOrder.bind(this)}
          direction = {this.state.direction}
          sort = {this.state.sort}
          filter = {this.state.filter}
          user= {this.props.user}  
          repo= {this.props.repo} 
         />

         {!this.state.visible &&
           <div className={styles.loadingContainer}>
            <div className={styles["lds-ripple"] }>
              <div></div>
              <div></div>
            </div>
          </div>}

          <Transition.Group 
            animation={"zoom"} 
            duration={500}>

            {this.state.visible && (

              <div>
                {this.state.hasErrors?
                  <ErrorCard errorMsg="Besties"/>:
                  <React.Fragment>
                    <Table 
                      totalIssues = {this.state.totalIssues} 
                      issues = {this.state.issues || emptyIssues } 
                      loading = {this.state.loading} />

                    <Pagination
                      issuesLimit = {this.props.issuesLimit}
                      appendPagination = {this.appendPagination.bind(this)}
                      changePagination = {this.changePagination.bind(this)}
                      totalIssues = {this.state.totalIssues || 0} 
                      currentPage = {this.state.currentPage || 0} />
                  </React.Fragment>
                }

              </div>
            )}

      </Transition.Group>
    </div>);
  }
}

export default Home;