$(document).ready(function() {
    const text = "Learning.\nExploring.\nBuilding."; // your text
    const target = $("#home-banner-msg");
    let index = 0;
    const typingSpeed = 150;
    const deletingSpeed = 50;
    const delayAfterTyping = 1000; // pause before deleting
    const delayAfterDeleting = 500; // pause before typing again

    function type() {
        if (index < text.length) {
            let char = text[index];
            if (char === "\n") {
                target.append("<br>");
            } else {
                target.append(char);
            }
            index++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(deleteText, delayAfterTyping);
        }
    }

    function deleteText() {
        let html = target.html();
        if (html.length > 0) {
            target.html(html.slice(0, -1));
            setTimeout(deleteText, deletingSpeed);
        } else {
            index = 0;
            setTimeout(type, delayAfterDeleting);
        }
    }

    target.html(""); // clear before typing
    type();
});
