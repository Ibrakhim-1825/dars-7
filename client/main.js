const box = document.querySelector(".box");

const render = (users) => {
    box.innerHTML = users.map((i) => `<div class="card">
    <h2>ID: ${i.id}</h2>
    <h1>Name: ${i.name}</h1>
    <h1>Username: ${i.username}</h1> 
    <h1>Email: ${i.email}</h1>
    <div class="addres">
        <h3>Address:</h3>
        <h3>Street: ${i.address.street}</h3>
        <h3>Suite: ${i.address.suite}</h3>
        <h3>City: ${i.address.city}</h3>
        <h3>ZipCode: ${i.address.zipcode}</h3>
        <h3>Geo:
        <h3>lat: ${i.address.geo.lat}</h3>
        <h3>lat: ${i.address.geo.lng}</h3>
        </h3>
        </div>
        <h1>Phone: ${i.phone}</h1>
        <h1>Web-site: ${i.website}</h1>
        <h3>Company: ${i.company.name}</h3>
        <h3>CatchPhrase: ${i.company.catchPhrase}</h3>
        <h3>BS: ${i.company.bs}</h3>
   
    </div>`
    ).join("")
}

const getDAta = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => {
        render(data);
    })
};

getDAta();