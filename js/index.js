//JQuery functionality for clicking list items
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Click on X/trash to delete list
$("ul").on("click", "#delete", function(event) {
  event.stopPropagation();
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
});

//Set up new list additions using enter key
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    //retrieving user additions from input
    let addList = $(this).val();
    //adding new list item
    $("ul").append(
      `<li><span id="delete"><i class="fas fa-minus-circle"></i></span><i class="fas fa-circle"></i> ${addList}</li>`
    );
    //empty the input
    $(this).val("");
  }
});

//show/hide input

$(".fa-pen-fancy").on("click", function() {
  $("input[type='text']").fadeToggle();
});