import { format, setHours, setMinutes, subDays } from "date-fns";
import React, { useState, useEffect, useRef } from "react";
// import { ko } from "date-fns/esm/locale";
import ko from "date-fns/locale/ko";
import DatePicker from "react-datepicker";
import styles from "./calendar.module.css";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const calendarRef = useRef(null);
  const [startTime, setStartTime] = useState(null);
  // const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    calendarRef.current.setFocus();
  }, []);

  const onSelect = (time) => {
    setStartTime(time);
    // setIsSelected(true);
  };

  return (
    <div className={styles.calendar}>
      <span className={styles.select_date}>
        <DatePicker
          locale={ko}
          ref={calendarRef}
          // dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={subDays(new Date(), 0)}
          inline
          // className={styles.dateinput}
        />
      </span>
      <span className={styles.reservation}>
        <div className={styles.selected_date}>
          {startDate && (
            <p>
              원하는 날짜
              <br />
              {format(startDate, "yyyy/MM/dd")}
              {/* {startDate.toLocaleDateString()} */}
            </p>
          )}
        </div>
        <div className={styles.selected_time}>
          <p>원하는 시간</p>
          <DatePicker
            selected={startTime}
            dateFormat="HH:mm"
            onChange={onSelect}
            // locale={ko}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            // minTime={setHours(setMinutes(new Date(), 0), 10)}
            // minTime={setHours(setMinutes(new Date(), 10))}
            // maxTime={setHours(setMinutes(new Date(), 0), 23)}
            timeCaption=""
            timeFormat="HH:mm"
            placeholderText="XX:00"
            className={styles.timeinput}
          />
        </div>
      </span>
    </div>
  );
};

export default Calendar;
