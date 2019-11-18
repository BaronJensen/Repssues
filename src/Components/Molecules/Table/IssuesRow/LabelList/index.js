//@flow
import React from "react";
import { List } from 'semantic-ui-react'
import {type IssueLabelsType} from "../../../../General/githubApiHelpers"
import styles from "./styles.less"

type Props = {
	items: Array<IssueLabelsType>
}

const LabelList = ({items}: Props) => (
  <List bulleted>
   {items.map((label: IssueLabelsType, key: number)=>(
   	<List.Item 
  		key={key} 
  		className={styles.tags} 
  		style={{color: "#" + label.color}}>
  		{label.name}
    </List.Item>))}
  </List>
)

export default LabelList;
 