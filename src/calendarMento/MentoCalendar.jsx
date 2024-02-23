import {
  format,
  getMonth,
  getYear,
  setHours,
  setMinutes,
  subDays,
} from "date-fns";
import React, { useState, useEffect, useRef } from "react";
import ko from "date-fns/locale/ko";
import DatePicker from "react-datepicker";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";
import "../../node_modules/react-datepicker/dist/react-datepicker.module.css";

import styles from "./MentoCalendar.module.css";
import Header from "../header/Header";
import "../calendar/Calendar.css";

import lefticon from "../calendar/img/left.png";
import righticon from "../calendar/img/right.png";
import spring from "../calendar/img/spring.png";
import spring2 from "../calendar/img/spring2.png";
import calendar from "./calendar.png";

function MentoCalendar({ setIsCalendarOpen }) {
  const [mentoDate, setmentoDate] = useState(new Date());
  const calendarRef = useRef(null);
  const [startTime, setStartTime] = useState(null);
  // const [isSelected, setIsSelected] = useState(false);

  const [memberId, setmemberId] = useState("");

  const [selectedDate, setselectedDate] = useState([]);
  const [availableDates, setavailableDates] = useState([]);

  useEffect(() => {
    calendarRef.current.setFocus();
  }, []);

  const onSelect = (time) => {
    setStartTime(time);
    // setIsSelected(true);
  };

  const datepick = (date) => {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const dateString = year + "-" + month + "-" + day;
    fetch("https://api.zionhann.shop/app/makeup/posts/calendar/{memberId}", {
      // fetch("https://api.zionhann.shop/app/makeup/reservation/mento", {
      method: "POST",
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify({
        memberId: localStorage.getItem("member_id"),
        mentoDate: dateString,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log("결과: ", result));
  };

  return (
    <div>
      {" "}
      <div className={styles.header}>
        <Header></Header>
      </div>
      <div className={styles.diary}>
        {" "}
        <div className={styles.content}>
          <img className={styles.spring} src={spring} alt="springimg"></img>
          <img className={styles.spring2} src={spring2} alt="springimg"></img>
          <span className={styles.select_date}>
            {" "}
            <DatePicker
              locale={ko}
              ref={calendarRef}
              // dateFormat="yyyy/MM/dd"
              selected={mentoDate}
              minDate={subDays(new Date(), 0)}
              inline
              highlightDates={selectedDate}
              // className={styles.dateinput}
              onChange={(date) => {
                datepick(date);

                setselectedDate((prev) => {
                  if (prev.find((d) => d.getTime() === date.getTime())) {
                    return [
                      ...prev.filter((d) => d.getTime() !== date.getTime()),
                    ];
                  } else {
                    setmentoDate(date);
                    return [...prev, date];
                  }
                });
              }}
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
                    <span className={styles.month_day}>
                      {date.getMonth() + 1}월
                    </span>

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
            <div className={styles.content1}>
              <div className={styles.image}>
                <img src={calendar}></img>
              </div>
              <div className={styles.text}>
                <h3>가능한 날짜를 선택해주세요.</h3>
                <p>
                  날짜 설정을 한 후에도 피드 페이지에서
                  <br /> 언제든지 수정 가능합니다.
                </p>
              </div>
              <div className={styles.btn}>
                <button onClick={() => setIsCalendarOpen(false)}>
                  설정 완료
                </button>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MentoCalendar;
