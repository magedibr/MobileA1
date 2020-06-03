$(document).ready(function() {
    console.log("in doc ready");

    //Retrive variable from local storage
    let nameP = localStorage.getItem("name");
    let IdP= localStorage.getItem("ID");
    let loginP = localStorage.getItem("Login");

    //Set Template literals
    let nameTemp = `My name is ${nameP}`;
    let IDTemp =  `My ID is ${IdP}`;
    let loginTemp=`My login is ${loginP}`;


    $("#name").html(nameTemp);
    $("#ID").html(IDTemp);
    $("#Login").html(loginTemp);





})

