document.addEventListener("DOMContentLoaded", function() {
    // Клик на кнопки
    const btnControl = document.querySelectorAll('.small-btn');
    btnControl.forEach((current)=>{
        current.addEventListener('click', (e) => {
            current.classList.toggle('active');
        });
    });

});