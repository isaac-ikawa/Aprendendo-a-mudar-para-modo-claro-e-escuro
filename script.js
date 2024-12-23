const toggleButton = document.getElementById('toggleButton');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Mudar para Modo Claro';
    } else {
        toggleButton.textContent = 'Mudar para Modo Escuro';
    }
});
