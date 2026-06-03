const container = document.getElementById("container");

async function buscarPersonagens() {
    try {
        const resposta = await fetch("https://dragonball-api.com/api/characters?page=1&limit=12");

        const dados = await resposta.json();

        dados.items.forEach(personagem => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${personagem.image}" alt="${personagem.name}">
                <h2>${personagem.name}</h2>
                <p><strong>Raça:</strong> ${personagem.race}</p>
                <p><strong>Gênero:</strong> ${personagem.gender}</p>
                <p><strong>Ki:</strong> ${personagem.ki}</p>
            `;

            container.appendChild(card);
        });

    } catch (erro) {
        console.error("Erro ao buscar personagens:", erro);
        container.innerHTML = "<p>Erro ao carregar os personagens.</p>";
    }
}

buscarPersonagens();