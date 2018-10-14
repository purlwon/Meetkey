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

var printMyInfo = function(unum) {

  var settings = {
    crossDomain: true,
    url: "https://kz2hltyjb2.execute-api.ap-northeast-2.amazonaws.com/test/valid/user",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({unum: 1})
  }

  $.ajax(settings)
    .done(function (response) {
      console.log(response);

      if(response.uimage) {
        $("#menu_img").attr('src', response.uimage);
        $("#bar_img").attr('src', response.uimage);
      }

      $("#menu_info").text(response.company+"/"+response.department+"/"+response.position);
      $("#menu_name").text(response.uname);
      $("#bar_name").text(response.uname);
    });
}
