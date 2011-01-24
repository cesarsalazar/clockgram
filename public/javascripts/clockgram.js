$(function(){
  
  init();
  setInterval('time()', 1000);
  
})

var update = function(){
  
  var content = $('#photo');
  
  content.fadeOut(1000, function(){
    $.getJSON('/photo', function(data){
      var photo  = '<img class="photo" src="'+data.url+'"/>';
          photo += '<h1 class="author">'+data.author+'</h1>';
          photo += '<p class="username">'+data.username+'</p>';
          photo += '<p class="taken">'+data.taken+'</h1>';
      content.html(photo);
      content.fadeIn(1000);
      
    })
  });
  
}

var time = function(){
  
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  
  if(seconds%10 == 0){
    update();
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