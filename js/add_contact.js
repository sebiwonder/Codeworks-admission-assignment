function addContact() {
  const firstName = $("#firstName")[0].value;
  const lastName = $("#lastName")[0].value;
  const phone = $("#phone")[0].value;
  const address = $("#address")[0].value;

  const readyToSubmit = validateInput(firstName, lastName, phone, address);
  const confirmAdd = confirm("Do you want to create a new contact?");
  if (readyToSubmit && confirmAdd) {
    // if successfully submit clear box and display notification
    alert("Create a new contact successfully!");

    $("input").val("");
    $(".notify").remove();
    $(".require").remove();

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
    $("#add").after(
      "<span class='notify'><br /><b>*</b><i> Name has to be less than 50 characters</i></span>"
    );
  }
  if (firstName.match(/[^a-zA-Z\s]/) || lastName.match(/[^a-zA-Z]/)) {
    completed = false;
    $("#add").after(
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
    $("#add").after(
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
    $("#add").after(
      "<span class='notify'><br /><b>*</b><i> Address has to be less than 100 characters</i></span>"
    );
  }
  if (address.match(/[^a-zA-Z0-9,\s]/)) {
    completed = false;
    $("#add").after(
      "<span class='notify'><br /><b>*</b><i> Name can only contain letters, numbers, commas, and spaces</i></span>"
    );
  }

  return completed;
}

function required() {
  $(".require").remove();
  $("#add").after(
    "<span class='require'><br /><b>*</b><i> Required</i></span>"
  );
}

// add new contact to the contact book
function displayContact(firstName, lastName, phone, address) {
  const index = $("div.card").length;
  const contact = `
    <div class="card" id="contact-${index}">
      <h4 class="name">${firstName.concat(" ", lastName)}</h4>
      <p class="phone">${phone}</p>
      <p class="address">${address}</p>
      <p onclick="remove(${index})"><i class="fa fa-trash"> Remove</i></a>
    </div>`;
  console.log(index);

  $("#contact").after(contact);
}
