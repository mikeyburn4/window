document.getElementById("cmd-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let input = this.value;
        let output = document.getElementById("output");

        output.innerHTML += `C:\\>${input}\n`;

        // Example of fake response
        if (input.toLowerCase() === 'help') {
            output.innerHTML += "This is a fake CMD. You can't do much here.\n";
        } else {
            output.innerHTML += `'${input}' is not recognized as an internal or external command,\noperable program or batch file.\n`;
        }

        output.innerHTML += "\n";
        this.value = "";
        output.scrollTop = output.scrollHeight; // Auto scroll to bottom
    }
});