// window.onload = function () {
// 	document.getElementById("del-1").addEventListener("click", tableMethods.deleteRow);
// 	document.getElementById("del-2").addEventListener("click", tableMethods.deleteRow);
// 	document.getElementById("del-3").addEventListener("click", tableMethods.deleteRow);
// };

const tableMethods = {
	deleteRow: (event) => {
		event.preventDefault();

		const button = event.target;

		button.parentElement.parentElement.remove();
	},
};

document.getElementById("del-1").addEventListener("click", tableMethods.deleteRow);
document.getElementById("del-2").addEventListener("click", tableMethods.deleteRow);
document.getElementById("del-3").addEventListener("click", tableMethods.deleteRow);
