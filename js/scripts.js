// BACK-END LOGIC //

var add = function(q1, q2) {
  return q1 + q2;
};

// FRONT-END; INTERFACE LOGIC ///

$(document).ready(function() {
  $("#survey form").submit(function(event) {
    $(".result").hide();

    var javaQ1 = parseInt($("#javaQ1").val());
    var javaQ2 = parseInt($("#javaQ2").val());
    var resultJava = add(javaQ1, javaQ2);

    $(".result-area").show();
    $("#java-result").show();

    if (resultJava = 20) {
    $("#java-result").fadeIn();
    $("#result20").fadeIn();
  } else if (resultJava = 15) {
    $("#java-result").fadeIn();
    $("#result15").fadeIn(2000);
  } else if (resultJava = 10) {
    $("#java-result").fadeIn();
    $("#result10").fadeIn(4000);
  } else if (resultJava = 05) {
    $("#java-result").fadeIn();
    $("#result05").fadeIn(6000);
  } else if (resultJava = 0) {
    $("#java-result").fadeIn();
    $("#result00").fadeIn();
  }

    event.preventDefault();
  });
});
