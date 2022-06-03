
const formLogin = {
submitForm: (event)=>{
    const form = event.target;
event.preventDefault();
    const name=form.name.value;
    const password=form.password.value

   

    if(name.localeCompare("Admin")==0 && password.localeCompare("Admin")==0){
        const hrefer=document.getElementById("gotoAdmin");
        hrefer.click();
    }else{
        const errorMsg=document.getElementById("errorMsg");
        errorMsg.innerHTML="Грешно потребителско име или парола";
        errorMsg.style.display="inline";
    }

    
}


}

document.getElementById("login-section").addEventListener("submit", formLogin.submitForm);