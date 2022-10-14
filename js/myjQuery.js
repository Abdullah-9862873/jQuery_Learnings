 // $(function(){}) will do same thing as $(document).ready(function(){})

//  $(document).ready(function () {
    // console.log($);
    // The syntax of jQuery is -> $(selector),action() 
    // Here $ is jQuery-> you can also write jQuery(selector).action()

    // Click function... 
    // $("p").click();        //   Click on p
    // $("p").click(function () {               // Do this when I click on p
        // console.log("You clicked me");          
        // $(this).hide();
        // console.log("You clicked on p");
        // console.log(this);
    //     console.log("You clicked on me");
    // })

    // $("p").dblclick(function(){
    //     console.log("You double clicked on me");
    // })

    // $("p").mouseenter(function(){
    //     console.log("You entered", this);
    // })

    // $("p").mouseleave(function(){
    //     console.log("You left", this);
    // })

    // $("p").mouseup(function(){
    //     $(this).css("background-color", "green");

    // })

    // $("p").mousedown(function(){
    //     $("div").text("Mouse event triggered").show().fadeOut(2000);
    // })

    // $("p").hover(function(){
    //     console.log("You hovered on me", this);
    // },
    // function(){
    //     console.log("Thanks for coming");
    // })

    // There are three main types of selectors in jQuery
    // 1- Element selector
    // 2- id selector
    // 3- class selector

    // This is an example of element selector and is used to click all p 
    // $("p").click();

    // This is an example of id selector and is used to select the id
    // $("#second").click();

    // This is an example of class selector and is used to select class
    // $(".odd").click();

    // This will click on all the elemenets 
    // $('*').click();


    // $("p.odd").click();

    // $("p:first").click();

    //____________________________________________________________________________
    // on Method

//     $("p").on(
//         {
//             click : function(){
//                 console.log("Thanks for clicking");
//             },
//             mouseleave : function(){
//                 console.log("mouse leave");
//             }
//         }
//     );
// })


//________________________________________________________________

// hide show

$("#but").click(function(){
    $("#lorem").toggle(1000);
})

// $("div").hide(1000, function(){
//     console.log("Hiding completed");
// });

// $("div").show(2000, function(){
//     console.log("Showing Completed");
// })

//__________________________________________________________

// fadeIn

$("#but2").click(function(){
    $("#div1").fadeIn(1000);
})
    
$("#but3").click(function(){
    $("#div1").fadeOut(1000);
})

$("#but4").click(function(){
    $("#div1").fadeToggle(1000);
})

$("#lorem").click(function(){
    $("#lorem").fadeTo(1000, 0.33);
})


//____________________________________________________________

// slideUp(speed, callback) & slideDown(speed, callback)

$("#slider").click(function(){
    $("#lorem").slideToggle(2000);
})

//___________________________________________________________

// Animation

$("#animation").click(function(){
    $("#lorem").animate({opacity : 0.33}, 2000);
})


    $("#animation_stop").click(function(){
        $("#lorem").animate({opacity : 1}, 2000);
    })

//____________________________________________________________

// addClass ---> To add class
// removeClass ---> To remove class

// .val ---> To set the value inside the input tag or text area
// .text ---> To set the text inside the element such as div p etc.

// 