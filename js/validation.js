function validatesignup()
{

	let uname= document.getElementById("f3").value;
    let email= document.getElementById("f6").value;
	let pwd= document.getElementById("f4").value;			
	let cpwd= document.getElementById("f5").value;
	

	
	if(email=='')
	{
		alert('Please enter your user email id');
        return false;
	}
	else if(uname=='')
	{
		alert('Please enter the user name.');
        return false;
	}
	
	else if(pwd=='')
	{
		alert('Please enter Password');
        return false;
	}
	else if(cpwd=='')
	{
		alert('Enter Confirm Password');
        return false;
	}
	else if(pwd != cpwd)
	{
		alert ('Password not Matched');
        return false;
	}
	else if(document.getElementById("f4").value.length < 4)
	{
		alert ('Password minimum length is 4');
        return false;
	}
	else if(document.getElementById("f4").value.length > 30)
	{
		alert ('Password max length is 30');
        return false;
	}
    else if(document.getElementById("f5").value.length < 4)
	{
		alert ('Confirm Password minimum length is 4');
        return false;
	}
	else if(document.getElementById("f5").value.length > 30)
	{
		alert ('Confirm Password max length is 30');
        return false;
	}
	else if(document.getElementById("f3").value.length < 6)
	{
		alert ('Username minimum length is 6');
        return false;
	}
	else if(document.getElementById("f3").value.length > 10)
	{
		alert ('Username max length is 10');
        return false;
	}
	else
	{				                            
        alert('Congratulations');
		window.location = "index.html"; 
	}
}


function validatesignin()
{

	let uname= document.getElementById("f1").value;
	let pwd= document.getElementById("f2").value;			
	

	
	if(uname=='')
	{
		alert('Please enter the user name.');
        return false;
	}
	
	else if(pwd=='')
	{
		alert('Please enter Password');
        return false;
	}
	else if(document.getElementById("f2").value.length < 4)
	{
		alert ('Password minimum length is 4');
        return false;
	}
	else if(document.getElementById("f2").value.length > 30)
	{
		alert ('Password max length is 30');
        return false;
	}
	else if(document.getElementById("f3").value.length < 6)
	{
		alert ('Username minimum length is 6');
        return false;
	}
	else if(document.getElementById("f3").value.length > 10)
	{
		alert ('Username max length is 10');
        return false;
	}
	else
	{				                            
        alert('Welcome Back');
		window.location = "index.html"; 
	}
}