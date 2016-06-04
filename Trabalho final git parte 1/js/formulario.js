function sendMail() {
    var link = "mailto:jhonatan.samann@gmail.com"
             + "?cc=jhonatan_saman@gmail.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}