import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  return (<button className={styles[props.type]}>{props.icon}{props.text}</button>)
}

export const DownloadButton = (props) => {
  return (<button className={styles.download}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <svg style={{ paddingRight: "10px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" fill="white" />
        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" fill="white" />
      </svg>
      {props.text}
    </div>
  </button>)
}

export const CancelButton = (props) => {
  return (<button className={styles.cancel}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <svg style={{ paddingRight: "10px" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
        <path fill="white" d="M3.293 3.293a1 1 0 0 1 1.414 0L8 6.586l3.293-3.293a1 1 0 1 1 1.414 1.414L9.414 8l3.293 3.293a1 1 0 0 1-1.414 1.414L8 9.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L6.586 8 3.293 4.707a1 1 0 0 1 0-1.414z" />
      </svg>
      {props.text}
    </div>
  </button>)
}
