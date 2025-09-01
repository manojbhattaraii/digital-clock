document.getElementById("set").onclick = () => {
  let h = Number.parseInt(document.getElementById("hrs").value);
  let m = Number.parseInt(document.getElementById("min").value);
  let s = Number.parseInt(document.getElementById("sec").value);
  let ap = document.getElementById("apm").value;

  if (h > 12 || s > 60 || m > 60) {
    document.getElementById("error").style.display = "block";
  } else {
    document.getElementById("error").style.display = "none";
    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("second").innerHTML = s;
    document.getElementById("ap").innerHTML = ap;
  
};
}

const tme =  () => {
    //for blinking dot
  document.getElementById("c2").classList.toggle("toggle")
  document.getElementById("c1").classList.toggle("toggle")
  let hs = Number(document.getElementById("hour").textContent);
  let ms = Number(document.getElementById("minute").textContent);
  let ss = Number(document.getElementById("second").textContent);

  ss++
   if (ss <= 9) {
    document.getElementById("second").innerHTML = "0" + ss;
  }
   else if (ss < 60) {
    document.getElementById("second").innerHTML = ss;
  } else {
    document.getElementById("second").innerHTML = "00";
    ms++;
  }
  //minute
    if (ms <= 9) {
    document.getElementById("minute").innerHTML = "0"+ms;
  }
  else if (ms < 60) {
    document.getElementById("minute").innerHTML = ms;
  } else {
    document.getElementById("minute").innerHTML = "00";
    hs++;
  }
  //hour
  if (hs <= 9) {
    document.getElementById("hour").innerHTML = "0"+hs;
  }
  else if(hs<=12){
document.getElementById("hour").innerHTML = hs;
  }
   else {
    document.getElementById("hour").innerHTML = "1";
    let a = document.getElementById("ap").textContent;
    if (a == "AM") {
      document.getElementById("ap").innerHTML = "PM";
    } else {
      document.getElementById("ap").innerHTML = "AM";
    }
  }
};

setInterval(tme, 1000);
