//@flow
import React from "react";
import FilterBar from "./FilterBar"
import SortSelector from "./SortSelector"
import  styles from "./headerStyles.less"
type Props = {
  repo: string, 
  user: string, 
  changeFilter: (filter: string)=>void,
  changeOrder: (sort: string, direction: string)=>void,
  direction?: string,
  sort?: string,
  filter?: string
}

const Header =  React.memo<Props>(({
    repo, 
    user, 
    changeFilter,
    changeOrder,
    direction,
    sort,
    filter
  }: Props ) => {
  return (
    <div className={styles.headerContainer}>
      <h1> <span role="img"  aria-label="emoji-logo">🐙</span> Repssues</h1>  
      <h3>{user} / <b>{repo}</b></h3>
      <SortSelector changeOrder = {changeOrder} sort = {sort} direction = {direction} />
      <FilterBar active = {filter} changeFilter = {changeFilter}/>
    </div> 
)});

export default Header