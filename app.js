// STEP NAVIGATION FUNCTIONS

function nextStep(step) {
    document.querySelectorAll(".step").forEach(div => div.style.display = "none");
    document.getElementById("step" + step).style.display = "block";
}

function prevStep(step) {
    document.querySelectorAll(".step").forEach(div => div.style.display = "none");
    document.getElementById("step" + step).style.display = "block";
}


// MAIN AI FUNCTION

async function sendMessage() {

    console.log("Button clicked");  // ✅ debug

    let text = document.getElementById("user-input").value;

    // 🔴 Check if input is empty
    if (text.trim() === "") {
        alert("Please enter your problem!");
        return;
    }

    try {
        let response = await fetch("http://127.0.0.1:8000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text
            })
        });

        let data = await response.json();

        document.getElementById("response").innerText = data.reply;

    } catch (error) {
        console.error("Error:", error);
        document.getElementById("response").innerText = "⚠️ Server not responding. Please try again.";
    }
}
