$(function(){
  
  init();
  setInterval('time()', 1000);
  
})

var update = function(n){
  $('#photo'+(n-1)).html($('#preload').html()).show();
  $.getJSON('/photo', function(data){
    $('#preload').html('<img class="photo" src="'+data.url+'"/>');
    if(n != 5){
      $('#photo'+(n+1)).html('').show();
    }
    else{
      $('#photo0').html('').show();
    }
  });
}

var time = function(){
  
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  
  if(seconds%10 != 0){
    $('#photo'+Math.floor(seconds/10)).show().append('<div class="second-box"></div>');
  }
  if(seconds%10 == 0){
    update(seconds/10);
    if(seconds == 0){
      $('#photos').children().hide().html('');
    }
  }
  if(minutes == 0 && seconds == 0){
    $('#hours').html(normalizeTime(hours));
  }
  if(seconds == 0){
    $('#minutes').html(normalizeTime(minutes));
  }
  $('#seconds').html(normalizeTime(seconds));
}

var init = function(){
  var now = new Date();
  $('#hours').html(normalizeTime(now.getHours()));
  $('#minutes').html(normalizeTime(now.getMinutes()));
  $('#seconds').html(normalizeTime(now.getSeconds()));  
}

var normalizeTime = function(t){
  t = (t < 10) ? '0'+t : t;
  return t;
}