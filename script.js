const generateButton = document.getElementById("generateButton");
const colorCount = document.getElementById("colorCount");
const palette = document.getElementById("palette");
const message = document.getElementById("message");


// Generate a random color
function createRandomColor() {

    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}


// Generate the palette
function generatePalette() {

    let numberOfColors = Number(colorCount.value);

    palette.innerHTML = "";

    let colors = [];

    // WHILE LOOP
    while (colors.length < numberOfColors) {

        let newColor = createRandomColor();

        if (!colors.includes(newColor)) {
            colors.push(newColor);
        }
    }


    // FOR LOOP
    for (let i = 0; i < colors.length; i++) {

        const colorCard = document.createElement("div");

        colorCard.classList.add("color-card");

        colorCard.style.backgroundColor = colors[i];

        colorCard.innerHTML = `
            <span class="color-code">
                ${colors[i]}
            </span>
        `;

        colorCard.addEventListener("click", function() {

            // VARIABLE controls the CSS
            let selectedColor = colors[i];

            document.body.style.backgroundColor = selectedColor;

            message.textContent =
                "Your background is now " + selectedColor + "!";

        });

        palette.appendChild(colorCard);
    }

    message.textContent =
        "Click a color to make it your background!";
}


// Button event
generateButton.addEventListener("click", generatePalette);


// Generate a palette when the page loads
generatePalette();