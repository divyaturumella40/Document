document.getElementById("loadBtn").addEventListener("click", async () => {
    try {
        const response = await fetch("/api/message");
        const data = await response.json();
        document.getElementById("response").textContent = data.message;
    } catch (error) {
        document.getElementById("response").textContent = "Error connecting to server";
    }
});
