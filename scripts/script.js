"use strict";

alert("Hey, you guys");

// $(document).ready(() => {
//     const p = $("p");  //selects a paragraph

//     const newElement = $("<p>"); //creates a paragraph

//     console.log(newElement);

//     newElement
//         .text("hello text")
//         .css("font-size", "50px")
//         .html(`
//         <p>no, i am the child</p>`)
//         .hide()
//         .fadeIn("6000");
//     $("body").append(newElement);

// });


// document.querySelector("P");
// document.querySelectorAll("p");
// document.getElementsByTagName("p");

// console.log($("p"));

// console.log($(".section"));

// console.log($("#anchor"));

// $("p").hide();
let writeColor;

$(document).ready(() => {
    $(document).on("click",".red",(event) => {
        writeColor = "red";
        console.log(writeColor);
        console.log(event);
        // $(event.target).addClass("green");
    });
    $(document).on("click",".green",(event) => {
        writeColor = "green";
        console.log(writeColor);

        // $(event.target).addClass("green");
    });
    $(document).on("click",".blue",(event) => {
        writeColor = "blue";
        console.log(writeColor);

        // $(event.target).addClass("green");
    });
    $(document).on("click",".clear",(event) => {
        $(".cell").removeClass("red green blue");            
        // $(event.target).addClass("green");
    });

    $(document).on("click",".cell",(event) => {
    $(event.target).addClass(writeColor)
    // $(event.target)
    // .css("background-color",writeColor);
    });

});


// $(document).ready(() => {
//     $(".cell")
//         .eq(Math.floor(Math.random()*15)+0)
//         .attr("id","it");
//     $(document).on("click","#it",(event) => {
//         $(event.target).addClass("red");
//         $(".green")
//             .addClass("yellow")
//             .removeClass("green");
//     });

//     $(document).on("click",".cell",(event) => {
//         console.log(event);
//         console.log(event.target);
//         $(event.target).addClass("green");
//         // $(event.target)
//         //     .css("background-color","green");

//         console.log("cell was clicked");
//     });
// });
