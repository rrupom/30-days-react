function showDateTime() {
  let date = new Date();
  let month = String(date.getMonth()).padStart(2, "0");
  let day = String(date.getDay()).padStart(2, "0");
  let year = String(date.getFullYear());
  let hour = String(date.getHours()).padStart(2, "0");
  let minute = String(date.getMinutes()).padStart(2, "0");

  let statement = `${day}/${month}/${year} ${hour}:${minute}`;
  return statement;
}

console.log(showDateTime());
