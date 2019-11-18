//@flow

declare class Object {
    static entries<TValue>(object: { [key: string]: TValue }): [string, TValue][]; 
}


export type IssueLabelsType = {
  color: string,
  name: string
}

export type IssueType = {
  created_at: string,
  updated_at: string,
  number: string,
  state: string,
  html_url: string,
  title: string,
  labels?: Array<IssueLabelsType>
}

type IssueQuery = {
          page?: string,
          per_page?:string,
          state?:string,
          sort?:string,
          direction?:string,
        }

type IssueQueryArgs = {
          user: string, 
          repo: string, 
          query?: IssueQuery
        }

type TotalIssueQueryArgs = {
          user: string, 
          repo: string, 
          state?: string
        }

//parses a regular JSON into a query url param*
const parseQuery = (query : IssueQuery) => !query? "" : "?" + Object.entries(query).map((value: [string, string])=>`${value[0]}=${value[1]}`).join("&");

//Endpont generator for DEFAULT ISSUES api*
export const getIssuesUrl = ({user, repo, query} : IssueQueryArgs) => `https://api.github.com/repos/${user}/${repo}/issues${parseQuery(query || {})}`;

//Endpoint generator for TOTAL ISSUES with filter by state*
export const getTotalIssuesUrl = ({user, repo, state} : TotalIssueQueryArgs) => `https://api.github.com/search/issues?page=0&per_page=1&q=repo:${user}/${repo}+type:issue${state ? "+state:" + state : ""}`;



