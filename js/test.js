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
	document.querySelector(".question-title").innerHTML = "Тошко голям измамник ли е?";

	document.getElementById("a1").innerHTML = "Да";
	document.getElementById("a2").innerHTML = "Абсолютно";
	document.getElementById("a3").innerHTML = "Тъй вярно";
	document.getElementById("a4").innerHTML = "Виждал съм ама няма";

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
	document.querySelector(".question-title").innerHTML = "Кой е най-големият преподавател?";

	document.getElementById("a1").innerHTML = "Дичката";
	document.getElementById("a2").innerHTML = "Младенката";
	document.getElementById("a3").innerHTML = "Явката";
	document.getElementById("a4").innerHTML = "АЛДИ";

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
	document.querySelector(".question-title").innerHTML = "Взе ли СЕМ?";

	document.getElementById("a1").innerHTML = "Не";
	document.getElementById("a2").innerHTML = "Ти добре ли си?!";
	document.getElementById("a3").innerHTML = "Другия път";
	document.getElementById("a4").innerHTML = "Минах между капките";

	document.querySelector(".question-number").innerHTML = "Въпрос: 3";

	document.querySelector(".question-img").style.display = "block";
	document.querySelector(".question-img").src = "./images/hint3.jpg";

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
		document.querySelector(".question-img").src = "./images/hint1.jpg";
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
