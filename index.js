const person={
    name:"david"
}

const jsonme=JSON.stringify(person);
localStorage.setItem("person",jsonme);

const j=localStorage.getItem("person");

const jsonm=JSON.parse(J);

console.log(jsonm);