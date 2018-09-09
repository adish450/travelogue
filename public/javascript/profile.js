/* global $*/
$(".hide").hide();

var home = document.getElementById("home");
var myaccount = document.getElementById("my-account");
var myblogs = document.getElementById("my-blogs");
var addblog = document.getElementById("add-new-blog");
var manageblogs = document.getElementById("manage-blogs");
var hide = document.getElementsByClassName("hide");


home.addEventListener("click", function() {
    $(".hide").hide();
    $("#welcome").show();

})
myaccount.addEventListener("click", function() {
    $(".hide").hide();
    $("#status").show();

})
myblogs.addEventListener("click", function() {
    $(".hide").hide();
    $("button").hide();
    $("#title").show();
    $(".blogs").show();

})
addblog.addEventListener("click", function() {
    $(".hide").hide();
    $("form").show();
})
manageblogs.addEventListener("click", function() {
    $(".hide").hide();
    $("#title").show();
    $(".blogs").show();
    $("button").show();

    var btn = document.querySelector("button");

    btn.addEventListener("click", function() {
        
        
        $.ajax({
                type: 'DELETE',
                url: $('button').attr("data-id"),
            })
            .done(function(data) {
                console.log('success');
            })
            .fail(function(err) {
                console.log(err);
            })
    })
})
 
$(document).ready(function() {

    if ($(window).width() <= 900) {
        $('.font-awesome')
            .addClass("fa-user-circle")
            .addClass("fa-4x")
            .removeClass("fa-9x");
    }

    if ($(window).width() > 900) {
        $('.font-awesome')
            .addClass("fa-user-circle")
            .addClass("fa-9x")
            .removeClass("fa-4x");
    }

});

$(window).resize(function() {
    if ($(window).width() <= 900) {
        $('.font-awesome')
            .addClass("fa-user-circle")
            .addClass("fa-4x")
            .removeClass("fa-9x");
    }

    if ($(window).width() > 900) {
        $('.font-awesome')
            .addClass("fa-user-circle")
            .addClass("fa-9x")
            .removeClass("fa-4x");

    }
});
