function mandi(){
    console.log("mandi");
}
function sarapan(callback){
    setTimeout(() => {
        console.log("sarapan");
        callback();
    },3000);
    }
function berangkatSekolah(){
    console.log("berangkat sekolah");
}
mandi();
sarapan(berangkatSekolah);

function helloWorld() {
    return helloWorld = new Promise((resolve) => {
            resolve("Hello World");
    })
};

fetch("https://jsonplaceholder.typicode.com/users")
.then(function (response) {
    return response.json();
  })
  .then(function (user) {
    console.log(user);
  });

function ambilDataUser() {

}
ambilDataUser()