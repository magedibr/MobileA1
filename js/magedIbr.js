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
  //  let milk pic = /sdsd

    // make an array with the objects, use for if to make list, add the image?

    let myData = new Array();
    myData.push(new MyData("M","milk","/images/milk.jpeg"));
    myData.push(new MyData("A","apple","/images/apple.jpeg"));
    myData.push(new MyData("G","goat","/images/goat.jpeg"));
    myData.push(new MyData("E","ear","/images/ear.jpeg"));
    myData.push(new MyData("D","dog","/images/dog.jpeg"));
    myData.push(new MyData("I","iris","/images/iris.jpeg"));
    myData.push(new MyData("B","book","/images/book.jpeg"));
    myData.push(new MyData("R","racoon","/images/racoon.jpeg"));


  //  let x = myData[3];
    //console.log(x);
    //$("section[title|='Apple']").html(x);






        for(let i of myData){
        let y = 0;
            y++;

            $ ("section[title|= [y]]").html(JSON.stringify(i))




          /*  if( x = $("section[title|= x] ").html("Word Match")){

              $ ("section[title|= x ]").html(i.toString());
                console.log(i);


            } */
        }







})