const dateBuilder = (dayDetail) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[dayDetail.getDay()];

  let date = dayDetail.getDate();

  let month = months[dayDetail.getMonth()];

  let year = dayDetail.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

export default dateBuilder;
