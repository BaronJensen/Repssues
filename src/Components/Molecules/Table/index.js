//@flow
import React from "react";
import { Table } from 'semantic-ui-react';
import useScrollBreakPoint from "../../Hooks/scrollBreakPoint"
import IssuesHeader from "./IssuesHeader";
import IssuesRow from "./IssuesRow";
import LoadingItems from "./LoadingItems";
import {type IssueType} from "../../General/githubApiHelpers";
import styles from "./styles.less"
 
type Props = {
  issues: Array<IssueType>,
  loading: bool
}

const CustomTable = ({issues, loading}: Props) => {

  const isSticky: bool = useScrollBreakPoint(70)

  return (
    <div  className={styles.tableContainer}>

    {/*"STICKY" BAR - ON */}
    <Table className={ isSticky ? styles.sticky : styles.noSticky}>  
      <IssuesHeader/>
    </Table>

    <Table className={styles.tableItem}>  
      {/*"STICKY" BAR - OFF*/}
      <IssuesHeader isSticky = {isSticky}/>
      <Table.Body className = {styles.tableBody}>
        {loading?
          <LoadingItems/>:
          issues.map((issue: IssueType, key: number)=> (
            <IssuesRow key = {issue.number} issue = {issue}/>
          ))
        }
      </Table.Body>
    </Table>
  </div>
)}

export default CustomTable
