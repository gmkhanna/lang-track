// BACK-END LOGIC //

var add = function(q1, q2) {
  return q1 + q2;
};

// FRONT-END; INTERFACE LOGIC ///

$(document).ready(function() {
  $("#survey form").submit(function(event) {

    var javaQ1 = parseInt($("#javaQ1").val());
    var javaQ2 = parseInt($("#javaQ2").val());
    var totalJava = add(javaQ1, javaQ2);

    var rubyQ1 = parseInt($("#rubyQ1").val());
    var rubyQ2 = parseInt($("#rubyQ2").val());
    var totalRuby = add(rubyQ1, rubyQ2);









  //   $(".result").show();
  //
  //     if (totalJava === 0) {
  //     $(".java-result").show();
  //     $(".javaImg").fadeIn();
  //     $(".result00").fadeIn(10000);
  //   } else if (totalJava === 05) {
  //     $(".java-result").show();
  //     $(".javaImg").fadeIn();
  //     $(".result05").fadeIn(7000);
  //   } else if (totalJava === 10) {
  //     $(".java-result").show();
  //     $(".javaImg").fadeIn();
  //     $(".result10").fadeIn(5000);
  //   } else if (totalJava === 15) {
  //     $(".java-result").show();
  //     $(".javaImg").fadeIn();
  //     $(".result15").fadeIn(3000);
  //   } else {
  //     $(".java-result").show();
  //     $(".javaImg").fadeIn();
  //     $(".result20").fadeIn();
  //   }
  //
  //   if (totalRuby === 0) {
  //     $("#ruby-result").fadeIn();
  //     $("#result00").fadeIn(10000);
  //   } else if (totalRuby === 05) {
  //     $("#ruby-result").fadeIn();
  //     $("#result05").fadeIn(7000);
  //   } else if (totalRuby === 10) {
  //     $("#ruby-result").fadeIn();
  //     $("#result10").fadeIn(5000);
  //   } else if (totalRuby === 15) {
  //     $("#ruby-result").fadeIn();
  //     $("#result15").fadeIn(3000);
  //   } else {
  //     $("#ruby-result").fadeIn();
  //     $("#result20").fadeIn();
  //   }
  // // $("#java-result").show();
  // // $("#ruby-result").show();
  // // $("#cs-result").show();
  // // $("#php-result").show();
  // //
  // // $("#result20").show();
  // // $("#result15").show();
  // // $("#result10").show();
  // // $("#result05").show();
  // // $("#result00").show();
  //
  //

    event.preventDefault();
  });
});
