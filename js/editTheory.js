function editTheory() {
	const allDivs = document.querySelectorAll("p, h1, h2, h3, h4, figcaption, li");
	const a = document.getElementById("resultMsg");

	allDivs.forEach((el) => {
		el.setAttribute("contenteditable", true);
	});

	a.innerHTML = "Редактирането започна успешно!";
}
function editTheoryStop() {
	const allDivs = document.querySelectorAll("p, h1, h2, h3, h4, figcaption,li");
	const a = document.getElementById("resultMsg");

	allDivs.forEach((el) => {
		el.setAttribute("contenteditable", false);
	});
	a.innerHTML = "Редактирането приключи успешно!";
}
