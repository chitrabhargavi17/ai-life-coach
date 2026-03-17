async function sendMessage() {

    console.log("Button clicked");  // 👈 ADD THIS

    let text = document.getElementById("user-input").value;

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
}