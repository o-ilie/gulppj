$(document).ready(function () {
  $(".navbar .nav-link").click(function () {
    $(".nav-link").removeClass("activeN");
    $(this).addClass("activeN");
  });

  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $(this).addClass("active").siblings().removeClass("active");
    $("#" + tab_id)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  $(".icons i").click(function () {
    var tab_id = $(this).attr("data-tab");

    $(this).addClass("active").siblings().removeClass("active");
    $("#" + tab_id)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  $(".list").click(function () {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".itemBox").show("1000");
    } else {
      $(".itemBox")
        .not("." + value)
        .hide("1000");
      $(".itemBox")
        .filter("." + value)
        .show("1000");
    }
  });

  $(".list").click(function () {
    $(this).addClass("activeP").siblings().removeClass("activeP");
  });
});
