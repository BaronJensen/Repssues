//@flow
import React from "react";
import Home from "./Components/Views/Home";

import {
  GITHUB_API_ITEMS_PER_PAGE, 
  GITHUB_API_USER_NAME, 
  GITHUB_API_REPO
} from "./Components/Constants/githubApi"


const App = ()=>{

  return <Home 
  			repo = {GITHUB_API_REPO}
  			user = {GITHUB_API_USER_NAME}
  			issuesLimit = {GITHUB_API_ITEMS_PER_PAGE}/>

}

export default App;