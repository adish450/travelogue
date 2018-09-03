/* global $*/        
        
        var btnlogin = document.querySelector(".login1");
        var btnsignup = document.querySelector(".signup1");
        var login     = document.querySelector(".login");
        var signup     = document.querySelector(".signup");
        
        btnlogin.addEventListener("click",function(){
          // login.style.display = "block";
          // signup.style.display = "none";
          $(".login").show();
          $(".signup").hide();
          // login.style.color= "white";
          // signup.style.color= "black";
          $(".fa-10x").addClass("fa-user-circle");
          $(".icon").show();
        });
        
        btnsignup.addEventListener("click",function(){
          // login.style.display = "none";
          // signup.style.display = "block";
          $(".signup").show();
          $(".login").hide();
          // signup.style.color= "white";
          // login.style.color= "black";
          $(".fa-10x").removeClass("fa-user-circle");
          $(".icon").hide();
        });
            
        $(".submit").click(function(event){
            event.preventDefault();

            var formData = {
    		    firstname : $("#firstname").val(),
    		    lastname :  $("#lastname").val(),
    		    username : $("#username1").val(),
            email : $("#exampleInputEmail2").val(),
            password : $("#exampleInputPassword2").val(),
            gender : $("#inlineRadio3").val()
    	};  
    	  var email = document.getElementById("exampleInputEmail2");
    	  email.addEventListener("input", function (event) {
        if (email.validity.typeMismatch) {
          email.setCustomValidity("Please Enter A Valid Email!");
        } else {
          email.setCustomValidity("");
        }
    	  });

            $.ajax({
			        type : "POST",
			        contentType : "application/json",
			        url : "/signup",
			        data : JSON.stringify(formData),
			        dataType : 'json',
			          success : function(user) {
			          console.log(user);
			         $("#message").text(user.name + " : " + user.message);
			         $(".header").css("top", "-6vw");
				// $("#postResultDiv").html("<p>" + 
				// 	"Post Successfully! <br>" +
				// 	"--> " + user.firstname + " " + user.lastname + "</p>");
			          },
			          error : function(err) {
				// alert("Error!")
				        console.log("ERROR: ", err);
				        $("#message").text(err);
				        $(".header").css("top", "-6vw");
			}
		});
		
		resetData();
		
        });
        
        function resetData(){
    	$("#firstname").val("");
    	$("#lastname").val("");
    	$("#username1").val("");
    	$("#exampleInputEmail2").val("");
    	$("#exampleInputPassword2").val("");
    	$("#inlineRadio3").val("");
    	
    	
    }  
          