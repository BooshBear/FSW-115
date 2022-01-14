document.getElementById("go").addEventListener(
    "click", function () {
        fetch("https://animechan.vercel.app/api/random")
            .then (response => response.json())
            .then(data => {
                let h3 = document.createElement("h3");
                h3.innerHTML = JSON.stringify(data);
                document.body.appendChild(h3);
            })
            .catch((error) => {
                console.error("Error:", error);
            })
    }
)
