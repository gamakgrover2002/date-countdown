const endDate="9 November 2026 24:00";
document.getElementById('end-Date').innerText = endDate;
const inputs = document.querySelectorAll("input");
const clock =()=>{
    let  end = new Date(endDate)
    let now = new Date();
    let dif= (end-now)/1000;  //dif in seconds
      let days = dif/24/3600;
   inputs[0].value = Math.floor(days);
   let hours = (dif/3600)%24;
   inputs[1].value = Math.floor(hours);
   let minutes = (dif/60)%60;
   inputs[2].value = Math.floor(minutes);
   let seconds = dif%60;
   inputs[3].value = Math.floor(seconds);
   }
setInterval(clock,1000);
