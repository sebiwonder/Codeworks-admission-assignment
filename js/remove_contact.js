function remove(index) {
  const name = $(`#name-${index}`)[0].innerHTML;
  const confirmRemove = confirm(
    `Do you want to remove ${name} from your contact?`
  );
  if (confirmRemove) {
    const contact = `#contact-${index}`;
    $(contact).remove();

    $("#numberContact")[0].innerHTML = $("div.card").length;
  }
}
