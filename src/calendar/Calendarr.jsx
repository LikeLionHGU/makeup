import {
  addDays,
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
import { useParams } from "react-router-dom";

import styles from "./Calendarr.module.css";
import Header from "../header/Header";
import "./Calendar.css";

import lefticon from "./img/left.png";
import righticon from "./img/right.png";
import spring from "./img/spring.png";
import spring2 from "./img/spring2.png";

function Calendarr() {
  const member_id = localStorage.getItem("member_id");
  const [reservedDate, setreservedDate] = useState(new Date());
  const calendarRef = useRef(null);
  const [startTime, setStartTime] = useState(null);
  const [data, setData] = useState([]);
  const params = useParams();
  const id = params.postId;
  // const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    calendarRef.current.setFocus();
  }, []);

  const onSelect = (time) => {
    setStartTime(time);
    // setIsSelected(true);
  };
  useEffect(() => {
    // API 호출

    fetch(`https://api.zionhann.shop/app/makeup/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, [id]);

  console.log(data);
  // const availDate = data.map((item) => item.mentoDate);
  // console.log({ availDate });
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
              selected={reservedDate}
              onChange={(date) => setreservedDate(date)}
              // includeDates={availDate}
              minDate={subDays(new Date(), 0)}
              inline
              disabledKeyboardNavigation
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
            <div className={styles.select}>
              <div className={styles.selected_date}>
                {reservedDate && (
                  <p>
                    원하는 요일
                    <br />
                    <div id={styles.date}>
                      {format(reservedDate, "yyyy/MM/dd")}
                      {/* {reservedDate.toLocaleDateString()} */}
                    </div>
                  </p>
                )}
              </div>

              {/* <div className={styles.selected_time}>
                <p>
                  원하는 시간
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
                </p>
              </div> */}
              <button className={styles.subButton}>작성 완료</button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Calendarr;
