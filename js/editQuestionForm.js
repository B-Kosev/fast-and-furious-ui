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
       
        const typeValue = form.type.value;
        const question1Value = form.question1.value;
        const question2Value = form.question2.value;
        const question3Value = form.question3.value;
        const question4Value = form.question4.value;
        const questionText = form.questiontext.value;
        const points = form.points.value;
        const rightAnswer = form.rightanswer.value;
        
        const successMsg=document.getElementById("success-msg");
		var success = true;
        
        console.log(typeValue.localeCompare("Грешно изображение")==0);
		formValidation.clearErrorMessages();
        if(typeValue.localeCompare("Грешен отговор")==0){
            if (question1Value.length == 0) {
                formValidation.questionerr("Моля попълнете отговор на въпрос номер 1.","question1","question1-err");
                success = false;
            }
            if (question2Value.length == 0) {
                formValidation.questionerr("Моля попълнете отговор на въпрос номер 2.","question2","question2-err");
                success = false;
            }
            if (question3Value.length == 0) {
                formValidation.questionerr("Моля попълнете отговор на въпрос номер 3.","question3","question3-err");
                success = false;
            }
            if (question4Value.length == 0) {
                formValidation.questionerr("Моля попълнете отговор на въпрос номер 4.","question4","question4-err");
                success = false;
            }
            if (questionText.length == 0) {
                formValidation.questionerr("Моля попълнете отговор на въпрос номер 4.","questiontext","questiontext");
                success = false;
            }
            if (points.localeCompare('2')!=0 && points.localeCompare('3')!=0 && points.localeCompare('4')!=0 ) {
                formValidation.pointserr("Точките трябва да са между 2-4.");
                success = false;
            }
            
            if (rightAnswer.localeCompare('1')!=0 &&rightAnswer.localeCompare('2')!=0 && rightAnswer.localeCompare('3')!=0 && rightAnswer.localeCompare('4')!=0 ) {
                formValidation.rightanswererr("Номера на верния отговор трябва да е между 1-4");
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
            successMsg.setAttribute("style", "display: block");
            
		}else{
            formValidation.clearSuccessMessage();
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
	},clearSuccessMessage: () =>{
        const success=document.getElementById("success-msg");
        success.setAttribute("style", "display: none");
    },
    clearErrorMessages: () => {
		
		const question1 = document.getElementById("question1");
        const question2 = document.getElementById("question2");
        const question3 = document.getElementById("question3");
        const question4 = document.getElementById("question4");
        const points = document.getElementById("points");
        const rightAnswer = document.getElementById("rightanswer");


		question1.setAttribute("style", "border: groove #e4e9f7");
        question2.setAttribute("style", "border: groove #e4e9f7");
        question3.setAttribute("style", "border: groove #e4e9f7");
        question4.setAttribute("style", "border: groove #e4e9f7");
        points.setAttribute("style", "border: groove #e4e9f7");
        rightAnswer.setAttribute("style", "border: groove #e4e9f7");

        const question1err = document.getElementById("question1-err");
        const question2err = document.getElementById("question2-err");
        const question3err = document.getElementById("question3-err");
        const question4err = document.getElementById("question4-err");
        const pointserr = document.getElementById("points-err");
        const rightAnswererr = document.getElementById("rightanswer-err");
       

        question1err.setAttribute("style", "display: none");
        question2err.setAttribute("style", "display: none");
        question3err.setAttribute("style", "display: none");
        question4err.setAttribute("style", "display: none");
        pointserr.setAttribute("style", "display: none");
        rightAnswererr.setAttribute("style", "display: none");
    
		
		
	},questionerr: (errorMessage,questionID,questionIDErr) => {
		const question1 = document.getElementById(questionID);
		const question1err = document.getElementById(questionIDErr);

		question1err.innerHTML = errorMessage;
		question1err.setAttribute("style", "display: block");

		question1.setAttribute("style", "border: solid red");
	},
    pointserr: (errorMessage) => {
		const points = document.getElementById("points");
		const pointsErr = document.getElementById("points-err");

		pointsErr.innerHTML = errorMessage;
		pointsErr.setAttribute("style", "display: block");

		points.setAttribute("style", "border: solid red");
	},rightanswererr: (errorMessage) => {
		const rightAnswer = document.getElementById("rightanswer");
		const rightAnswerErr = document.getElementById("rightanswer-err");

		rightAnswerErr.innerHTML = errorMessage;
		rightAnswerErr.setAttribute("style", "display: block");

		rightAnswer.setAttribute("style", "border: solid red");
	},
    };



document.getElementById("edit-question-form").addEventListener("submit", formValidation.submitForm);