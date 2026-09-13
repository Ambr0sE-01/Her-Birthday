document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const card = document.getElementById("card");

    // Interaction 1: Clicking the envelope
    envelope.addEventListener("click", () => {
        // If it isn't already open, add the 'open' class
        if (!envelope.classList.contains("open")) {
            envelope.classList.add("open");
        }
    });

    // Interaction 2: Clicking the card itself
    card.addEventListener("click", (event) => {
        // Stop the click from registering on the envelope behind it
        event.stopPropagation(); 
        
        // Only allow the card to expand if the envelope is already open
        if (envelope.classList.contains("open")) {
            card.classList.add("expanded");
        }
    });
});