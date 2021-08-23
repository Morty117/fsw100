var form = document.signUp;

form.addEventListener ('submit', function(e){
    e.preventDefault();

    var firstName = form.first.value;
    var lastName = form.last.value;
    var emailAddress = form.email.value;

    alert (firstName + '\n' + lastName + '\n' + emailAddress + '\n' + 'WE GOT YOUR INFORMATION! We will reach out to you soon LEGEND!');
})