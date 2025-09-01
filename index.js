
async function fetchRealTime() {
  try {
    const res = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kathmandu'); 
    const data = await res.json();
    const datetime = new Date(data.datetime);

    
    document.getElementById("hour").innerHTML = formatHour(datetime.getHours());
    document.getElementById("minute").innerHTML = pad(datetime.getMinutes());
    document.getElementById("second").innerHTML = pad(datetime.getSeconds());
    document.getElementById("ap").innerHTML = datetime.getHours() >= 12 ? "PM" : "AM";

  } catch (error) {
    console.error("Error fetching time:", error);
    document.getElementById("error").innerText = "Could not fetch real time.";
    document.getElementById("error").style.display = "block";
  }
}


fetchRealTime();


document.getElementById("set").onclick = () => {
  let h = parseInt(document.getElementById("hrs").value);
  let m = parseInt(document.getElementById("min").value);
  let s = parseInt(document.getElementById("sec").value);
  let ap = document.getElementById("apm").value;

  if (h > 12 || s > 59 || m > 59 || h < 1 || m < 0 || s < 0) {
    document.getElementById("error").style.display = "block";
  } else {
    document.getElementById("error").style.display = "none";
    document.getElementById("hour").innerHTML = pad(h);
    document.getElementById("minute").innerHTML = pad(m);
    document.getElementById("second").innerHTML = pad(s);
    document.getElementById("ap").innerHTML = ap;
  }
};


const tme = () => {
  document.getElementById("c2").classList.toggle("toggle");
  document.getElementById("c1").classList.toggle("toggle");

  let hs = parseInt(document.getElementById("hour").textContent);
  let ms = parseInt(document.getElementById("minute").textContent);
  let ss = parseInt(document.getElementById("second").textContent);
  let ap = document.getElementById("ap").textContent;

  ss++;
  if (ss > 59) {
    ss = 0;
    ms++;
  }
  if (ms > 59) {
    ms = 0;
    hs++;
  }
  if (hs > 12) {
    hs = 1;
    ap = ap === "AM" ? "PM" : "AM";
  }

  document.getElementById("second").innerHTML = pad(ss);
  document.getElementById("minute").innerHTML = pad(ms);
  document.getElementById("hour").innerHTML = pad(hs);
  document.getElementById("ap").innerHTML = ap;
};


function pad(n) {
  return n.toString().padStart(2, '0');
}

function formatHour(h) {
  const hour12 = h % 12 || 12;
  return pad(hour12);
}


setInterval(tme, 1000);
