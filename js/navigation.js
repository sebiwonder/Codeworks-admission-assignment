navigate();

function navigate(section = "all") {
  $(".notify").remove();
  $(".inlineNotify").remove();
  $(".require").remove();
  $(".success").remove();
  $(".searchResult").remove();

  $("div.section").hide();
  $("p.fa").css({
    "font-weight": "Normal",
    "border-bottom": "1px solid black",
  });

  $(`#${section}`).show();
  $(`p.${section}`).css({
    "font-weight": "Bold",
    "border-bottom": "0",
  });
}
