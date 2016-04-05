// buisiness logic
var Contact = function(first, last, email){
    this.firstName = first;
    this.lastName = last;
    this.eMail = email;
    this.addresses = [];
};

var Address = function(street, city, state){
    this.street = street;
    this.city = city;
    this.state = state;
};

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state;
};

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};
// user interface logic
$(document).ready(function(){
  $("#add-address").click(function(){
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });



  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var fName = $("#new-first-name").val();
    var lName = $("#new-last-name").val();
    var eMail = $("#new-email").val();
    var newContact = new Contact(fName, lName, eMail);

    $(".new-address").each(function() {
  var inputtedStreet = $(this).find("input.new-street").val();
  var inputtedCity = $(this).find("input.new-city").val();
  var inputtedState = $(this).find("input.new-state").val();
  var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
  newContact.addresses.push(newAddress);
  console.log(newAddress);

});


    $("#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".email").text(newContact.eMail);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
// address.fullAddress = is a prototype (made in business logic)
    });

    $("#new-first-name").val("");
    $("#new-last-name").val("");
    $("#new-email").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");

  });
});
