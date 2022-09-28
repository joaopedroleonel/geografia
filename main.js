function correto() {
	document.getElementById("clique").style.pointerEvents = "none";
	document.getElementById("acertou-alerta").style.display = "Inline";
	const correto = document.getElementById("correto")
	correto.classList.add("btn-success")
	document.getElementById("errada").style.opacity = "0.3";
	document.getElementById("errada2").style.opacity = "0.3";
	document.getElementById("errada3").style.opacity = "0.3";
	document.getElementById("errada4").style.opacity = "0.3";
}

function errada() {
	const errada = document.getElementById("errada")
	errada.classList.add("btn-danger")
	const correto = document.getElementById("correto")
	correto.classList.add("btn-success")
	document.getElementById("correto").style.opacity = "0.3";
	document.getElementById("errada2").style.opacity = "0.3";
	document.getElementById("errada3").style.opacity = "0.3";
	document.getElementById("errada4").style.opacity = "0.3";
}

function errada2() {
	const errada2 = document.getElementById("errada2")
	errada2.classList.add("btn-danger")
	const correto = document.getElementById("correto")
	correto.classList.add("btn-success")
	document.getElementById("correto").style.opacity = "0.3";
	document.getElementById("errada").style.opacity = "0.3";
	document.getElementById("errada3").style.opacity = "0.3";
	document.getElementById("errada4").style.opacity = "0.3";
}

function errada3() {
	const errada3 = document.getElementById("errada3")
	errada3.classList.add("btn-danger")
	const correto = document.getElementById("correto")
	correto.classList.add("btn-success")
	document.getElementById("correto").style.opacity = "0.3";
	document.getElementById("errada2").style.opacity = "0.3";
	document.getElementById("errada").style.opacity = "0.3";
	document.getElementById("errada4").style.opacity = "0.3";
}

function errada4() {
	const errada4 = document.getElementById("errada4")
	errada4.classList.add("btn-danger")
	const correto = document.getElementById("correto")
	correto.classList.add("btn-success")
	document.getElementById("correto").style.opacity = "0.3";
	document.getElementById("errada2").style.opacity = "0.3";
	document.getElementById("errada3").style.opacity = "0.3";
	document.getElementById("errada").style.opacity = "0.3";
}

function alertaerrou() {
	document.getElementById("errou-alerta").style.display = "Inline";
	document.getElementById("clique").style.pointerEvents = "none";
}

