// ==== WARNING! THIS IS MOCK JS SO I DON'T HAVE TO MAKE BACKEND ====
// ==== IN TERMS OF CODE QUALITY THIS IS COMPLETE GARBAGE ====

// Click handlers for making the buttons active
document.querySelectorAll(".btn.question").forEach((element) => {
	element.addEventListener("click", function (e) {
		document.querySelectorAll(".btn.question").forEach((item) => {
			item.classList.remove("selected");
		});
		e.target.classList.add("selected");
	});
});

document.querySelectorAll(".btn.answer").forEach((element) => {
	element.addEventListener("click", function (e) {
		document.querySelectorAll(".btn.answer").forEach((item) => {
			item.classList.remove("selected");
		});
		e.target.classList.add("selected");
	});
});

// Select Q1
document.getElementById("q1").addEventListener("click", function (e) {
	// Populate question data
	document.querySelector(".question-title").innerHTML =
		"Блокирането на колелата на превозното средство при спиране може да доведе до:";

	document.getElementById("a1").innerHTML = "Увеличаване сцеплението на гумите с пътя";
	document.getElementById("a2").innerHTML = "Влошаване управляемостта на превозното средство";
	document.getElementById("a3").innerHTML = "Подобряване управляемостта на превозното средство";
	document.getElementById("a4").innerHTML = "Увеличаване на разхода на гориво";

	document.querySelector(".question-number").innerHTML = "Въпрос: 1";

	document.querySelector(".question-img").style.display = "none";

	document.querySelectorAll(".btn.answer").forEach((item) => {
		item.classList.remove("selected");
	});

	// If complete button is clicked (disabled) - add green color to correct answer
	// and remove the click events from the answers buttons
	if (document.getElementById("complete").disabled) {
		document
			.getElementById("a1")
			.setAttribute("style", "background-color: var(--background-color); color: var(--text-color);");
		document.getElementById("a2").setAttribute("style", "background-color: var(--correct-color); color: var(--text-color);");
		document
			.getElementById("a3")
			.setAttribute("style", "background-color: var(--background-color); color: var(--text-color);");
		document
			.getElementById("a4")
			.setAttribute("style", "background-color: var(--background-color); color: var(--text-color);");

		// Remove click handlers by replacing the element with its clone
		document.getElementById("a1").replaceWith(document.getElementById("a1").cloneNode(true));
		document.getElementById("a2").replaceWith(document.getElementById("a2").cloneNode(true));
		document.getElementById("a3").replaceWith(document.getElementById("a3").cloneNode(true));
		document.getElementById("a4").replaceWith(document.getElementById("a4").cloneNode(true));
	}
});

// Select Q2
document.getElementById("q2").addEventListener("click", function (e) {
	// Populate question data
	document.querySelector(".question-title").innerHTML =
		"При спускане по наклон честото и продължително използване на спирачките:";

	document.getElementById("a1").innerHTML = "Подобрява ефективността им";
	document.getElementById("a2").innerHTML = "Охлажда спирачните дискове";
	document.getElementById("a3").innerHTML = "Влошава ефективността им";
	document.getElementById("a4").innerHTML = "Не влияе на ефективността им";

	document.querySelector(".question-number").innerHTML = "Въпрос: 2";

	document.querySelector(".question-img").style.display = "none";

	document.querySelectorAll(".btn.answer").forEach((item) => {
		item.classList.remove("selected");
	});

	// If complete button is clicked (disabled) - add green color to correct answer
	// and remove the click events from the answers buttons
	if (document.getElementById("complete").disabled) {
		document
			.getElementById("a1")
			.setAttribute("style", "background-color: var(--background-color); color: var(--text-color);");
		document
			.getElementById("a2")
			.setAttribute("style", "background-color: var(--background-color); color: var(--text-color);");
		document.getElementById("a3").setAttribute("style", "background-color: var(--correct-color); color: var(--text-color);");
		document
			.getElementById("a4")
			.setAttribute("style", "background-color: var(--background-color); color: var(--text-color);");

		// Remove click handlers by replacing the element with its clone
		document.getElementById("a1").replaceWith(document.getElementById("a1").cloneNode(true));
		document.getElementById("a2").replaceWith(document.getElementById("a2").cloneNode(true));
		document.getElementById("a3").replaceWith(document.getElementById("a3").cloneNode(true));
		document.getElementById("a4").replaceWith(document.getElementById("a4").cloneNode(true));
	}
});

