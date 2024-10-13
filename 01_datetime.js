//TypeOf date is Object as you can see we are creating the object of the date
let myDate = new Date(); //This will give the current date.

// let customDate = new Date(2023,0,21); // we can also create our desired date(year,month(0-11),date)
// console.log(customDate.toDateString()); //Sat Jan 21 2023

// console.log(myDate); // 2024-10-13T06:38:47.395Z
// console.log(myDate.toString()); //Sun Oct 13 2024 12:09:23 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()); //2024-10-13T06:39:49.631Z
// console.log(myDate.toUTCString()); //Sun, 13 Oct 2024 06:40:33 GMT
// console.log(myDate.getDate()); //13
// console.log(myDate.getMonth()); //9
// console.log(myDate.getFullYear()); //2024
// console.log(myDate.getDay()); // 0
// console.log(myDate.getTime()); //17228801774292
// console.log(myDate.toJSON()); //2024-10-13T06:49:54.120Z
// console.log(myDate.toLocaleDateString()); //(13/10/2024)
// console.log(myDate.toLocaleTimeString()); //12:19:54 pm


// /*-330(how many minutes local system is ahead or behind from the Utc)
// Negative minutes signifies the local system is ahead of UTC and vica versa
// for the positive minutes*/
// console.log(myDate.getTimezoneOffset()) //-330(5.30 hours ahead of UTC)


// console.log(Date.now())  // 1728803219469 give current timestamp in milliseconds
// console.log(Math.floor(Date.now()/1000));  //1728803219 give current time stamp in seconds



//Another customization of Date
console.log(myDate.toLocaleString('Default', {
    day: "2-digit",
    era: "long",
    weekday: "long"
}))
//Output: Sunday 13 Anno Domini






