
function convert(num){
  var bin = "";
  var conv = [];

  while(num>0) {
      bin = num%2 + bin;
      num = Math.floor(num/2);
  }
  conv = bin.split("");
  while(conv.length < 6){
	  conv.unshift("0");
  }
  return conv;
}

window.setInterval(function(){ 
    var d = new Date();
    var yea = d.getFullYear();
    var mon = d.getMonth()+1;
    var day = d.getDate();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var mmd = new Array(0,31,28,31,30,31,30,31,31,30,31,30,31);
    if((yea%4==0&&yea%100!=0)||yea%400==0)
      mmd[2]++;

    if(mon<3||(mon==3&&day<14))
      yea=yea-2016-1;
    else
      yea=yea-2016;

    if(mon<3||(mon==3&&day<14))
      mon=mon+12-3-1;
    else
      mon=mon-3;

    if(day>=14)
      day=day-14;
    else
      day=day+mmd[d.getMonth()==0?12:d.getMonth()]-14;
    
    var time1 = yea + " YEAR " + mon + " MONTH " + day + " DAY";
    var time2 = addZero(h) + " HOUR " + addZero(m) + " MINUTE " + addZero(s) + " SECOND";
  
    $('#time1').text(time1);
    $('#time2').text(time2);
    var binaryArray = convert(s);
    lightSeconds(binaryArray);
    
    var binaryArray = convert(m);
    lightMinutes(binaryArray);
  
    var binaryArray = convert(h);
    lightHours(binaryArray);
    
    var binaryArray = convert(day);
    lightDays(binaryArray);
    
    var binaryArray = convert(mon);
    lightMonths(binaryArray);
    
    var binaryArray = convert(yea);
    lightYears(binaryArray);
  
}, 1000);

function lightSeconds(array){
    $('.seconds td').attr('class','num0');
  for(var i =0; i<array.length; i++){
    $('.seconds td:eq('+i+')').attr('class','num'+array[i]);
  }
}

function lightMinutes(array){
    $('.minutes td').attr('class','num0');
  for(var i =0; i<array.length; i++){
    $('.minutes td:eq('+i+')').attr('class','num'+array[i]);
  }
}

function lightHours(array){
    $('.hours td').attr('class','num0');
  for(var i =0; i<array.length; i++){
    $('.hours td:eq('+i+')').attr('class','num'+array[i]);
  }
}

function lightYears(array){
    $('.years td').attr('class','num0');
  for(var i =0; i<array.length; i++){
    $('.years td:eq('+i+')').attr('class','num'+array[i]);
  }
}
function lightMonths(array){
  $('.months td').attr('class','num0');
for(var i =0; i<array.length; i++){
  $('.months td:eq('+i+')').attr('class','num'+array[i]);
}
}
function lightDays(array){
  $('.days td').attr('class','num0');
for(var i =0; i<array.length; i++){
  $('.days td:eq('+i+')').attr('class','num'+array[i]);
}
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}