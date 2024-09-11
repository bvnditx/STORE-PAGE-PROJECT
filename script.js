document.addEventListener("DOMContentLoaded", () => {
    // Exibe o menu com animação após 2 segundos
    setTimeout(function () {
        const menu = document.getElementById("menu");
        if (menu) {
            menu.classList.remove("hidden");
            menu.style.animation = "fadeInUp 1s forwards";
        }
    }, 2000);

    // Referência aos botões e à lista de membros
    const membersBtn = document.getElementById("members-btn");
    const membersList = document.getElementById("members-list");
    const storeBtn = document.querySelector("#menu li:first-child a");
    const releasesBtn = document.querySelector("#menu li:last-child a");
    const container = document.querySelector(".container");

    // Função de animação para o header
    function animateHeader() {
        if (container) {
            container.classList.add("move-header");
        }
    }

    // Adiciona animação ao clicar em qualquer um dos botões
    if (membersBtn) membersBtn.addEventListener("click", animateHeader);
    if (storeBtn) storeBtn.addEventListener("click", animateHeader);
    if (releasesBtn) releasesBtn.addEventListener("click", animateHeader);

    // Evento de clique no botão de membros
    if (membersBtn) {
        membersBtn.addEventListener("click", function () {
            membersList.innerHTML = ""; // Limpa a lista de membros

            // Para cada membro na lista, cria e exibe as informações
            members.forEach((member, index) => {
                const memberDiv = document.createElement("div");
                memberDiv.classList.add("member");

                const img = document.createElement("img");
                img.src = member.imagem || "default.jpg"; // Adiciona imagem padrão se não houver imagem
                img.alt = member.nome;
                memberDiv.appendChild(img);

                const infoDiv = document.createElement("div");
                infoDiv.classList.add("member-info");

                const name = document.createElement("h3");
                name.textContent = member.nome;
                infoDiv.appendChild(name);

                // Links sociais
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

                // Adiciona a classe 'active' para cada membro com um delay para animação
                setTimeout(() => {
                    memberDiv.classList.add("active");
                }, index * 100); // Adiciona o delay crescente para cada membro
            });

            membersList.style.display = "flex"; // Alinha os membros na horizontal
            membersList.style.flexWrap = "wrap"; // Permite que os membros quebrem linha
            membersList.style.gap = "20px"; // Adiciona espaçamento entre os membros
        });
    }
});