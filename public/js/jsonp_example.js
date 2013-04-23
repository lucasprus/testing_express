$().ready(function(){

var lucas = {
	"username": "lucas",
	"name": "lucas lucas",
	"bio": "lucas",
	"password": "lucas"
};

  /*$("button").click(function(){
    $.get("http://localhost:3000/user/lucas",function(data,status){
      console.info("Status: " + status);
      console.log(data);
    }, 'json');
  });*/


	$("button").click(function(){
    $.post("http://localhost:3000/user", lucas ,function(data,status){
		  console.info("Status: " + status);
		  console.log(data);
	  });
	});


});