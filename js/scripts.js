// buisiness logic
var Contact = function(first, last, email){
    this.firstName = first;
    this.lastName = last;
    this.eMail = email;


};



// user interface logic
$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var fName = $("#new-first-name").val();
    var lName = $("#new-last-name").val();
    var eMail = $("#new-email").val();
    var newContact = new Contact(fName, lName, eMail);



    $("#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".email").text(newContact.eMail);

    });

    $("#new-first-name").val("");
    $("#new-last-name").val("");
    $("#new-email").val("");

  });
});
