//Array
let people = ["Greg", "Mary", "Devon", "James"];
    for(let i =0; i< people.length; i++){
        console.log(people[i]);
    }
people.forEach(function(name){
    console.log(name)
})

people.shift();
console.log(people);
people.pop();
console.log(people);
people.unshift("Matt");
console.log(people);
people.push("Wullur");
console.log(people);

for(let i =0; i< people.length; i++){
    if(i > 1){
        break;
    }
    console.log(people[i]);
}
console.log(people.slice(2));
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1,"Elizabeth", "Artie");
console.log(people);

let withBob = people.concat("Bob");
console.log(withBob);

let programming = {
    languages:["JavaScript","Python","Ruby"],
    isChallenging:true,
    isRewarding:true,
    difficulty:8,
    jokes:"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}

console.log(programming);

programming.languages.push("Go");
console.log(programming);

programming["difficulty"] = 7;
console.log(programming);

delete programming.jokes;
console.log(programming);

programming.isFun = true;
console.log(programming);

programming.languages = programming.languages.map((e, i) => `${i} - ${e}`);
console.log(programming);
