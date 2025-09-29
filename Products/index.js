
function onenter() {
    var input = document.getElementById("inp1").value.toLowerCase();

    if (input === "facewash") {
        window.location.href = "facewash.html";
    }
    else if (input === "lipstick") {
        window.location.href = "lipstic.html";
    }
    else if (input === "foundation") {
        window.location.href = "foundation.html";
    }
    else if (input === "lotion") {
        window.location.href = "lotion.html";
    }
    else if (input === "sunscreen") {
        window.location.href = "sunscreen.html";
    }
    else if (input === "lipgloss") {
        window.location.href = "lipgloss.html";
    }
    else if (input === "face powder") {
        window.location.href = "powder.html";
    }

    else {
        alert("No page found for: " + input);

    }
}





