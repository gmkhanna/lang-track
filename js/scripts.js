// BACK-END LOGIC //

var add = function(q1, q2) {
  return q1 + q2;
};

// FRONT-END; INTERFACE LOGIC ///

$(document).ready(function() {
  $("#survey form").submit(function(event) {

    $(".resultImg").hide();
    $(".resultPhrase").hide();

    var javaQ1 = parseInt($("#javaQ1").val());
    var javaQ2 = parseInt($("#javaQ2").val());
    var totalJava = add(javaQ1, javaQ2);

    $(".result").show();

      if (totalJava === 0) {
      $("#java-result").fadeIn();
      $("#result00").fadeIn(10000);
    } else if (totalJava === 05) {
      $("#java-result").fadeIn();
      $("#result05").fadeIn(7000);
    } else if (totalJava === 10) {
      $("#java-result").fadeIn();
      $("#result10").fadeIn(5000);
    } else if (totalJava === 15) {
      $("#java-result").fadeIn();
      $("#result15").fadeIn(3000);
    } else {
      $("#java-result").fadeIn();
      $("#result20").fadeIn();
    }

  // $("#java-result").show();
  // $("#ruby-result").show();
  // $("#cs-result").show();
  // $("#php-result").show();
  //
  // $("#result20").show();
  // $("#result15").show();
  // $("#result10").show();
  // $("#result05").show();
  // $("#result00").show();
    event.preventDefault();
  });
});
