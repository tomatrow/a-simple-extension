// We wait, since Apple's Animalify extension did that. Seems to work. 
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOMContentLoaded");
});

// register for message events
safari.self.addEventListener("message", function (event) {
    console.log("main.js received message: " + `${JSON.stringify({ name: event.name, message: event.message })}`);
}, false);