// Select Q3
document.getElementById("q3").addEventListener("click", function (e) {
	// Populate question data
	document.querySelector(".question-title").innerHTML = "Значението на този пътен знак е:";

	document.getElementById("a1").innerHTML = "Пропусни насрещно движещите се!";
	document.getElementById("a2").innerHTML = "Внимание, други опасности!";
	document.getElementById("a3").innerHTML = "Внимание, спри!";
	document.getElementById("a4").innerHTML = "Пропусни движещите се по пътя с предимство!";

	document.querySelector(".question-number").innerHTML = "Въпрос: 3";

	document.querySelector(".question-img").style.display = "block";
	document.querySelector(".question-img").src = "./images/B1.jpg";

	document.querySelectorAll(".btn.answer").forEach((item) => {
		item.classList.remove("selected");
	});

	// If complete button is clicked (disabled) - add green color to correct answer
	// and remove the click events from the answers buttons
	if (document.getElementById("complete").disabled) {
		document
			.getElementById("a1")
			.setAttribute("style", "background-color: var(--background-color); color: var(--text-color);");
		document
			.getElementById("a2")
			.setAttribute("style", "background-color: var(--background-color); color: var(--text-color);");
		document
			.getElementById("a3")
			.setAttribute("style", "background-color: var(--background-color); color: var(--text-color);");
		document.getElementById("a4").setAttribute("style", "background-color: var(--correct-color); color: var(--text-color);");

		// Remove click handlers by replacing the element with its clone
		document.getElementById("a1").replaceWith(document.getElementById("a1").cloneNode(true));
		document.getElementById("a2").replaceWith(document.getElementById("a2").cloneNode(true));
		document.getElementById("a3").replaceWith(document.getElementById("a3").cloneNode(true));
		document.getElementById("a4").replaceWith(document.getElementById("a4").cloneNode(true));
	}
});

// Display hint for the current question
document.querySelector(".hint").addEventListener("click", function (e) {
	// Check which is the current question
	if (document.getElementById("q1").classList.contains("selected")) {
		document.querySelector(".question-img").style.display = "block";
		document.querySelector(".question-img").src = "./images/hint1.png";
	} else if (document.getElementById("q2").classList.contains("selected")) {
		document.querySelector(".question-img").style.display = "block";
		document.querySelector(".question-img").src = "./images/hint2.jpg";
	} else if (document.getElementById("q3").classList.contains("selected")) {
		document.getElementById("a4").classList.add("selected");
	}
});

// Arrow nav
document.querySelector(".arrow.left").addEventListener("click", function (e) {
	// Simulate click events
	if (document.getElementById("q1").classList.contains("selected")) {
	} else if (document.getElementById("q2").classList.contains("selected")) {
		document.getElementById("q1").click();
	} else if (document.getElementById("q3").classList.contains("selected")) {
		document.getElementById("q2").click();
	}
});

// Arrow nav
document.querySelector(".arrow.right").addEventListener("click", function (e) {
	// Simulate click events
	if (document.getElementById("q1").classList.contains("selected")) {
		document.getElementById("q2").click();
	} else if (document.getElementById("q2").classList.contains("selected")) {
		document.getElementById("q3").click();
	} else if (document.getElementById("q3").classList.contains("selected")) {
	}
});

// Complete button
document.getElementById("complete").addEventListener("click", function (e) {
	// Disable the button
	e.target.disabled = true;
	e.target.setAttribute("style", "background-color: var(--text-color);");

	// Simulate click events in order to trigger answer validation
	if (document.getElementById("q1").classList.contains("selected")) {
		document.getElementById("q1").click();
	} else if (document.getElementById("q2").classList.contains("selected")) {
		document.getElementById("q2").click();
	} else if (document.getElementById("q3").classList.contains("selected")) {
		document.getElementById("q3").click();
	}
});

// Bug button
document.querySelector(".btn.bug").addEventListener("click", function (e) {
	window.location = "feedbackform.html";
});
