function addContact() {
  const firstName = $("#firstName")[0].value;
  const lastName = $("#lastName")[0].value;
  const phone = $("#phone")[0].value;
  const address = $("#address")[0].value;

  const readyToSubmit = validateInput(firstName, lastName, phone, address);
  if (readyToSubmit && confirm("Do you want to create this new contact?")) {
    // if successfully submit clear box and display notification
    $("input").val("");
    $(".notify").remove();
    $(".require").remove();
    $(".success").remove();

    displayContact(firstName, lastName, phone, address);
  }
}

// field validation & notify
function validateInput(firstName, lastName, phone, address) {
  let completed = true;

  $(".notify").remove();

  if (firstName.length == 0) {
    completed = false;
    $("label.firstName").append("<span class='notify'><b> *</b></span>");
    required();
  }
  if (firstName.length >= 50 || lastName.length >= 50) {
    completed = false;
    $("button.add").after(
      "<span class='notify'><br /><b>*</b><i> Name has to be less than 50 characters</i></span>"
    );
  }
  if (firstName.match(/[^a-zA-Z\s]/) || lastName.match(/[^a-zA-Z]/)) {
    completed = false;
    $("button.add").after(
      "<span class='notify'><br /><b>*</b><i> Name can only contain letters and spaces</i></span>"
    );
  }
  if (phone.length == 0) {
    completed = false;
    $("label.phone").append("<span class='notify'><b> *</b></span>");
    required();
  }
  if (phone.length <= 5 || phone.length >= 15) {
    completed = false;
    $("button.add").after(
      "<span class='notify'><br /><b>*</b><i> Phone number has to be more than 5 characters and less than 15 characters</i></span>"
    );
  }
  if (address.length == 0) {
    completed = false;
    $("label.address").append("<span class='notify'><b> *</b></span>");
    required();
  }
  if (address.length >= 100) {
    completed = false;
    $("button.add").after(
      "<span class='notify'><br /><b>*</b><i> Address has to be less than 100 characters</i></span>"
    );
  }
  if (address.match(/[^a-zA-Z0-9,\s]/)) {
    completed = false;
    $("button.add").after(
      "<span class='notify'><br /><b>*</b><i> Name can only contain letters, numbers, commas, and spaces</i></span>"
    );
  }

  return completed;
}

function required() {
  $(".require").remove();
  $("button.add").after(
    "<span class='require'><br /><b>*</b><i> Required</i></span>"
  );
}

// add new contact to the contact book
function displayContact(firstName, lastName, phone, address) {
  const index = Math.random() * 100000000000000000;
  const name = firstName.concat(" ", lastName);
  const contact = `
    <div class="card" id="contact-${index}">
      <h4 class="name" id="name-${index}">${name}</h4>
      <p class="phone" id="phone-${index}">${phone}</p>
      <p class="address" id="address-${index}">${address}</p>
      <p onclick="remove(${index})"><i class="fa fa-trash"> Remove</i></a>
    </div>
    <hr />`;

  $("button.add").after(
    `<span class='success'><br /><i>Successfully create contact for ${name}.</i></span>`
  );

  $("#contact").after(contact);
  $("#numberContact")[0].innerHTML = $("div.card").length;
}
