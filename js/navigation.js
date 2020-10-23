navigate();

function navigate(section = "all") {
  $("div.section").hide();
  $("p.fa").css("font-weight", "Normal");

  $(`#${section}`).show();
  $(`p.${section}`).css("font-weight", "Bold");
}
