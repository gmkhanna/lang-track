// BACK-END LOGIC //

var add = function(q1, q2) {
  return q1 + q2;
};

// FRONT-END; INTERFACE LOGIC ///

$(document).ready(function() {
  $("#survey form").submit(function(event) {
    $("#result-main").fadeIn(5000);
    $(".result-phrase").fadeIn(5000);
    $("#javaImg").fadeIn(10000);
    $("#rubyImg").fadeIn(10000);
    $("#phpImg").fadeIn(10000);
    $("#csImg").fadeIn(10000);

    var softwareName = ["javaQ1", "javaQ2", "rubyQ1", "csQ1", "csQ2", "phpQ1", "phpQ2"];

    softwareName.forEach(function(software) {
        var questionPoint = parseInt($("#" + softwareName).val();
    });

    // var javaQ1 = parseInt($("#javaQ1").val());
    // var javaQ2 = parseInt($("#javaQ2").val());
    var totalJava = add(javaQ1, javaQ2);

    // var rubyQ1 = parseInt($("#rubyQ1").val());
    // var rubyQ2 = parseInt($("#rubyQ2").val());
    var totalRuby = add(rubyQ1, rubyQ2);

    // var csQ1 = parseInt($("#csQ1").val());
    // var csQ2 = parseInt($("#csQ2").val());
    var totalCs = add(csQ1, csQ2);

    // var phpQ1 = parseInt($("#phpQ1").val());
    // var phpQ2 = parseInt($("#phpQ2").val());
    var totalPhp = add(phpQ1, phpQ2);



    if (totalJava === 20) {
        $("#javaPhrase20").fadeIn(20000);
        $("#javaPhrase15").hide();
        $("#javaPhrase10").hide();
        $("#javaPhrase05").hide();
        $("#javaPhrase00").hide();
    } else if (totalJava === 15) {
        $("#javaPhrase20").hide();
        $("#javaPhrase15").fadeIn(5000);
        $("#javaPhrase10").hide(5000);
        $("#javaPhrase05").hide(9000);
        $("#javaPhrase00").hide(20000);
    } else if (totalJava === 10) {
        $("#javaPhrase20").hide();
        $("#javaPhrase15").hide(3000);
        $("#javaPhrase10").fadeIn(7000);
        $("#javaPhrase05").hide(9000);
        $("#javaPhrase00").hide(20000);
      }  else if (totalJava === 05) {
        $("#javaPhrase20").hide();
        $("#javaPhrase15").hide(7030);
        $("#javaPhrase10").hide(8050);
        $("#javaPhrase05").fadeIn(9000);
        $("#javaPhrase00").hide(20000);
      } else {
          $("#javaPhrase20").hide();
          $("#javaPhrase15").hide(3000);
          $("#javaPhrase10").hide(5000);
          $("#javaPhrase05").hide(9000);
          $("#javaPhrase00").fadeIn(20000);
      }

// here is ruby

if (totalRuby === 20) {
    $("#rubyPhrase20").fadeIn();
    $("#rubyPhrase15").hide(3000);
    $("#rubyPhrase10").hide(5000);
    $("#rubyPhrase05").hide(9000);
    $("#rubyPhrase00").hide(20000);
} else if (totalRuby === 15) {
    $("#rubyPhrase20").hide();
    $("#rubyPhrase15").fadeIn();
    $("#rubyPhrase10").hide(5000);
    $("#rubyPhrase05").hide(9000);
    $("#rubyPhrase00").hide(20000);
} else if (totalRuby === 10) {
    $("#rubyPhrase20").hide();
    $("#rubyPhrase15").hide(3000);
    $("#rubyPhrase10").fadeIn(8000);
    $("#rubyPhrase05").hide(9000);
    $("#rubyPhrase00").hide(20000);
  }  else if (totalRuby === 05) {
    $("#rubyPhrase20").hide();
    $("#rubyPhrase15").hide(7030);
    $("#rubyPhrase10").hide(8050);
    $("#rubyPhrase05").fadeIn(9000);
    $("#rubyPhrase00").hide(30000);
  } else {
      $("#rubyPhrase20").hide();
      $("#rubyPhrase15").hide(3000);
      $("#rubyPhrase10").hide(5000);
      $("#rubyPhrase05").hide(9000);
      $("#rubyPhrase00").fadeIn(20000);
  }
// here is PHP

if (totalPhp === 20) {
    $("#phpPhrase20").fadeIn();
    $("#phpPhrase15").hide(3000);
    $("#phpPhrase10").hide(5000);
    $("#phpPhrase05").hide(9000);
    $("#phpPhrase00").hide(11000);
} else if (totalPhp === 15) {
    $("#phpPhrase20").hide();
    $("#phpPhrase15").fadeIn();
    $("#phpPhrase10").hide(5000);
    $("#phpPhrase05").hide(9000);
    $("#phpPhrase00").hide(11000);
} else if (totalPhp === 10) {
    $("#phpPhrase20").hide();
    $("#phpPhrase15").hide(3000);
    $("#phpPhrase10").fadeI(8000);
    $("#phpPhrase05").hide(9000);
    $("#phpPhrase00").hide(11000);
  }  else if (totalPhp === 05) {
    $("#phpPhrase20").hide();
    $("#phpPhrase15").hide(7030);
    $("#phpPhrase10").hide(8050);
    $("#phpPhrase05").fadeIn(9000);
    $("#phpPhrase00").hide(11000);
    } else {
      $("#phpPhrase20").hide();
      $("#phpPhrase15").hide(3000);
      $("#phpPhrase10").hide(5000);
      $("#phpPhrase05").hide(9000);
      $("#phpPhrase00").fadeIn(11000);
  }

// Here is CS

if (totalCs === 20) {
    $("#csPhrase20").fadeIn();
    $("#csPhrase15").hide(3000);
    $("#csPhrase10").hide(5000);
    $("#csPhrase05").hide(9000);
    $("#csPhrase00").hide(11000);
} else if (totalCs === 15) {
    $("#csPhrase20").hide();
    $("#csPhrase15").fadeIn();
    $("#csPhrase10").hide(5000);
    $("#csPhrase05").hide(9000);
    $("#csPhrase00").hide(11000);
} else if (totalCs === 10) {
    $("#csPhrase20").hide();
    $("#csPhrase15").hide(3000);
    $("#csPhrase10").fadeIn(8000);
    $("#csPhrase05").hide(9000);
    $("#csPhrase00").hide(11000);
  }  else if (totalCs === 05) {
    $("#csPhrase20").hide();
    $("#csPhrase15").hide(7030);
    $("#csPhrase10").hide(8050);
    $("#csPhrase05").fadeIn(9000);
    $("#csPhrase00").hide(11000);
  } else {
      $("#csPhrase20").hide();
      $("#csPhrase15").hide(3000);
      $("#csPhrase10").hide(5000);
      $("#csPhrase05").hide(9000);
      $("#csPhrase00").fadeIn(11000);
  }
    event.preventDefault();
  });
});
