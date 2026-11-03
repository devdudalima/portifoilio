document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--x', `${e.clientX}px`);
  document.documentElement.style.setProperty('--y', `${e.clientY}px`);
});

document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--y', `${e.clientY}px`);
});

// Efeito de digitação
const dest = document.querySelector(".dest");

const texto = "Full Stack.";

let index = 0;

function escrever() {
    if (index < texto.length) {
        dest.textContent += texto.charAt(index);
        index++;

        setTimeout(escrever, 220);
    }
}

escrever();