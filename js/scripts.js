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

// here is ruby

if (totalRuby === 20) {
  $("#rubyImg").show();
    $("#rubyPhrase20").show();
    $("#rubyPhrase15").hide();
    $("#rubyPhrase10").hide();
    $("#rubyPhrase05").hide();
    $("#rubyPhrase00").hide();
} else if (totalRuby === 15) {
  $("#rubyImg").show();
    $("#rubyPhrase20").hide();
    $("#rubyPhrase15").show();
    $("#rubyPhrase10").hide();
    $("#rubyPhrase05").hide();
    $("#rubyPhrase00").hide();
} else if (totalRuby === 10) {
  $("#rubyImg").show();
    $("#rubyPhrase20").hide();
    $("#rubyPhrase15").hide();
    $("#rubyPhrase10").show();
    $("#rubyPhrase05").hide();
    $("#rubyPhrase00").hide();
  }  else if (totalRuby === 05) {
    $("#rubyImg").show();
    $("#rubyPhrase20").hide();
    $("#rubyPhrase15").hide();
    $("#rubyPhrase10").hide();
    $("#rubyPhrase05").show();
    $("#rubyPhrase00").hide();
  } else {
    $("#rubyImg").show();
      $("#rubyPhrase20").hide();
      $("#rubyPhrase15").hide();
      $("#rubyPhrase10").hide();
      $("#rubyPhrase05").hide();
      $("#rubyPhrase00").show();
  }

// here is PHP

if (totalPhp === 20) {
  $("#phpImg").show();
    $("#phpPhrase20").show();
    $("#phpPhrase15").hide();
    $("#phpPhrase10").hide();
    $("#phpPhrase05").hide();
    $("#phpPhrase00").hide();
} else if (totalPhp === 15) {
  $("#phpImg").show();
    $("#phpPhrase20").hide();
    $("#phpPhrase15").show();
    $("#phpPhrase10").hide();
    $("#phpPhrase05").hide();
    $("#phpPhrase00").hide();
} else if (totalPhp === 10) {
  $("#phpImg").show();
    $("#phpPhrase20").hide();
    $("#phpPhrase15").hide();
    $("#phpPhrase10").show();
    $("#phpPhrase05").hide();
    $("#phpPhrase00").hide();
  }  else if (totalPhp === 05) {
    $("#phpImg").show();
    $("#phpPhrase20").hide();
    $("#phpPhrase15").hide();
    $("#phpPhrase10").hide();
    $("#phpPhrase05").show();
    $("#phpPhrase00").hide();
  } else {
    $("#phpImg").show();
      $("#phpPhrase20").hide();
      $("#phpPhrase15").hide();
      $("#phpPhrase10").hide();
      $("#phpPhrase05").hide();
      $("#phpPhrase00").show();
  }

// Here is CS

if (totalCs === 20) {
  $("#csImg").show();
    $("#csPhrase20").show();
    $("#csPhrase15").hide();
    $("#csPhrase10").hide();
    $("#csPhrase05").hide();
    $("#csPhrase00").hide();
} else if (totalCs === 15) {
  $("#csImg").show();
    $("#csPhrase20").hide();
    $("#csPhrase15").show();
    $("#csPhrase10").hide();
    $("#csPhrase05").hide();
    $("#csPhrase00").hide();
} else if (totalCs === 10) {
  $("#csImg").show();
    $("#csPhrase20").hide();
    $("#csPhrase15").hide();
    $("#csPhrase10").show();
    $("#csPhrase05").hide();
    $("#csPhrase00").hide();
  }  else if (totalCs === 05) {
    $("#csImg").show();
    $("#csPhrase20").hide();
    $("#csPhrase15").hide();
    $("#csPhrase10").hide();
    $("#csPhrase05").show();
    $("#csPhrase00").hide();
  } else {
    $("#csImg").show();
      $("#csPhrase20").hide();
      $("#csPhrase15").hide();
      $("#csPhrase10").hide();
      $("#csPhrase05").hide();
      $("#csPhrase00").show();
  }


    event.preventDefault();
  });
});
