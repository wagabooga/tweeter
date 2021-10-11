$(document).ready(function() {
  $("#tweet-text").on("input", function() {
    let charactersRemaining = 140 - $(this).val().length
    // check if characters are less than 0, if so apply red underlined bold styling
    $(".counter").text(charactersRemaining)
    if (charactersRemaining < 0) {
      $(".counter").addClass("error")
    } else {
      $(".counter").removeClass("error")
    }
    

    console.log(charactersRemaining)
  });
});