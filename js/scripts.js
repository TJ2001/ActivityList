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

    $("#show-todo").append("<button type='button' class='btn-sm btn-danger inline clearList' name='button'>Done</button><li>" + inputactivity + "</li><br>");

    $("input#activity").val("");

    $(".clearList").click(function(){
      $(this).next().remove();
      $(this).next().remove();
      $(this).remove();
    });
  });


});
