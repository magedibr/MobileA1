$(document).ready(function() {
    console.log("in doc ready");

    //Student Variables
    const name = "Abdelrahman";
    const ID = 991343504;
    const Login = "magedibr";

    //Template Constants
    let headMessage=`A1 for : ${name}`;
    let footMessage = `Student ID: ${ID} / Login: ${Login}`;

    // Header formatting
    $("header").html(headMessage);
    $("header").addClass("hStyle");

    //Footer formatting
    $(".item4").html(footMessage);


    //Data class
    class MyData{

        constructor(initial,element ,image ) {

            this.intial=initial;
            this.element=element;
            this.image= image;
        }
    }

    // make an array with the objects, use for if to make list, add the image?

    let myData = new Array();
    myData.push(new MyData("M","Mom","Dohs"));










})