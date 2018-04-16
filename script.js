// Write JavaScript here 
var i = 0, j;
var startT, startT1;
var whiteTime, blackTime;
var timeoutW, timeoutB;
var delta;
function start(){
  delta = new Date().getTime() - startT1;
  startT1 = new Date().getTime();
  if (i === 0){
    delta = 0;
    wTime(document.getElementById('wTime'));
    bTime(document.getElementById('bTime'));
    startT = new Date().getTime();
    allT();
  }
  
  if (i%2 === 0){
    blackTime = blackTime - delta;
    j = 0;
    document.getElementById('but').innerHTML = 'Хід білих';
    document.getElementById('zalW').style.border = 'black solid 5px';
    document.getElementById('zalW').style.margin = '10px';
    document.getElementById('zalB').style.border = 'grey solid 1px';
    document.getElementById('zalB').style.margin = '0px';
    backT();
  }
  else{
    j = 0;
    whiteTime = whiteTime - delta;
    document.getElementById('but').innerHTML = 'Хід чорних';
    document.getElementById('zalB').style.border = 'black solid 5px';
    document.getElementById('zalB').style.margin = '10px';
    document.getElementById('zalW').style.border = 'grey solid 1px';
    document.getElementById('zalW').style.margin = '0px';
    backTb();
  }
  i++;
 }

function allT(){
    var wT = new Date().getTime();
    t =  Math.floor(wT - startT);
    document.getElementById("time").value = readMiliSeconds(t); 
    setTimeout(allT, 1000);  
}

function firstZero(z){
  return (z < 10) ? ('0' + z) : (z);                        
}

function readMiliSeconds(mSek){
  var h = 0, m = 0, s, sek;
  sek = Math.round(mSek / 1000);
  if (sek / 3600 > 0) {h = Math.floor(sek / 3600);}
  if (sek / 60 > 0) {m = Math.floor(sek / 60);}
  s = sek % 60;
  return firstZero(h) + ' : ' + firstZero(m) + ' : ' + firstZero(s);
}

function backT(){
    var nowT = new Date().getTime();
    t =  Math.round(whiteTime - (nowT - startT1));
    if (t <= 0) {document.getElementById('zalW').value =
      'Game over. Black win.';}
    else {
      document.getElementById('zalW').value = readMiliSeconds(t); 
      timeoutW = setTimeout(backT, 1000);
      if (j === 0) {
        clearTimeout(timeoutB);
      }
      j++;
    }
}

function backTb(){
    var nowT = new Date().getTime();
    t =  Math.round(blackTime - (nowT - startT1));
    if (t <= 0) {document.getElementById('zalB').value =
      'Game over. White win.';}
    else {
      document.getElementById('zalB').value = readMiliSeconds(t); 
      timeoutB = setTimeout(backTb, 1000);
      if (j === 0) {
        clearTimeout(timeoutW);
      }
      j++;
    }
}

function wTime(x){
  whiteTime = x.value * 60 * 1000;
}

function bTime(x){
  blackTime = x.value * 60 * 1000;
}