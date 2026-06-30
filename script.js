alert("script conectado");
function abrirCarta() {

    const inicio = document.getElementById("inicio");
    const mesa = document.querySelector(".mesa");
    const texto = document.getElementById("textoCarta");

    inicio.style.opacity = "0";

    setTimeout(() => {

        inicio.style.display = "none";
        mesa.style.display = "flex";

        mesa.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(40px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0px)"
                }
            ],
            {
                duration: 900,
                easing: "ease-out",
                fill: "forwards"
            }
        );

    }, 400);
}
