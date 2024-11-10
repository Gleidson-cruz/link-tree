// Inicio script da raspadinha //

const canvas = document.getElementById('scratch-pad');
const ctx = canvas.getContext('2d');
const card = document.getElementById('card');
canvas.width = card.offsetWidth;
canvas.height = card.offsetHeight;

// Preencher o canvas com uma cor sólida
ctx.fillStyle = '#30033D'; // Cor da raspadinha
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Função para raspar
function scratch(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2, false);
    ctx.fill();
}

// Evento de mouse
canvas.addEventListener('mousemove', (e) => {
    if (e.buttons === 1) { // Verifica se o botão do mouse está pressionado
        scratch(e);
    }
});

// Evento de toque
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    scratch(e.touches[0]);
});

// Inicia o efeito de raspadinha
canvas.addEventListener('touchstart', (e) => {
    scratch(e.touches[0]);
});

// Fim script da raspadinha //