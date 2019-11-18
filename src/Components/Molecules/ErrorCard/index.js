//@flow
import React from "react";
import styles from "./styles.less"

const ErrorCard = React.memo<>(() => ( 
  <div className={styles.errorContainer}>
    <h1>Ups there is a bigger issue...</h1>
    <br/>
    <pre>
	   	<a href="."> Try again </a>
    </pre>
  </div>
))

export default ErrorCard;