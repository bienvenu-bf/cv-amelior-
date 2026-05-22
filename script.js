/* ========================= */
/* ANIMATION SCROLL */
/* ========================= */

function revealSections() {

    const reveals =
    document.querySelectorAll(".reveal");

    reveals.forEach((section) => {

        const windowHeight =
        window.innerHeight;

        const sectionTop =
        section.getBoundingClientRect().top;

        const revealPoint = 100;

        if (
            sectionTop <
            windowHeight - revealPoint
        ) {

            section.classList.add("active");

        }

    });

}

/* EVENT SCROLL */

window.addEventListener(
    "scroll",
    revealSections
);

/* ========================= */
/* BOUTON RETOUR HAUT */
/* ========================= */

const topBtn =
document.getElementById("topBtn");

/* APPARITION BTN */

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

/* RETOUR HAUT */

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ========================= */
/* SCROLL FLUIDE */
/* ========================= */

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(

        "click",

        function (e) {

            e.preventDefault();

            document.querySelector(
                this.getAttribute("href")
            ).scrollIntoView({

                behavior: "smooth"

            });

        }

    );

});

/* ========================= */
/* ACTIVE AU CHARGEMENT */
/* ========================= */

revealSections();