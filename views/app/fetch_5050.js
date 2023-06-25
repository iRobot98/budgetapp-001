fetch("http://localhost:5050/")
    .then((v) => v.json())
    .then((v) => console.log(v));
