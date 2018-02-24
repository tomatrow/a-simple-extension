var sendMessageToGlobal = function (name, message) {
    console.log("end.js" + " sent message: " + `${JSON.stringify({ name: name, message: message })}`);
    safari.self.tab.dispatchMessage(name, message);
};

safari.self.addEventListener("message", function (event) {
    console.log("end.js received message: " + `${JSON.stringify({ name: event.name, message: event.message })}`);

    if (event.name === "color") {
        var color = event.message.color;
        // According to [this SO answer](https://stackoverflow.com/a/15506705)
        (function() { // Note sure if I need this closure-expression-thing. 
            // What we are actually doing. 
            var node = document.createElement('style');
            // Simply adds red border to every element. Pretty annoying really.
            node.innerHTML = `* { outline: 1px solid ${color}; }`;
            document.body.appendChild(node);
        }());

    }
}, false);

sendMessageToGlobal("getColor", null);