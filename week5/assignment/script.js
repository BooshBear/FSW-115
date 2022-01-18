// Week 4 assignment
// base url: http://api.bryanuniversity.edu/<yourname>/list[/<listItemId>

const updateTask = async (id, note) => {
    await axios.put(`http://api.bryanuniversity.edu/DylanMailloux/list/${id}`, { isComplete: note})
}
// Part 1
axios.get("http://api.bryanuniversity.edu/DylanMailloux/list")
.then(response => {
    for (let i = 0; i < response.data.length; i++) {
        let todo = document.getElementById("todo");
        let h2 = document.createElement("h2")
        h2.innerHTML += "isComplete?: " + `<input type="checkbox" id="${i}" class="theList">` +
        `<label for="${i}">`+ `<div id="${response.data[i]._id + 1}">`+ "Title: "+
        response.data[i].name + " Price: $" + response.data[i].price + " Description: "+ response.data[i].description +
        `</div>` + `</label>` + ` <button id="${response.data[i]._id}">Delete</button>`;
        todo.appendChild(h2);
    }
    // Part 3
    let checkboxs = document.querySelectorAll(".theList")
    let arry = [...checkboxs]
    console.log(arry)
    for (let i = 0; i < arry.length; i++) {
        if (arry[i].checked === true) {
            updateTask(arry[i].id, true);
        } else if (arry[i].checked === false) {
            updateTask(arry[i].id, false);
        }
    }

    for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].isComplete == true) {
            document.getElementById(response.data[i]._id + 1).style.textDecoration = "line-through"
            document.getElementById(response.data[i]._id + 1).style.color = "dimgrey"
        }
    }

    // Part 4
    for (let i = 0; i < response.data.length; i++) {
        document.getElementById(response.data[i]._id).addEventListener(
            "click", function () {
                axios.delete(`http://api.bryanuniversity.edu/DylanMailloux/list/${response.data[i]._id}`);
                timedRefresh(2000);
            }
        )
    }
    
})
.catch(err => console.log(err))


// Part 2
document.getElementById("post").addEventListener(
    "click", function (){
        let pName = document.getElementById("name").value;
        let pPrice = document.getElementById("price").value;
        let pDescr = document.getElementById("descr").value;

        axios.post("http://api.bryanuniversity.edu/DylanMailloux/list", {
            name: `${pName}`,
            price: `${pPrice}`,
            description: `${pDescr}`
        })
        timedRefresh(2000);
})

function timedRefresh(time) {
    setTimeout("location.reload(true);", time);
}