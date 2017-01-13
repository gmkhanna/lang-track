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
    $("#java-result").show();

    $("#ruby-result").show();
    $("#cs-result").show();
$("#php-result").show();

    // if (totalJava === 20) {
    //   $("#java-result").fadeIn(10000);
    //   $("#result20").show();
    // } else {
    // }

  //   if (resultJava === 0) {
  //   $("#java-result").show();
  //   $("#result00").show();
  // } else if (resultJava === 05) {
  //   $("#java-result").fadeIn();
  //   $("#result05").fadeIn(2000);
  // } else if (resultJava === 10) {
  //   $("#java-result").fadeIn();
  //   $("#result10").fadeIn(4000);
  // } else if (resultJava === 15) {
  //   $("#java-result").fadeIn();
  //   $("#result15").fadeIn(6000);

    event.preventDefault();
  });
});
