let data = {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/.json",
    "films": [
        "https://swapi.dev/api/films/1/.json",
        "https://swapi.dev/api/films/2/.json",
        "https://swapi.dev/api/films/3/.json",
        "https://swapi.dev/api/films/6/.json"
    ],
    "species": [],
    "vehicles": [
        "https://swapi.dev/api/vehicles/14/.json",
        "https://swapi.dev/api/vehicles/30/.json"
    ],
    "starships": [
        "https://swapi.dev/api/starships/12/.json",
        "https://swapi.dev/api/starships/22/.json"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.dev/api/people/1/.json"
}
document.getElementById("json-result").innerHTML = JSON.stringify(data, undefined, 2);