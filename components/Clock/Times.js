import React from 'react';
import styles from './Times.module.css';

const formatTime = (timeLeftInMinutes) => {
  let hour = Math.floor(timeLeftInMinutes / 60);
  if (hour < 10) hour = '0' + hour;

  let minute = timeLeftInMinutes - 60 * hour;
  if (minute < 10) minute = '0' + minute;

  return `${hour}:${minute}`;
}

export default function Times(props) {
  var timeZone = `${Intl.DateTimeFormat().resolvedOptions().timeZone.replace("_", " ")}`

  return (
    <div className={styles.times}>
      <div className={styles.timescontent} style={{ backgroundColor: props.color, borderColor: props.bordercolor }}>
        {timeZone == "America/Mexico City" ?
          <>
            <div className={styles.timerlabel2}>{"CDMX time:"}</div>
          </>
          :
          <>
            <div className={styles.timerlabel}>{"CDMX time: " + formatTime(600)}</div>
            <div className={styles.timerlabel2}>{`Your local time:`}</div>
          </>
        }
        <span className={styles.timeleft}>{formatTime(props.timeLeftInMinutes)}</span>
        <div className={styles.timeLabel2}>{timeZone}</div>
      </div>
    </div>
  )
}