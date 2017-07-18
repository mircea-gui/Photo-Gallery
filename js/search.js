// 1. type in the search box
$("#search").keyup(function(){

  var current_query = $("#search").val();

  if (current_query != ""){
    $("div.img img").hide();

    $("div.img img").each(function(){

      var current_list = $(this).attr("data-list");

      if (current_list.indexOf(current_query) >= 0){
        $(this).show();
      }
    });
  } else {
    $("div.img img").show();
  }

});
