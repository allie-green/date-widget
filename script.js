function dispalyDate(today) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = [
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
  
    var dayName = days[today.getDay()];
    var monthName = monthNames[today.getMonth()];
    var date = today.getDate();
  
    document.getElementById("day").innerHTML = dayName;
    document.getElementById("num").innerHTML = date;
    document.getElementById("month").innerHTML = monthName;
  }
  
  function dispalyWidget() {
    var today = new Date();
    dispalyDate(today);
  }
  
  dispalyWidget();