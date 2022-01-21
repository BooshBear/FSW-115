// ToDoList: http://api.bryanuniversity.edu/DylanMailloux/list
// driods: https://swapi.dev/api/species/

let submit = document.getElementById("submit")
let result = document.getElementById("result")
let unordList = document.getElementById("unordList")

submit.addEventListener("click", function () {
    let data = document.getElementById("postIt").value
    axios.post("http://api.bryanuniversity.edu/DylanMailloux/list", {
        name: data
    })
    setTimeout(() => { 
        unordList.innerHTML = " "
        getTodoList()
    }, 4000) 
})

const getTodoList = async () => {
    try {
        const res0 = await axios.get("http://api.bryanuniversity.edu/DylanMailloux/list")
        let aryNames = [];
        for (let i = 1; i < 16; i++) {
            const res1 = await axios.get("https://swapi.dev/api/people/" + i)
            var names = res1.data.name 
            aryNames.push(names);
        }
        /* for (let i = 18; i < 82; i++) {
            const res1 = await axios.get("https://swapi.dev/api/people/" + i)
            var names = res1.data.name 
            aryNames.push(names);
        }*/
        displayList(res0, aryNames)
    }
    catch(error){
        console.log(error);
    }
    
}

const displayList = (todoList, stwarChar) => {
    for (let i = 0; i < todoList.data.length; i++) {
// checking if isComplete true or not
        const ifchecked = () => {
            if (todoList.data[i].isComplete === true) {
                return "checked"
            } else {
                return "notchecked"
            }
    }
// displaying stuff to DOM
        let li = document.createElement("li")
        li.setAttribute("id", `${todoList.data[i]._id}`)
        li.innerHTML += `<input type=checkbox class="chk" id="${todoList.data[i]._id}" ${ifchecked()}> `;
        li.innerHTML += `Task: ${todoList.data[i].name}, `+
        `Character Assigned: ${stwarChar[getRandomNum(16)]}`+ 
        `  <button class="delete" id="${todoList.data[i]._id}">Delete</button>`;
        unordList.appendChild(li)

// checking if checkboxes are checked and grey lining them
        let id = document.getElementById(todoList.data[i]._id)
        if (ifchecked() == "checked") {
            id.style.textDecoration = "line-through"
            id.style.color = "dimgrey"
        }
    }   

// Event listeners
    // Axios Put ->
    document.querySelectorAll(".chk").forEach(item =>{
        item.addEventListener("click",  function(){
            const chk = item
            const test = () => {
                if (chk.checked == true) {
                    axios.put("http://api.bryanuniversity.edu/DylanMailloux/list/" + chk.id, {
                        isComplete: true
                    })
                } else if (chk.checked != true) {
                    axios.put("http://api.bryanuniversity.edu/DylanMailloux/list/" + chk.id, {
                        isComplete: false
                    })
                }
            }
            test()

            setTimeout(() => { 
                unordList.innerHTML = " "
                getTodoList()
            }, 5000) 
        })
    })
    // Axios Delete ->
    document.querySelectorAll(".delete").forEach(item =>{
        item.addEventListener("click", function () {
            axios.delete("http://api.bryanuniversity.edu/DylanMailloux/list/" + item.id)
            setTimeout(() => { 
                unordList.innerHTML = " "
                getTodoList()
            }, 4000) 
        })
    })
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max)
}

getTodoList()