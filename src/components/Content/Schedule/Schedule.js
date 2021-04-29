import React, { useState } from "react";
import styles from "./Schedule.module.css";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Schedule() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={styles.schedule}>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        monthsShown={1}
        inline
      />
    </div>
  );
}

export default Schedule;
