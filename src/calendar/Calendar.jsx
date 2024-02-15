import { format, subDays } from "date-fns";
import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import styles from "./calendar.module.css";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const calendarRef = useRef(null);

  useEffect(() => {
    calendarRef.current.setFocus();
  }, []);

  return (
    <div className={styles.calendar}>
      <div className={styles.selected_date}>
        <DatePicker
          ref={calendarRef}
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={subDays(new Date(), 0)}
          inline
        />
        {startDate && (
          <p>
            원하는 날짜
            <br />
            {format(startDate, "yyyy/MM/dd")}
            {/* {startDate.toLocaleDateString()} */}
          </p>
        )}
      </div>
      <div className={styles.selected_time}></div>
    </div>
  );
};

export default Calendar;
