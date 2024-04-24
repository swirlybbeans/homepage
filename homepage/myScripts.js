//CLOCK SCRIPT
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
   }
   
   function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
   }
   function search() {
    const api_key = "cf8e9cff4f9558b72b88f49f9e9e0add";
    let input_value = document.getElementById("location-input").value;
    try {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input_value}&appid=${api_key}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => display(data));
  
      document.getElementById("location-input").value = "";
    } catch (e) {
      console.error(e);
    }
  }
  
  