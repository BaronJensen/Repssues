//@flow
import React from "react";
import { Table } from 'semantic-ui-react';
import styles from "./styles.less"

const LoadingItems = () => (
  <Table.Row>
    <Table.HeaderCell colSpan='6' className={styles.loadingBox}>
      
        <h2>Loading issues...</h2>
    
    </Table.HeaderCell>
  </Table.Row> 
)

export default LoadingItems;