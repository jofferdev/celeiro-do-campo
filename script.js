
function mostrarAlerta() {
  alert("Você clicou no botão!");
}

function validarFormulario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
  alert("Mensagem enviada com sucesso!");
  return true;
}

function adicionarCarrinho(produto) {
  const lista = document.getElementById("lista-carrinho");
  const item = document.createElement("li");
  item.textContent = produto;
  lista.appendChild(item);
  alert(produto + " foi adicionado ao carrinho!");
}


let slideIndex = 0;
let slides = document.querySelectorAll(".slides img");
let timer;

function mostrarSlides() {
  slides.forEach((img, i) => {
    img.style.display = "none";
  });
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  timer = setTimeout(mostrarSlides, 3000);
}

function mudarSlide(n) {
  clearTimeout(timer);
  slideIndex += n - 1;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  mostrarSlides();
}

function mostrarSetas(visivel) {
  document.querySelectorAll(".seta").forEach(btn => {
    btn.style.opacity = visivel ? "1" : "0";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarSlides();
});
