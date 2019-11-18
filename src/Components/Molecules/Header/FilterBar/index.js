//@flow
import React from "react";
import { Button } from 'semantic-ui-react'
import styles from "./styles.less"


type Props = {
  active?: string,
  changeFilter: (filter: string)=> void,
}

const FilterBar =  React.memo<Props>(({active, changeFilter}: Props) => {
  
  return (
  <Button.Group className = {styles.filterButtonsGroup}>
    <Button  className={(active  === "all" || active === "")?styles.activeBTN + " activated" :""}  onClick={()=>{changeFilter("all")}}>
      All <span role = "img"  aria-label = "emoji-logo">🌎</span>
    </Button>
    <Button className = {active  === "open"?styles.activeBTN + " activated":""} onClick={()=>{changeFilter("open")}}>
      Open <span role="img"  aria-label="emoji-logo">🕦</span>
    </Button>
    <Button className = {active  === "closed"?styles.activeBTN + " activated":""} onClick={()=>{changeFilter("closed")}}>
      Closed <span role="img"  aria-label="emoji-logo">✔️</span>
    </Button>
  </Button.Group>
)});

export default FilterBar;