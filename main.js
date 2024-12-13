// Function to handle click events on pins
function setupPins() {
    // Select all pins
    const pins = document.querySelectorAll('[class^="pin"]');

    // Iterate through each pin
    pins.forEach((pin) => {
        pin.addEventListener("click", () => {
            // Get unique content from data attributes
            const title = pin.getAttribute("data-title");
            const description = pin.getAttribute("data-description");
            const image = pin.getAttribute("data-image");

            // Create popup element
            const popup = document.createElement("div");
            popup.className = "popup";
            popup.innerHTML = `
                <div class="popup-content">
                    <button class="close-btn">&times;</button>
                    <h2>${title}</h2>
                    <div class="popup_page">
                        <img class="popup_image" src="${image}" alt="" />
                        <div class="popup_text">
                            <p>${description}</p>
                        </div>
                    </div>
                </div>
            `;

            // Append popup to the body
            document.body.appendChild(popup);

            // Add event listener to close the popup
            popup.querySelector(".close-btn").addEventListener("click", () => {
                popup.remove();
            });
        });
    });
}

// Call the setupPins function on DOMContentLoaded
document.addEventListener("DOMContentLoaded", setupPins);
