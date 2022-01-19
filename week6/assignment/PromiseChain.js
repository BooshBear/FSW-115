// Base Url: https://swapi.dev/api/
// Week 6

const wrap = document.getElementById("wrapper")
document.getElementById("sub").addEventListener(
    "click", function() {
    var random = Math.floor(Math.random() * 82)

    axios.get("https://swapi.dev/api/people/" + random)
        .then(res0 => {
            wrap.innerHTML += "--- Name: ("  + res0.data.name;
            return axios.get(res0.data.homeworld);
        })
        .then(res1 => {
            wrap.innerHTML += ") HomeWorld: (" + res1.data.name;
            return axios.get("https://swapi.dev/api/people/2")
        })
        .then(res2 => axios.get(res2.data.species[0]))
        .then(res3 => {
            wrap.innerHTML += ") Species: (" + res3.data.name + ") ---";
            wrap.innerHTML += "\n"
        })
        .catch(err => console.log(err))
    }
)
