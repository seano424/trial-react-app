import React from "react";
import styles from "./Person.module.css"

const person = (props) => {
  return (
    <div className={styles.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old!
      </p>
      <input type="text" onChange={props.changed}/>
    </div>
  )
}

export default person