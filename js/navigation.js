navigate();

function navigate(section = "all") {
  $(".notify").remove();
  $(".require").remove();
  $(".success").remove();
  $(".searchResult").remove();

  $("div.section").hide();
  $("p.fa").css("font-weight", "Normal");

  $(`#${section}`).show();
  $(`p.${section}`).css("font-weight", "Bold");
}
