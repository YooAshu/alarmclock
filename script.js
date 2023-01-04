let t1 = document.getElementsByClassName('t1')[0]
let t2 = document.getElementsByClassName('t2')[0]
let check = document.getElementsByClassName('check')[0]
let circle = document.getElementsByClassName('circle')[0]
let currenttime = document.getElementsByClassName('currenttime')[0]
let alarm = new Audio("/alarm.mp3")
let s1 = document.getElementsByClassName('s1')[0]
let s2 = document.getElementsByClassName('s2')[0]

hour()

function hour(){

for (let i = 1; i <= 12; i++) {

  circle.innerHTML += `<div class = "digit"  style = "--i:${i};" > <p id = "${i}" onclick = "show(this.id)">${i}</P></div>`

}
for (let i = 13; i <= 24; i++) {

  circle.innerHTML += `<div class = "digit2"  style = "--i:${i};" > <p id = "${i}" onclick = "show(this.id)" >${i}</P></div>`

}
document.getElementById('24').innerHTML = '00'
}

function show(a) {
  t1.innerHTML = a


  if (a == 24) {
    t1.innerHTML = "00"
  }

 if (a >= 0 && a <= 9) {
    t1.innerHTML = 0 + a
}
  
  setTimeout(() => {
    circle.innerHTML = ""
    minute1()
    minute2()
  }, 400)
}
function minute1() {
  let i = 0
  
  while (i <= 55) {

    circle.innerHTML += `<div class = "digit3"  style = "--i:${i};" > <p id = "${i}" class = "${i}" onclick = "showm(this.className)"> ${i}</P></div>`
    i = i + 5
  }
  document.getElementById('0').innerText = "00"
  document.getElementById('5').innerText = "05"
}


function minute2() {
  
  let i = 0
  while (i <= 55) {

    circle.innerHTML += `<div class = "digit4"  style = "--i:${i};" > <p  class = "min2" ></P></div>`
    i = i + 5
  }
  let min2 = document.querySelectorAll('.min2')
  let j = 1
  for (items of min2) {
    items.innerHTML += `<span class = "pointminute" id = "${j}" onclick = "showm(this.id)">.</span>`
    j += 1
    items.innerHTML += `<span class = "pointminute" id = "${j}" onclick = "showm(this.id)">.</span>`
    j += 1
    items.innerHTML += `<span class = "pointminute" id = "${j}" onclick = "showm(this.id)">.</span>`
    j += 1
    items.innerHTML += `<span class = "pointminute" id = "${j}" onclick = "showm(this.id)">.</span>`
    j += 2

  }

}

function showm(a) {
  t2.innerHTML = a
  if ( a>= 0 && a <= 9) {
    t2.innerHTML = 0 + a
  }
}

let hh;
let mm;

check.onclick = () => {
  hh = t1.innerHTML
  mm = t2.innerHTML
  s1.innerText = 'Alarm Is set For'
  s2.innerText = `${hh}:${mm}`
}
setInterval(() => {
  let d = new Date()
  let h = d.getHours()
  let m = d.getMinutes()
  let s = d.getSeconds()
  currenttime.innerText = `${h} : ${m} : ${s}`
  if (hh == h && mm == m) {
    alarm.play();
   
  }

}, 1000)
t1.onclick = ()=>{
  circle.innerHTML = ""
  hour()
}