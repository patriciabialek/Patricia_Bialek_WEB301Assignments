$(document).ready(function (){
    $(".form").validate({
        rules: {
            name: "required",
            date: "required",
            zip: {
                required: true,
                pattern: /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/
            },
            tel:{
                required:true,
                pattern: /^\d{3}-\d{3}-\d{4}$/
            }
        },
        messages:{
            name: "Please enter your name",
            date: "Please select your date of birth",
            zip: {
                required: "Please enter your postal code",
                zip: "Please enter a valid postal code",
                pattern: "Please enter a valid postal code (e.g., N8N 8N8)"
            },
            tel:{
                required: "Please enter your phone number",
                tel: "Please enter a valid phone number",
                pattern: "Please enter a valid US phone number (e.g., 123-456-7890)"
            },
        }
    });
});