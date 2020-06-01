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
    $(".item4").css("text-align","center");


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
    myData.push(new MyData("M","Milk","/images/milk.jpeg"));
    myData.push(new MyData("A","Apple","/images/apple.jpeg"));
    myData.push(new MyData("G","Goat","/images/goat.jpeg"));
    myData.push(new MyData("E","Ear","/images/ear.jpeg"));
    myData.push(new MyData("D","Dog","/images/dog.jpeg"));
    myData.push(new MyData("I","Iris","/images/iris.jpeg"));
    myData.push(new MyData("B","Book","/images/book.jpeg"));
    myData.push(new MyData("R","Racoon","/images/racoon.jpeg"));




        for(let i of myData){
            $(".item2").html(i);
        }







})