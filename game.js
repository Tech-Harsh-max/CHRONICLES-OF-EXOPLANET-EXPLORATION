// Function to display planet information
function showInfo(planetName) {
    const infoDiv = document.getElementById('info');
    let infoText = '';

    switch (planetName) {
        case 'Kepler-452b':
            infoText = 'Type: Terrestrial<br>Distance from Earth: 1,402 light years<br>Age: 6 billion years<br>Revolution Period: 385 days<br>Habitability: Potentially habitable';
            break;
        case 'TRAPPIST-1e':
            infoText = 'Type: Terrestrial<br>Distance from Earth: 40 light years<br>Age: 7.6 billion years<br>Revolution Period: 6.1 days<br>Habitability: Potentially habitable';
            break;
        case 'Proxima Centauri b':
            infoText = 'Type: Terrestrial<br>Distance from Earth: 4.24 light years<br>Age: 4.8 billion years<br>Revolution Period: 11.2 days<br>Habitability: Potentially habitable';
            break;
        case 'Gliese 581g':
            infoText = 'Type: Terrestrial<br>Distance from Earth: 20.3 light years<br>Age: 7 billion years<br>Revolution Period: 30 days<br>Habitability: Potentially habitable';
            break;
    }

    infoDiv.innerHTML = infoText; // Set the info text
    infoDiv.style.display = 'block'; // Make it visible
}
