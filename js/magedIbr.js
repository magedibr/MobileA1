$(document).ready(function() {
    console.log("in doc ready");

    //Student Variables
     const name = "Abdelrahman";
     const ID =   "991343504";
     const Login ="magedibr";


    //Set and store the variables using Key, Value pairs.
    localStorage.setItem("name","Abdelrahman");
    localStorage.setItem("ID","991343504");
    localStorage.setItem("Login","magedibr");



    //Template Constants
    let headMessage = `A1 for : ${name}`;
    let footMessage = `Student ID: ${ID} / Login: ${Login}`;


    // Header formatting
    $("header").html(headMessage);
    $("header").addClass("hStyle");


    //Footer formatting
    $(".item4").html(footMessage);
    $(".item4").css("text-align", "center");


    //Data class
    class MyData {

        constructor(initial, element, image) {
            this.intial = initial;
            this.element = element;
            this.image = image;
        }

    }



    let myData = [];
    myData[0] = new MyData("M", "milk", "images/milk.jpeg");
    myData[1] = new MyData("A", "apple", "images/apple.jpeg");
    myData[2] = new MyData("G", "goat", "images/goat.jpeg");
    myData[3] = new MyData("E", "earth", "images/earth.jpeg");
    myData[4] = new MyData("D", "dog", "images/dog.jpeg");
    myData[5] = new MyData("I", "iris", "images/iris.jpeg");
    myData[6] = new MyData("B", "book", "images/book.jpeg");
    myData[7] = new MyData("R", "racoon", "images/racoon.jpeg");





    //Populate Array of objects using for/of loop
    for (let i of myData) {
        let y = i.element;
        let k = i.image;
        let src = "<img src = " + k + " ;+ width = 35   height =  30  border-radius:50% >";
        let message = `${i.intial} is for ${i.element}`;
        let j;


        for (j = 0; j < myData.length; j++) {

            if (y == 'milk')


                $("section[title|='milk']").html(message + " " + src);

            if (y == 'apple')

                $("section[title|='apple']").html(message + "  " + src);

            if (y == 'goat')
                $("section[title|='goat']").html(message + "  " + src);

            if (y == 'earth')
                $("section[title|='earth']").html(message + "  " + src);

            if (y == 'dog')
                $("section[title|='dog']").html(message + "  " + src);

            if (y == 'iris')
                $("section[title|='iris']").html(message + "  " + src);

            if (y == 'book')
                $("section[title|='book']").html(message + "  " + src);

            if (y == 'racoon')
                $("section[title|='racoon']").html(message + "  " + src);

            {
                break;
            }


        }
    }


        // Fill input box dynamiccly based on the names intial.

        $("#TextInput").val(JSON.stringify(myData[0].intial));


        // Buttons

        $("#Toggle").click( function() {
           let Intial = $("#TextInput").val();
           $(".item2 section[title ^= "+ Intial +"]").toggle();

       });

          $("#Style").click( function() {
             console.log("yep")
               $("li").addClass("liStyle");

         });


})