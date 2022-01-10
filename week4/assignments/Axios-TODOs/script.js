// Week 4 assignment
// base url: http://api.bryanuniversity.edu/<yourname>/list[/<listItemId>

axios.get("http://api.bryanuniversity.edu/DylanMailloux/list")
.then(response => {
    for (let i = 0; i < response.data.length; i++) {
        let h2 = document.createElement("h2")
        h2.innerHTML += `<div id="${i}">` + response.data[i].name + `</div>`
        document.body.appendChild(h2)
    }

    for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].isComplete == true) {
            document.getElementById(i).style.textDecoration = "line-through"
            document.getElementById(i).style.color = "dimgrey"
        }
    }
    
})
.catch(err => console.log(err))

