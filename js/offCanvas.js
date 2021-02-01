function openCanvas(){
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open'); 
}

function onContactFormSubmit() { 
var sender = $('input[name="name"]').val()
// sender = sender.replace(/\s/g, '_');

var senderEmail = $('input[name="email"]').val()
var message = $('textarea[name="message"]').val()
var strLink = `https://mail.google.com/mail/?view=cm&fs=1&to=gali.nickel95@gmail.com&su=${sender} - Contact form&body=${message}&bcc=${senderEmail}`
window.open(encodeURI(strLink))
}