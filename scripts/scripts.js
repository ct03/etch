$(document).ready(function(){
  var grid = 16;

  function table(grid){
    for(y=0;y<grid;y++){
      for(i=0;i<grid;i++){
        $('#container').append('<div class="table"></div>');
      }
   $('#container').append('<div class="end"></div>');
    }
  }

  table(grid);

 $('.table').hover(function(){
    $(this).css('background-color', 'blue');
  });

});


function refresh(){
  $('.table').css('background-color','red');
  var num=prompt('enter grid');
  $('.table').removeClass();
  table(num);
 $('.table').hover(function(){
    $(this).css('background-color', 'blue');
  });
}

 
function party(){
 $('.table').hover(function(){
    $(this).css('background-color', '#' + Math.floor(Math.random()*1000000)); 
});
}

function table(grid){
  for(y=0;y<grid;y++){
    for(i=0;i<grid;i++){
      $('#container').append('<div class="table"></div>');
    }
 $('#container').append('<div class="end"></div>');
  }
}


