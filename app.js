// app.js files

let url = "http://universities.hipolabs.com/search?name=india";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let val = document.querySelector("input").value;
    console.log(val);

    let colleges = await getColleges();
    console.log(colleges);
})

function show(colleges) {
    let list = document.querySelector("#list")
    list.innerText = "";

    for(col of colleges) {
        console.log(col[i].state-province);
        let li = document.createElement("li")
        li.innerText = col.name;
        list.appendChild(li);
    }
}


async function getColleges() {
    try {
        let res = await axios.get(url);
        console.log(res.data);
    } catch(err) {
        console.log("error: ", e);
        return [];
    }
}

getColleges();
