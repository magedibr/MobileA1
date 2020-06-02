$(document).ready(function() {
    console.log("in doc ready");

    //Student Variables
    const name = "Abdelrahman";
    const ID = 991343504;
    const Login = "magedibr";


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

    //  let milk pic = /sdsd

    // make an array with the objects, use for if to make list, add the image?

    let myData = [];
    myData[0] = new MyData("M", "milk", "images/milk.jpeg");
    myData[1] = new MyData("A", "apple", "images/apple.jpeg");
    myData[2] = new MyData("G", "goat", "images/goat.jpeg");
    myData[3] = new MyData("E", "ear", "images/ear.jpeg");
    myData[4] = new MyData("D", "dog", "images/dog.jpeg");
    myData[5] = new MyData("I", "iris", "images/iris.jpeg");
    myData[6] = new MyData("B", "book", "images/book.jpeg");
    myData[7] = new MyData("R", "racoon", "images/racoon.jpeg");



    //  let x = myData[3];
    //console.log(x);
    //$("section[title|='Apple']").html(x);

    //Populate Array of objects using for/of loop



    for (let i of myData) {
        let y = i.element;
        let k = i.image;

        let src = "<img src = "+k+" width = 10  height =  10 >";

        let message = `${i.intial} is for ${i.element}`;
        let j;

        for ( j=0; j < myData.length; j++){


             if(y =='milk')

                   $("section[title|='milk']").html(message +" "+ src );

                //  console.log(message);


            if(y=='apple')

                     $("section[title|='apple']").html(message);
                  //   console.log(message);

                      if(y=='goat')
                         $("section[title|='goat']").html(message);

                        if(y=='ear')
                             $("section[title|='ear']").html(message);
                    //         console.log(message);

                             if(y=='dog')
                                  $("section[title|='dog']").html(message);
                      //              console.log(message);

                                    if(y=='iris')
                                         $("section[title|='iris']").html(message);

                                          if(y=='book')
                                              $("section[title|='book']").html(message);

                                          if(y=='racoon')
                                                  $("section[title|='racoon']").html(message);

            {break;}



       }
            // This part took me quite a while







        /*
        $("section[title|='apple']").html("Apple");
        let x = JSON.stringify(i.element);

        if (x = "milk")
            $("section[title|='milk']").html("milk");

        else if (x = "Apple")
            $("section[title|='apple']").html("Apple");



        console.log(i.element);
*/
    }











})