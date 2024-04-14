const hamberger = document.getElementById('hamberger');
const menuList = document.getElementById('menu-list');
const logo = document.getElementById('logo');



hamberger.addEventListener('click', () =>{
    menuList.classList.toggle("hidden");
    logo.style.display = 'none';
    hamberger.style.alignItems = 'start';
    
})


// Validasi form 
$(document).ready(function(){
    $('#form').validate({
        rules:{
            nama:{
                minlength: 2
            },
            email:{
                email: true,
                required: true
            },
            number: {
                number: true,
                required: true,
                minlength: 9,
                maxlength: 15
            },
            message: {
                required: true
            }
        },
        messages: {
            nama:{
                required: "Wajib diisi",
                minlength: "Nama paling sedikit terdiri dari 2 huruf"
            },
            email:{
                email: "Isi email dengan benar",
                required: "Wajib diisi"
            },
            number: {
                number: "Isi nomor dengan benar",
                required: "Wajib diisi",
                minlength: "Nomor handphone minimal 8 angka",
                maxlength: "Nomor handphone maksimal 15 angka"
            },
            message: {
                required: "Wajib diisi"
            },
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});





