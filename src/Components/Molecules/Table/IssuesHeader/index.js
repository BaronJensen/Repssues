//@flow
import React from "react";
import { Table, Responsive } from 'semantic-ui-react';
import styles from "./styles.less"
type Props = {
  isSticky?: bool,
}
const CustomTable = ({isSticky}: Props) => {
  return (
      <Responsive 
        as={Table.Header} 
        style={{opacity:isSticky?"0":"1"}}
        minWidth={750}>
      <Table.Row className={styles.tableHeader}>
          <Table.HeaderCell className={styles.Issue}>Issue</Table.HeaderCell>
          <Table.HeaderCell className={styles.Title}>Title</Table.HeaderCell>
          <Table.HeaderCell className={styles.Created}>Created</Table.HeaderCell>
          <Table.HeaderCell className={styles.Updated}>Updated</Table.HeaderCell>
          <Table.HeaderCell className={styles.Labels}>Labels</Table.HeaderCell>
          <Table.HeaderCell className={styles.Status}>Status</Table.HeaderCell>
          </Table.Row>
      </Responsive>
)}

export default CustomTable;