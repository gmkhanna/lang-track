// BACK-END LOGIC //

var add = function(q1, q2) {
  return q1 + q2;
};

// FRONT-END; INTERFACE LOGIC ///

$(document).ready(function() {
  $("#survey form").submit(function(event) {
    $(".result").show();
    $(".resultImg").show();

    var javaQ1 = parseInt($("#javaQ1").val());
    var javaQ2 = parseInt($("#javaQ2").val());
    var totalJava = add(javaQ1, javaQ2);

    var rubyQ1 = parseInt($("#rubyQ1").val());
    var rubyQ2 = parseInt($("#rubyQ2").val());
    var totalRuby = add(rubyQ1, rubyQ2);

    var csQ1 = parseInt($("#csQ1").val());
    var csQ2 = parseInt($("#csQ2").val());
    var totalCs = add(csQ1, csQ2);

    var phpQ1 = parseInt($("#phpQ1").val());
    var phpQ2 = parseInt($("#phpQ2").val());
    var totalPhp = add(phpQ1, phpQ2);


    if (totalJava === 20) {
      $("#javaImg").show();
        $("#javaPhrase20").show();
        $("#javaPhrase15").hide();
        $("#javaPhrase10").hide();
        $("#javaPhrase05").hide();
        $("#javaPhrase00").hide();
    } else if (totalJava === 15) {
      $("#javaImg").show();
        $("#javaPhrase20").hide();
        $("#javaPhrase15").show();
        $("#javaPhrase10").hide();
        $("#javaPhrase05").hide();
        $("#javaPhrase00").hide();
    } else if (totalJava === 10) {
      $("#javaImg").show();
        $("#javaPhrase20").hide();
        $("#javaPhrase15").hide();
        $("#javaPhrase10").show();
        $("#javaPhrase05").hide();
        $("#javaPhrase00").hide();
      }  else if (totalJava === 05) {
        $("#javaImg").show();
        $("#javaPhrase20").hide();
        $("#javaPhrase15").hide();
        $("#javaPhrase10").hide();
        $("#javaPhrase05").show();
        $("#javaPhrase00").hide();
      } else {
        $("#javaImg").show();
          $("#javaPhrase20").hide();
          $("#javaPhrase15").hide();
          $("#javaPhrase10").hide();
          $("#javaPhrase05").hide();
          $("#javaPhrase00").show();
      }

    event.preventDefault();
  });
});
