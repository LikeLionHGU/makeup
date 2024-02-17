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
import "./calendar.module.scss";
import "./calendar.module.css";
import "react-datepicker/dist/react-datepicker.css";
import "../../node_modules/react-datepicker/dist/react-datepicker.module.css";
import Header from "../header/Header";

const Calendar = () => {
  const [reservedDate, setreservedDate] = useState(new Date());
  const calendarRef = useRef(null);
  const [startTime, setStartTime] = useState(null);
  // const [isSelected, setIsSelected] = useState(false);

  const onSelect = (time) => {
    setStartTime(time);
    // setIsSelected(true);
  };

  return (
    <div className="calendar">
      <div className="header">
        <Header></Header>
      </div>
      <div className="content">
        {/* <img src={diary} /> */}
        <span className="select_date">
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
                  width: "500px",
                  height: "50px",
                }}
                className="calendar"
              >
                <div className="calendar_header">
                  <span
                    className="btn_month"
                    onClick={decreaseMonth}
                    // disabled={prevMonthButtonDisabled}
                  >
                    이전달
                    {/* <img src="./img/left.png"></img> */}
                  </span>
                  <span className="month_day">{date.getMonth() + 1}월</span>

                  <span
                    className="btn_month"
                    onClick={increaseMonth}
                    // disabled={nextMonthButtonDisabled}
                  >
                    다음달
                    {/* <img src="./img/right.png"></img> */}
                  </span>
                </div>
              </div>
            )}
          />
        </span>

        <span className="reservation">
          <div className="select">
            <div className="selected_date">
              {reservedDate && (
                <p>
                  원하는 날짜
                  <br />
                  <div id="date">
                    {format(reservedDate, "yyyy/MM/dd")}
                    {/* {reservedDate.toLocaleDateString()} */}
                  </div>
                </p>
              )}
            </div>
            <div className="selected_time">
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
                className="timeinput"
              />
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Calendar;
