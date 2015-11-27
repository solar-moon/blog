import moment from "moment";

const TARGET = moment('2015-11-28 19:00:00');

let diff = moment(TARGET.diff(moment()));

let hh = document.getElementById('H');
let mm = document.getElementById('M');
let ss = document.getElementById('s');

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) { s = "0" + s; }
  return s;
}

setInterval(() => {
  diff = diff.subtract(moment.duration(1, 'ms'));
  hh.innerHTML = diff.hours();
  mm.innerHTML = diff.minutes();
  ss.innerHTML = `${diff.seconds().pad(2)}.${diff.milliseconds().pad(3)}`;
}, 1);
