function showDetail() {
		document.querySelector('#desc').style.display = "block";
		document.querySelector('#open').style.display = "none";
}
function hideDetail() {
		document.querySelector('#desc').style.display = "none";
		document.querySelector('#open').style.display = "flex";
}

const chatInputSubmit = document.getElementById("#chat-form");

function chatTest(event){
	event.preventDefault();
}
