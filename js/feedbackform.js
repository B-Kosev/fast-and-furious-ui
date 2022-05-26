window.onload = function () {
	document.getElementById("feedback-form").addEventListener("submit", formValidation.submitForm);
};

const formValidation = {
	submitForm: (event) => {
		event.preventDefault();

		const form = event.target;

		const nameValue = form.name.value;
		const emailValue = form.email.value;
		const categoryValue = form.category.value;
		const typeValue = form.type.value;
		const textValue = form.text.value;

		formValidation.clearErrorMessages();

		if (nameValue.length == 0) {
			formValidation.displayNameErrorMessage("Полето с имена е задължително.");
		} else if (nameValue.length < 6) {
			formValidation.displayNameErrorMessage("Полето с имена трябва да съдържа поне 6 символа.");
		}

		if (emailValue.length == 0) {
			formValidation.displayEmailErrorMessage("Полето имейл е задължително.");
		}

		if (textValue.length < 20) {
			formValidation.displayTextErrorMessage("Полето с описание трябва да съдържа поне 20 символа.");
		}

		if (response.success == true) {
			window.location.replace("./index.html");
		}
	},

	clearErrorMessages: () => {
		const name = document.getElementById("name");
		const email = document.getElementById("email");
		const text = document.getElementById("text");
		const nameErr = document.getElementById("name-err");
		const emailErr = document.getElementById("email-err");
		const textErr = document.getElementById("text-err");

		nameErr.innerHTML = "";
		emailErr.innerHTML = "";
		textErr.innerHTML = "";

		nameErr.setAttribute("style", "display: none");
		emailErr.setAttribute("style", "display: none");
		textErr.setAttribute("style", "display: none");

		name.setAttribute("style", "border: groove #e4e9f7");
		email.setAttribute("style", "border: groove #e4e9f7");
		text.setAttribute("style", "border: groove #e4e9f7");
	},

	displayCredentialsErrorMessage: (errorMessage) => {
		const username = document.getElementById("username");
		const password = document.getElementById("password");
		const credentialsErr = document.getElementById("credentials-err");

		credentialsErr.innerHTML = errorMessage;
		credentialsErr.setAttribute("style", "display: block");

		username.setAttribute("style", "border: solid red");
		password.setAttribute("style", "border: solid red");
	},

	displayNameErrorMessage: (errorMessage) => {
		const name = document.getElementById("name");
		const nameErr = document.getElementById("name-err");

		nameErr.innerHTML = errorMessage;
		nameErr.setAttribute("style", "display: block");

		name.setAttribute("style", "border: solid red");
	},

	displayEmailErrorMessage: (errorMessage) => {
		const email = document.getElementById("email");
		const emailErr = document.getElementById("email-err");

		emailErr.innerHTML = errorMessage;
		emailErr.setAttribute("style", "display: block");

		email.setAttribute("style", "border: solid red");
	},

	displayTextErrorMessage: (errorMessage) => {
		const text = document.getElementById("text");
		const textErr = document.getElementById("text-err");

		textErr.innerHTML = errorMessage;
		textErr.setAttribute("style", "display: block");

		text.setAttribute("style", "border: solid red");
	},
};
