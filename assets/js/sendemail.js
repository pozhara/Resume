let contactForm=document.getElementsByTagName("form");

function sendMail(contactForm){
    emailjs.send(service_u3tuqsu, template_ygu47un, {
        "from_name":contactForm.name.value, 
        "from_email":contactForm.emailaddress.value, 
        "project_request":contactForm.projectsummary.value}, iTvEKdAE8zqtWZUiA)
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED",response);
        }
    );
    return false;
}