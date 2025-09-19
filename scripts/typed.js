$(document).ready(function() {
    const terminalLines = [
        { command: "python3 welcomeMessage.py", output: "Hello! Welcome to my portfolio\n" },
        { command: "g++ -o authorInfo authorInfomation.cpp", output: "" },
        { command: "./authorInfo", output: "Occupation: Student\nMajor: Computer Sceince\nMinor: Computer Engineering\n" },
        { command: "javac latestPost.java", output: "Reflection: Learning About Learning\nCheck it out below\n" },
        { command: "clear", output: "" } ];

    const target = $("#terminal-text");
    const prompt = "user/paul/portfolio ~ % ";
    const typingSpeed = 90;      // speed of typing commands
    const delayAfterLine = 3000; // pause after each command+output
    const delayAfterAll = 1000;  // pause after clearing before restarting

    let lineIndex = 0;
    let charIndex = 0;

    function typeCommand() {
        if (lineIndex >= terminalLines.length) {
            // restart loop after all lines
            setTimeout(() => {
                target.html("");
                lineIndex = 0;
                charIndex = 0;
                typeCommand();
            }, delayAfterAll);
            return;
        }

        const line = terminalLines[lineIndex];

        if (charIndex === 0) {
            // show prompt instantly
            target.html(target.html() + prompt);
        }

        if (charIndex < line.command.length) {
            // type command letter by letter
            target.html(target.html() + line.command[charIndex]);
            charIndex++;
            setTimeout(typeCommand, typingSpeed);
        } else {
            // finished command, show output instantly
            if (line.command === "clear") {
                setTimeout(() => {
                    target.html("");
                    lineIndex++;
                    charIndex = 0;
                    typeCommand();
                }, delayAfterLine);
            } else {
                target.html(target.html() + "\n" + line.output + "\n");
                lineIndex++;
                charIndex = 0;
                setTimeout(typeCommand, delayAfterLine);
            }
        }
    }

    target.html(""); // clear initially
    typeCommand();
});
