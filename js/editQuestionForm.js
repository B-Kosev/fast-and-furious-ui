function DisplayCorrectField(event){
   
    const wrongImageElements=document.querySelectorAll('.wrong-image');
    const wrongQuestionElements=document.querySelectorAll('.wrong-question');
    if(event.target.value.localeCompare("Грешно изображение")==0){
        
        wrongQuestionElements.forEach((element)=>{
            element.setAttribute("style","display:none");
        })

        wrongImageElements.forEach((element)=>{
            element.setAttribute("style","display:block");
        })
    }else{
        wrongQuestionElements.forEach((element)=>{
            element.setAttribute("style","display:block");
        })

        wrongImageElements.forEach((element)=>{
            element.setAttribute("style","display:none");
        })
    }


}




const formValidation = {
	submitForm: (event) => {
		event.preventDefault();
        
		const form = event.target;

		const questionIDValue = form.questionID.value;

		const typeValue = form.type.value;
        const questionNumber=questinNumber.value;
		const textValue = form.text.value;
        const uploadedValue=form.filename.value;
        const successMsg=document.getElementById("success-msg");
		var success = true;
        
        console.log(typeValue.localeCompare("Грешно изображение")==0);
		formValidation.clearErrorMessages();
        if(typeValue.localeCompare("Грешен отговор")==0){

        if(questionNumber!="1" && questionNumber!="2" && questionNumber!="3" && questionNumber!="4"){
            formValidation.displayquestionNumberErrorMessage("Номера на въпроса трябва да е между 1-4.");
			success = false;
        }
		if (questionIDValue.length == 0) {
			formValidation.displayquestionIDErrorMessage("Полето с ID е задължително.");
			success = false;
		}


		if (textValue.length < 10) {
			formValidation.displayTextErrorMessage("Полето с описание трябва да съдържа поне 10 символа.");
			success = false;
		}
        }
        else{
            if(uploadedValue.length==0){
                formValidation.displayuploadedErrorMessage("Моля качете снимка.");
                success = false;
            }
        }

		if (success == true) {
            successMsg.innerHTML="Успешно направихте промяната.";
            
		}else{
            if(typeValue.localeCompare("Грешен отговор")!=0){
                const wrongQuestionElements=document.querySelectorAll('.wrong-question');
                const wrongImageElements=document.querySelectorAll('.wrong-image');
                wrongImageElements.forEach((element)=>{
                    element.setAttribute("style","display:block");
                });
                wrongQuestionElements.forEach((element)=>{
                    element.setAttribute("style","display:none");
                })

            }
        }
	},

	clearErrorMessages: () => {
		
		const text = document.getElementById("text");
		const textErr = document.getElementById("text-err");
        const questionIdErr=document.getElementById("questionID-err");
        const questinNumberErr=document.getElementById("questinNumber-err");
        const uploadErr=document.getElementById("fileUpload-err");
        const questinNumber = document.getElementById("questinNumber");
        const uploaded = document.getElementById("myFile");
        const questionId = document.getElementById("questionID");

        uploadErr.innerHTML = "";
        questinNumberErr.innerHTML = "";
        questionIdErr.innerHTML = "";
        text.innerHTML = "";
		textErr.innerHTML = "";

		text.setAttribute("style", "border: groove #e4e9f7");
        questinNumber.setAttribute("style", "border: groove #e4e9f7");
        uploaded.setAttribute("style", "border: groove #e4e9f7");
        questionId.setAttribute("style", "border: groove #e4e9f7");


		textErr.setAttribute("style", "display: none");
        questionIdErr.setAttribute("style", "display: none");
        questinNumberErr.setAttribute("style", "display: none");
		
	},
    displayuploadedErrorMessage: (errorMessage) => {
		const uploaded = document.getElementById("myFile");
		const uploadedErr = document.getElementById("fileUpload-err");

		uploadedErr.innerHTML = errorMessage;
		uploadedErr.setAttribute("style", "display: block");

		uploaded.setAttribute("style", "border: solid red");
	}
    ,
    displayquestionIDErrorMessage: (errorMessage) => {
		const questionId = document.getElementById("questionID");
		const questionIdErr = document.getElementById("questionID-err");

		questionIdErr.innerHTML = errorMessage;
		questionIdErr.setAttribute("style", "display: block");

		questionId.setAttribute("style", "border: solid red");
	}
    ,
    displayTextErrorMessage: (errorMessage) => {
		const text = document.getElementById("text");
		const textErr = document.getElementById("text-err");

		textErr.innerHTML = errorMessage;
		textErr.setAttribute("style", "display: block");

		text.setAttribute("style", "border: solid red");
	},displayquestionNumberErrorMessage: (errorMessage) => {
		const questinNumber = document.getElementById("questinNumber");
		const questinNumberErr = document.getElementById("questinNumber-err");

		questinNumberErr.innerHTML = errorMessage;
		questinNumberErr.setAttribute("style", "display: block");

		questinNumber.setAttribute("style", "border: solid red");
	},
};

document.getElementById("edit-question-form").addEventListener("submit", formValidation.submitForm);