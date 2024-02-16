import {
  format,
  getMonth,
  getYear,
  setHours,
  setMinutes,
  subDays,
} from "date-fns";
import React, { useState, useEffect, useRef } from "react";
// import { ko } from "date-fns/esm/locale";
import ko from "date-fns/locale/ko";
import DatePicker from "react-datepicker";
import styles from "./calendar.module.css";
import "./calendar.module.css";
import "react-datepicker/dist/react-datepicker.css";
import "../../node_modules/react-datepicker/dist/react-datepicker.module.css";
import Header from "../header/Header";
import lefticon from "./img/left.png";
import righticon from "./img/right.png";
import diary from "./img/diary.png";

const Calendar = () => {
  const [reservedDate, setreservedDate] = useState(new Date());
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
      <div className={styles.header}>
        <Header></Header>
      </div>
      <div className={styles.content}>
        {/* <img src={diary} /> */}
        <span className={styles.select_date}>
          <DatePicker
            locale={ko}
            ref={calendarRef}
            // dateFormat="yyyy/MM/dd"
            selected={reservedDate}
            onChange={(date) => setreservedDate(date)}
            minDate={subDays(new Date(), 0)}
            inline
            // className={styles.dateinput}
            renderCustomHeader={({
              date,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
              decreaseMonth,
              increaseMonth,
            }) => (
              <div
                style={{
                  margin: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
                className={styles.calendar}
              >
                <div className={styles.calendar_header}>
                  <span
                    className={styles.btn_month}
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                  >
                    <img src={lefticon}></img>
                  </span>
                  <span className={styles.month_day}>{getMonth(date)}월</span>

                  <span
                    className={styles.btn_month}
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                  >
                    <img src={righticon}></img>
                  </span>
                </div>
              </div>
            )}
          />
        </span>

        <span className={styles.reservation}>
          <div className={styles.select}>
            <div className={styles.selected_date}>
              {reservedDate && (
                <p>
                  원하는 날짜
                  <br />
                  <div id={styles.date}>
                    {format(reservedDate, "yyyy/MM/dd")}
                    {/* {reservedDate.toLocaleDateString()} */}
                  </div>
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
          </div>
        </span>
      </div>
    </div>
  );
};

export default Calendar;
