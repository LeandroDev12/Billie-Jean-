document.addEventListener('DOMContentLoaded', function() {
    const letraButton = document.querySelector('.botao:nth-child(1)');
    const traducaoButton = document.querySelector('.botao:nth-child(2)');
    const traducaoElements = document.querySelectorAll('.tradução');

    letraButton.addEventListener('click', function() {
        traducaoElements.forEach(element => {
            element.style.display = 'none';
        });
    });

    traducaoButton.addEventListener('click', function() {
        traducaoElements.forEach(element => {
            element.style.display = 'block';
        });
    });
});

