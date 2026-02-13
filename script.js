document.addEventListener("DOMContentLoaded", function () {

    const forma = document.getElementById("kontaktForma");

    if (forma) {
        forma.addEventListener("submit", function (e) {
            e.preventDefault();

            const ime = document.getElementById("ime").value;
            const email = document.getElementById("email").value;
            const poruka = document.getElementById("poruka").value;

            if (ime.length < 3) {
                alert("Ime mora imati barem 3 znaka!");
                return;
            }

            const podaci = {
                ime,
                email,
                poruka
            };

            localStorage.setItem("kontaktPodaci", JSON.stringify(podaci));

            document.getElementById("porukaStatus").textContent =
                "Podaci su uspješno spremljeni!";
        });
    }

});
