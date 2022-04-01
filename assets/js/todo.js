$("ul").on("click", "li", function(){
      $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e){
      $(this).parent().fadeOut(500, function(){
          $(this).remove();
      });
        e.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        var text = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + text + "</li>");
        $(this).val("");
    }
});

$(".fa-pen").click(function(){
    $("input[type='text'").fadeToggle();
});