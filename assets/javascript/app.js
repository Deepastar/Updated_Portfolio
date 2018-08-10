$(document).ready( function(){
    $("#portfolio-container").hide();
    $("#contact-container").hide();
});

$("#nav-profile").click(function(){
    $("#content-container").show();
    $("#portfolio-container").hide();
    $("#contact-container").hide();
});

$("#nav-portfolio").click(function(){
    $("#content-container").hide();
    $("#portfolio-container").show();
    $("#contact-container").hide();
});

$("#nav-contact").click(function(){
    $("#content-container").hide();
    $("#portfolio-container").hide();
    $("#contact-container").show();
});