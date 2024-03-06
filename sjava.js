function formresult(){
  var fname=document.getElementById('fname').value;
  var mname=document.getElementById('mname').value;
  var lname=document.getElementById('lname').value;
  var num=document.getElementById('num').value;
  var mail=document.getElementById('mail').value;
  var pwd=document.getElementById('pwd').value;
  var cpwd=document.getElementById('cpwd').value;
  var address=document.getElementById('address').value;
  var regx=/^[A-Za-z]+$/;
  var isValid1 = regx.test(document.getElementById("fname").value);
  var isValid2 = regx.test(document.getElementById("mname").value);
  var isValid3 = regx.test(document.getElementById("lname").value);
  var pregx =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var isVal = pregx.test(document.getElementById("pwd").value);

  if (fname=="" || mname=="" || lname==""|| num=="" || mail==""|| pwd=="" || address==""){
    alert("All Fileds Are Mandatory");
    return false;
  }
  else if (!isValid1 || !isValid2 || !isValid3){
    alert("Name Should not contain digits");
    return false;
  }
 else if (isNaN(num)||num.length<10 || num.length>10){
  alert("Phone No should contain 10 digits");
  return false;
}
 else if (!isVal){
  alert("password should contain atleast one number and one special character");
  return false;
}
else if (pwd!=cpwd)
{
  alert("Password Does Not Match");
  return false;
}
else{
  true;
}
}