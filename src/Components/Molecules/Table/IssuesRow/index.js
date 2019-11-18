//@flow
import React from "react";
import { Table, Icon } from 'semantic-ui-react';
import {type IssueType} from "../../../General/githubApiHelpers";
import LabelList from "./LabelList"
import styles from "./styles.less"

type Props = {
  issue: IssueType
 
}

const IssuesRow = ({issue}: Props ) => {
  return (
      <Table.Row  className={styles.rowContainer}>
        <Table.Cell className={styles.cellItem} style={{position:"relative", padding:"2rem"}}>
          <a 
            href={issue.html_url} 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}>
            #{issue.number}
            <Icon className={styles.linkIcon} name="external alternate"/></a>
        </Table.Cell>
        <Table.Cell className={styles.cellItem +" " + styles.title} style={{width:"270px"}}>{issue.title}</Table.Cell>
        <Table.Cell className={styles.cellItem}> <label className={styles.hiddenBig}>Created: </label> {issue.created_at.split("T")[0]} </Table.Cell>
        <Table.Cell className={styles.cellItem}> <label className={styles.hiddenBig}>Updated: </label>{issue.updated_at.split("T")[0]}</Table.Cell>
        <Table.Cell className={styles.cellItem}> <LabelList items={issue.labels || []} /></Table.Cell>
        <Table.Cell className={styles.cellItem}>
          <label className={styles.hiddenBig}>State: {issue.state} </label>
            <span role="img"  aria-label="emoji-logo">
              {issue.state === "closed"?"✔️":"🕦"}
            </span>

            <div className={styles.hiddenBig + " " + styles.separator}> </div>
          </Table.Cell>
      </Table.Row>
  )}

export default IssuesRow;
