document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function () {
        const menu = document.getElementById("menu");
        menu.classList.remove("hidden");
        menu.style.animation = "fadeInUp 1s forwards";
    }, 2000);

    const membersBtn = document.getElementById("members-btn");
    const membersList = document.getElementById("members-list");

    membersBtn.addEventListener("click", function () {
        membersList.innerHTML = "";

        members.forEach(member => { // Correção: forEach
            const memberDiv = document.createElement("div");
            memberDiv.classList.add("member");

            const img = document.createElement("img");
            img.src = member.imagem || "default.jpg"; // Adiciona imagem padrão, se não houver imagem
            img.alt = member.nome;
            memberDiv.appendChild(img);

            const infoDiv = document.createElement("div");
            infoDiv.classList.add("member-info");

            const name = document.createElement("h3");
            name.textContent = member.nome;
            infoDiv.appendChild(name);

            const socialLinks = document.createElement("div");
            socialLinks.classList.add("social-links");

            socialLinks.innerHTML = `
                <a href="${member.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="${member.soundcloud}" target="_blank"><i class="fab fa-soundcloud"></i></a>
                <a href="https://${member.spotify}" target="_blank"><i class="fab fa-spotify"></i></a>
                <a href="${member.youtube}" target="_blank"><i class="fab fa-youtube"></i></a>
            `;

            infoDiv.appendChild(socialLinks);
            memberDiv.appendChild(infoDiv);

            membersList.appendChild(memberDiv);

            // Adiciona a classe 'active' para animação após 100ms
            setTimeout(() => {
                memberDiv.classList.add("active");
            }, 100);
        });

        membersList.style.display = "block";
    });
});
