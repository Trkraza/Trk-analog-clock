//  Day Date Alarm Setting Js
var alarmSound = new Audio();
alarmSound.src = "alarmsong.mp3";

var alarmTimer;
function setAlarm(button) {
  var Ms = Document.GetElementById("AlarmTime").ValueAsNumber;
  if (isNaN(Ms)) {
    alert("Invalid Date");
    Return;
  }
  var Alarm = new Date(Ms);
  var alarmTime = new Date(
    Alarm.GetUTCFullYear(),
    Alarm.GetUTCMonth(),
    Alarm.GetUTCDate(),
    Alarm.GetUTCHours(),
    Alarm.GetUTCMinutes(),
    Alarm.GetUTCSeconds()
  );
  var DifferenceInMs = alarmTime.getTime() - new Date().getTime();
  if (DifferenceInMs < 0) {
    alert("Specified Time Is Already Passed");
    return;
  }
  alarmTimer = SetTimeout(initAlarm, DifferenceInMs);
  button.InnerText = "Cancel Alarm";
  button.SetAttribute("Onclick", "CancelAlarm(This);");
}

function cancelAlarm(Button) {
  ClearTimeout(alarmTimer);
  Button.InnerText = "Set Alarm";
  Button.setAttribute("Onclick", "SetAlarm(This);");
}

function initAlarm() {
  alarmSound.play();
  Document.getElementById("AlarmOptions").style.Display = "";
}

function stopAlarm() {
  alarmSound.pause();
  alarmSound.CurrentTime = 0;
  Document.getElementById("AlarmOptions").style.display = "None";
  cancelAlarm(Document.getElementById("AlarmButton"));
}

function Snooze() {
  stopAlarm();
  alarmTimer = SetTimeout(initAlarm, 300000); // 5 * 60 * 1000 = 5 Minutes
}
setInterval(() => {
    d =new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation=30*htime + mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;

    hour.style.transform=`rotate(${hrotation}deg)`
    minute.style.transform=`rotate(${mrotation}deg)`
    second.style.transform=`rotate(${srotation}deg)`
},1000);



