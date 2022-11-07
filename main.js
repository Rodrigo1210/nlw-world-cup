function createGame(firstTeam, hour, secondTeam) {
    return `
        <li>
            <img src="./assets/icon-${firstTeam}.svg" alt="${firstTeam} flag" title="${firstTeam}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${secondTeam}.svg" alt="${secondTeam} flag" title="${secondTeam}">
        </li>
    `
}

let delay = -0.3;
function createCard(date, day, games) {
    delay += 0.3;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>

            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector('.cards').innerHTML = `
        ${createCard("20/11", "Sunday", 
            createGame("qatar", "13:00", "ecuador")
        )}

        ${createCard("21/11", "Monday",
            createGame("senegal", "13:00", "netherlands") +
            createGame("england", "10:00", "iran") +
            createGame("united-states", "16:00", "wales")
        )}
`
