window.onload = function() {
    const container = document.querySelector('.flower-container');
    let flowerCount = 0;
    const maxFlowers = 6;

    // Función para crear una nueva flor
    function createFlower() {
        if (flowerCount < maxFlowers) {
            const flower = document.createElement('div');
            flower.classList.add('flower');

            // Crear los pétalos
            for (let i = 1; i <= 4; i++) {
                const petal = document.createElement('div');
                petal.classList.add('petal', `petal${i}`);
                flower.appendChild(petal);
            }

            // Crear el centro de la flor
            const center = document.createElement('div');
            center.classList.add('center');
            flower.appendChild(center);

            // Crear el tallo
            const stem = document.createElement('div');
            stem.classList.add('stem');
            flower.appendChild(stem);

            container.appendChild(flower);  // Añadir la flor al contenedor
            flowerCount++;

            // Mostrar mensaje
            alert('¡Una flor más para ti!');
        } else {
            alert('¡Has alcanzado el máximo de flores!');
        }
    }

    // Detectar clic en la pantalla
    document.body.addEventListener('click', createFlower);
};
