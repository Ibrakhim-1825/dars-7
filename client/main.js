const box = document.querySelector(".box");




const render = (users) => {
    box.innerHTML = users.map((item) => `<h1>${item.name}</h1>
    h1`)
}

const getDAta = () => {
    fetch("http://localhost:3000/").then((res) => res.json()).then((data) => {
        render(data);
    })
};

getDAta();