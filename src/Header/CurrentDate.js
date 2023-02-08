import React from "react";

export default function CurrentDate(props) {
  let time = props.date;
  let timeData = new Date(time * 1000);

  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = weekdays[timeData.getDay()];

  let year = timeData.getFullYear();
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let month = months[timeData.getMonth()];
  if (month < 10) {
    month = `0${month}`;
  }
  let date = timeData.getDate();
  if (date < 10) {
    date = `0${date}`;
  }

  let hours = timeData.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = timeData.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="Date">
      {weekday} {year}/{month}/{date}
      <small>
        {" "}
        {hours}:{minutes}{" "}
      </small>
    </div>
  );
}
