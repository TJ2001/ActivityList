// Business Logic
function List (activity) {
  this.activity = activity;
}


// User Logic
$(function(){
  $("form").submit(function(event){
      // debugger;
    event.preventDefault();

    var inputactivity = $("#activity").val();

    var newActivities = new List(inputactivity)

    $("#show-todo").append("<li>" + inputactivity + "</li><button type='button' class='btn-sm btn-danger inline clearList' name='button'>Done</button><br>");

    $("input#activity").val("");

    $(".clearList").click(function(){
      $(this).prev().remove();
      $(this).remove();
    });
  });


});
