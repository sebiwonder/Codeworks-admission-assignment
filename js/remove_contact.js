function remove(index) {
  const name = $("h4.name")[index].innerHTML;
  const confirmRemove = confirm(
    `Do you want to remove ${name} from you contact?`
  );
  if (confirmRemove) {
    const contact = `#contact-${index}`;
    console.log(index);
    $(contact).remove();
  }
}
