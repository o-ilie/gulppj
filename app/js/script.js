$(document).ready(function () {
  $(".nav ul li:first").addClass("active");
  $(".sidebar-content:not(:first)").hide();
  $(".sidebar ul li a").click(function (event) {
    event.preventDefault();
    var content = $(this).attr("href");
    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");
    $(content).show();
    $(content).siblings(".sidebar-content").hide();
  });
});
