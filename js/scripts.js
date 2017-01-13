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

    event.preventDefault();
  });
});
