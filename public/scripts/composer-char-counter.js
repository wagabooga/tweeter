$(document).ready(function() {
  $("#tweet-text").on("input", function() {
    let charactersRemaining = 140 - $(this).val().length
    $(".counter").text(charactersRemaining)
    if (charactersRemaining < 0) {
      $(".counter").addClass("error")
    } else {
      $(".counter").removeClass("error")
    }
    //   $(".counter").css("color", "red")
    //   $(".counter").css("font-weight", "800")
    //   $(".counter").css("text-decoration", "underline")
    // }
    // if (charactersRemaining >= 0) {
    //   $(".counter").css("color", "green")
    //   $(".counter").css("font-weight", "800")
    //   $(".counter").css("text-decoration", "underline")
    // }
    console.log(charactersRemaining)
  });
});