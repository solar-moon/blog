import moment from "moment";

const TARGET = moment('2015-11-28 20:00:00+0100').utc();

let hh = document.getElementById('H');
let mm = document.getElementById('M');
let ss = document.getElementById('s');

let countdown = document.getElementById('countdown');

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) { s = "0" + s; }
  return s;
}

setInterval(() => {
  let diff = moment(TARGET.diff(moment().utc())).utc();

  let h = diff.hours();
  let m = diff.minutes();
  let cs = ~~(diff.milliseconds() / 10);
  let s = diff.seconds();
  if (h == 0 && m == 0 && s == 8 && cs < 61) {
    countdown.play();
  }
  hh.innerHTML = h.pad(2);
  mm.innerHTML = m.pad(2);
  ss.innerHTML = `${s.pad(2)}.${cs.pad(2)}`;
}, 30);
