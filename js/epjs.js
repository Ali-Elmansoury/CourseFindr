function validateform()
{

	let fname= document.getElementById("f1").value;
	let lname= document.getElementById("f2").value;
    let email= document.getElementById("f4").value;
    		
		
    
	let letters = /^[A-Za-z]+$/;
	let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(fname=='')
	{
		alert('Please enter your first name');
        return false;
	}
	else if(!letters.test(fname))
	{
		alert('Name field required only alphabet characters');
        return false;
	}
	else if(lname=='')
	{
		alert('Please enter your last name');
        return false;
	}
	else if(!letters.test(lname))
	{
		alert('Name field required only alphabet characters');
        return false;
	}
	else if(email=='')
	{
		alert('Please enter your user email id');
        return false;
	}
	else if (!filter.test(email))
	{
		alert('Invalid email');
        return false;
	}
}
