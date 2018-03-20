
// check off specific todo item by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});


// click on X to delete to do item
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if (e.which === 13){
        //getting new item
        var todoText = $(this).val();
        $(this).val("");
        //create a new li to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").slideToggle(200);
});
