document.addEventListener('DOMContentLoaded', () => {
    const dorothy = document.getElementById('dorothy');
    const buttons = document.querySelectorAll('.move-button');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const target = event.target;
            const targetPosition = target.getBoundingClientRect();
            const dorothyPosition = dorothy.getBoundingClientRect();

            const container = document.getElementById('container');
            const containerRect = container.getBoundingClientRect();

            let newLeft = targetPosition.left - containerRect.left + (targetPosition.width / 2) - (dorothyPosition.width / 2);
            let newTop = targetPosition.top - containerRect.top + (targetPosition.height / 2) - (dorothyPosition.height / 2);

            dorothy.style.left = `${newLeft}px`;
            dorothy.style.top = `${newTop}px`;

            setTimeout(() => {
                window.location.href = target.dataset.target;
            }, 600); // Delay to allow for the movement animation
        });
    });
});
