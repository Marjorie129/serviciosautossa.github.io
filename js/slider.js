(function () {
    const sliders = document.querySelectorAll(".FAQs__body");
    const buttonnext = document.querySelector("#next");
    const buttonbefore = document.querySelector("#before");
    let value;

    buttonnext.addEventListener("click", () => {
        changePosition(1);
    });

    buttonbefore.addEventListener("click", () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentFAQs = document.querySelector('.FAQs__body--show').dataset.id;
        value = Number(currentFAQs);
        value += add;

        sliders[Number(currentFAQs) - 1].classList.remove('FAQs__body--show');
        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }
        sliders[value - 1].classList.add('FAQs__body--show');
    }
})();

//= Asignacion
//== Igualdad debil
//=== Igualdad estricta
//!= Diferente debil
//!== Diferente estricta
