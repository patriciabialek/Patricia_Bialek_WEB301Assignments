// Initialize Swiper
let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 'vertical' for vertical slider
    loop: true, // Loop the slides
    navigation: {          
        nextEl: ".swiper-button-next",          
        prevEl: ".swiper-button-prev",        
    }
});

$(document).ready(function (){
    $("#form").validate({
        rules: {
            name: "required",
            dob: "required",
            gender: "required",
            expiry: "required",
            address: {
                required: true,
                pattern: /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/
            },
            email: {
                required: true,
                email:true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            },
            tel:{
                required:true,
                pattern: /^\d{3}-\d{3}-\d{4}$/
            },
            creditCard:{
                required: true,
                pattern: /^\d{10}$/,
                minlength: 10, 
                maxlength: 10
            },
            cvv:{
                required: true,
                pattern: /^\d{3}$/,
                minlength: 3, 
                maxlength: 3
            }
        },
        messages:{
            name: "Please enter your name",
            dob: "Please select your date of birth",
            gender: "Please select your gender",
            expiry: "Please select the expiry date",
            address: {
                required: "Please enter your postal code",
                address: "Please enter a valid postal code",
                pattern: "Please enter a valid postal code (e.g., N8N 8N8)"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address",
                pattern:"Please enter a valid email address"
            },
            tel:{
                required: "Please enter your phone number",
                tel: "Please enter a valid phone number",
                pattern: "Please enter a valid US phone number (e.g., 123-456-7890)"
            },
            creditCard:{
                required: "Please enter your credit card number",
                pattern: "Please enter a valid 10-digit credit card number"
            },
            cvv:{
                required: "Please enter your CVV number",
                pattern: "Please enter a valid 3-digit CVV number"
            }
        }
    });

    $("#creditCard").on("input", function () {
        let creditCardError = $("#creditCardError");
        if (!$(this).is(":valid")) {
            creditCardError.text("Please enter a valid 10-digit credit card number");
            creditCardError.show();
        } else {
            creditCardError.text("");
            creditCardError.hide();
        }
    });

    $("#cvv").on("input", function () {
        let cvvError = $("#cvvError");
        if (!$(this).is(":valid")) {
            cvvError.text("Please enter a valid 3-digit CVV number");
            cvvError.show();
        } else {
            cvvError.text("");
            cvvError.hide();
        }
    });
});