
const name = document.getElementById("name-input");
const email = document.getElementById("email-input"); 
const message = document.getElementById("msg-input");  
const err = document.getElementById("error-msg")
const info = document.getElementById("info-msg"); 
const form = document.querySelector(".form"); 
const hidden = document.createElement("input"); 

let form_errors = []; 
let err_count = 0; 

// validate the name 
name.addEventListener("input", ()=> {
    const og_name = name.value; 
    const corrected_name = og_name.replace(/[^A-Za-z0-9\s\-]/g,""); //replace bad input with space

    if(og_name !== corrected_name) {
       name.value = corrected_name; 
       name.classList.add("input-err"); 
       err.textContent = "Your name seriously has numbers or symbols in it? No way bro";
       err_count+=1;  
       form_errors.push({
            field:"name", 
            message:"Invalid name"
       }); 
       
    } else {
        name.classList.remove("input-err"); 
        err.textContent = "";  // fix this so it fades after a period of time 
        //console.log(name.classList); 
    }

  
});

email.addEventListener("input", (e) => {
    const email_in = email.value; 
    if(!email_in.includes("@")) {
        email.setCustomValidity("I am expecting an email address!");
        email.classList.add("input-err"); 
        err_count+=1;
        form_errors.push({
            field:"email", 
            message:"Email must contain @ symbol"
       });  


    } else {
        email.setCustomValidity("");
        email.classList.remove("input-err");   
  }
}); 

message.addEventListener("input", (e) => {
    const max_counter = message.maxLength; // set to 200
    let current_count = message.value.length; 
    let rem = max_counter-current_count; 
    
    info.textContent = `${rem} characters remaining`; 
    if(rem <= 10){
        info.textContent = `${rem} characters remaining. Warning!`;
        message.classList.add("input-err"); 
    } else {
        info.textContent = `${rem} characters remaining`;
        message.classList.remove("input-err");  
    }

    if(rem <0 ) {
        form_errors.push({
            field:"message", 
            message:"Exceeded character limit"
       }); 
    } 
}); 
form.addEventListener("submit", (e) => {

    hidden.type="hidden"; 
    hidden.name="form-errors"; 
    hidden.value=JSON.stringify(form_errors); 
    form.appendChild(hidden);

});
