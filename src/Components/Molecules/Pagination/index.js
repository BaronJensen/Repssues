//@flow
import React from "react";
import {Icon, Pagination, Grid, Responsive, Button} from 'semantic-ui-react';
import styles from "./styles.less"

type Props = {
  changePagination: (page: number) => void, 
  appendPagination: (page: number)=> void, 
  totalIssues: number, 
  currentPage: number,
  issuesLimit: number,
}

type NewPage = {
 activePage: number
}

const CustomPagination = React.memo<Props>(({changePagination, appendPagination, totalIssues, currentPage, issuesLimit}: Props) => {

  const handlePaginationChange = (e:SyntheticEvent<HTMLButtonElement> , { activePage }: NewPage) =>  changePagination(activePage);
  const appendPage = () => appendPagination(currentPage + 1)


  return (
        <React.Fragment>

           <Responsive as={Grid} minWidth={768}>
             <Pagination
                className={styles.pagination}
                activePage={currentPage }
                onPageChange={handlePaginationChange}
                totalPages={parseInt(totalIssues / issuesLimit) + (totalIssues % issuesLimit !== 0 ? 1 : 0)}
                boundaryRange= {1}
                siblingRange= {1}
                pointing
                secondary
                ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                firstItem={null}
                lastItem={null}
                prevItem={{ content: <Icon name='angle left' />, icon: true }}
                nextItem={{ content: <Icon name='angle right' />, icon: true }}
              />
            </Responsive>

            <Responsive as={Grid} centered maxWidth={768}>
              <Button onClick={appendPage}>Load more</Button>
            </Responsive>

        </React.Fragment>
  )});

export default CustomPagination;