import React, { Component } from 'react';
import styles from './Times.module.css';

const formatTime = (timeLeftInMinutes) => {
  let hour = Math.floor(timeLeftInMinutes / 60);
  if (hour < 10) hour = '0' + hour;

  let minute = timeLeftInMinutes - 60 * hour;
  if (minute < 10) minute = '0' + minute;

  return `${hour}:${minute}`;
}

export default class Times extends Component {

  render() {
    return (
      <div className={styles.times}>
        <div className={styles.timescontent} style={{ backgroundColor: this.props.color, borderColor: this.props.bordercolor }}>
          {`${Intl.DateTimeFormat().resolvedOptions().timeZone.replace("_", " ")}` == "America/Mexico City" ? 
          <>
            <div className={styles.timerlabel2}>{this.props.timeLabel+":"}</div>
          </>
          : 
          <>
            <div className={styles.timerlabel}>{this.props.timeLabel+": "+formatTime(600)}</div>
            <div className={styles.timerlabel2}>{`Your local time:`}</div> 
          </>
          }
          <span className={styles.timeleft}>{formatTime(this.props.timeLeftInMinutes)}</span>
          <div className={styles.timeLabel2}>{`${Intl.DateTimeFormat().resolvedOptions().timeZone.replace("_", " ")}`}</div>
        </div>
      </div>
    )
  }
}