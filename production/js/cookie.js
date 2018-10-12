var getCookie = function(name) {
  var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value? value[2] : null;
};

var TimeAll2String = function(time) {
  var tmp = time / 1000
  var second = parseInt(tmp % 60);
  tmp = tmp / 60;
  var minute = parseInt(tmp % 60);
  tmp = tmp / 60;
  var hour = parseInt(tmp % 60);

  if(hour > 0)
    return hour+"시 "+minute+"분 "+second+"초"
  else
    return minute+"분 "+second+"초"
}
