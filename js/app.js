// Lazy load

// $(document).ready(function() {
//   $("img").Lazy({
//     // your configuration goes here
//     scrollDirection: "vertical",
//     effect: "fadeIn",
//     visibleOnly: true,
//     onError: function(element) {
//       console.log("error loading " + element.data("src"));
//     }
//   });
// });

// Burger
$(document).ready(function() {
  $(".burger").click(function() {
    $(".burger").toggleClass("b-active");
    $(".pre-header").toggleClass("nav-active");
  });
});

// Submit button
$(document).ready(function() {
  $(".submit button").click(function() {
    $("#success-mount").addClass("inputs-success");
    $("#success-mount").html(successComponent);
  });
});

// Like button
$(document).ready(function() {
  var activeLike = "./img/like-active.svg";
  var unActiveLike = "./img/like.svg";
  $(".like").click(function() {
    var like = $(this).children("img");
    var counter = $(this).children("span");
    like.toggleClass("liked");
    if (like.hasClass("liked")) {
      like.attr("src", activeLike);
      // counter.text(+counter.text() + 1);
    } else {
      like.attr("src", unActiveLike);
    }
  });
});
