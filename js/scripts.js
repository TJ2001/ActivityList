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

    $("#show-todo").append("<li>" + inputactivity + "</li>");

    $("input#activity").val("");
  });
});
