//@flow
import React from "react";
import { Dropdown } from 'semantic-ui-react'
import  styles from "./styles.less"

type Props = {
  changeOrder: (sort: string, direction: string)=>void,
  direction?: string,
  sort?: string,
}

type SortOptions = {
  key: string,
  text: string,
  value: string, //"sort tag-direction tag"
}

type SortArg = {
  value: string
}

const sortOptions: Array<SortOptions> = [
  {
    key: 'Last Created',
    text: 'Newest ',
    value: "created-desc",
    
  },
  {
    key: 'Oldest',
    text: 'Oldest',
    value: "created-asc",

  },
  {
    key: 'Recently updated',
    text: 'Recently updated',
    value: "updated-desc",
   
  },
  {
    key: 'Least Recently Updated',
    text: 'Least Recently Updated',
    value: "updated-asc",
  },
]


const SortSelector = React.memo<Props>(({changeOrder, direction, sort}: Props) => {

  const onChange = (e: SyntheticInputEvent<HTMLInputElement> , {value}: SortArg)=>{ 
    const sortValues: Array<string> = `${value}`.split("-");
    if(sortValues.length === 2)
      changeOrder(sortValues[0], sortValues[1]);
  }

  return(
    <span className={styles.sortSelector}>
      Order issues by{' '}
      <Dropdown
        inline
        options={sortOptions}
        onChange={onChange}
        defaultValue={`${sort}-${direction}`}
      />
    </span>
  )}); 

export default SortSelector;