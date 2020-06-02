$(document).ready(function() {
    console.log("in doc ready");

    //Retrive variable from local storage
    const name = localStorage.getItem("name");
    const Id= localStorage.getItem("ID");
    const login = localStorage.getItem("Login");

console.log(name+Id+login);


    $("p").html(name);







})

