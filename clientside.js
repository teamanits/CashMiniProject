function loadLogin () {
    // Check if the user is already logged in
    //console.log("her");
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            document.write(this.responseText);
        }
    };

    request.open('GET', 'http://localhost:3000/check-login', true);
    request.send();
}

function loadVerifiedLogin () {
    // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            document.write(this.responseText);
                  }
    };

    request.open('GET', 'http://localhost:3000/check-verified-login', true);
    request.send();
}


function validateEmail(username,password)
{
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  if (reg.test(username.value) == false)
  {
        alert("enter valid email only..");
        username.value="";
        password.value="";
        return false;
  }
  return true;
}

 function loggingUser() {
    // Create a request object
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          // Take some action
          if (request.status === 200) {
              //submit.value = 'Sucess!';
              document.write(this.responseText);
              document.close();
          }
          else
          {
            if (request.status === 403)
              alert("Invalid credentials");
            else if (request.status === 500)
              alert('Something went wrong on the server');

          else

              alert('Something went wrong on the server');

            username.value="";
            password.value="";
        }
      }
      // Not done yet
    };

    // Make the request
    var username = document.getElementById('login-username');
    var password = document.getElementById('login-password');
    console.log(username);
    console.log(password);
    if(username.value.length==0||password.value.length==0)
    {
      alert("Enter login details:");
      username.value="";
      password.value="";
    }else {
      var ret=validateEmail(username,password);
      if(ret)
      {
        request.open('POST','http://localhost:3000/loginuser', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username.value, password: password.value}));
    }
  }

}

function verifiedUser() {
   // Create a request object
   //loadVerifiedLogin();
   var request = new XMLHttpRequest();
   request.onreadystatechange = function () {
     if (request.readyState === XMLHttpRequest.DONE) {
         // Take some action
         if (request.status === 200) {
             //submit.value = 'Sucess!';
             document.write(this.responseText);
             document.close();
         }
         else
         {
           if (request.status === 403)
             alert("Invalid credentials");
           else if (request.status === 500)
             alert('Something went wrong on the server');

         else

             alert('Something went wrong on the server');

           username.value="";
           password.value="";
       }
     }
     // Not done yet
   };

   // Make the request
   var username = document.getElementById('uname');
   var password = document.getElementById('psw');
   if(username.value.length==0||password.value.length==0)
   {
     alert("Enter login details:");
     username.value="";
     password.value="";
   }else {
     var ret=validateEmail(username,password);
     if(ret){
       request.open('POST','http://localhost:3000/loginverifieduser', true);
       request.setRequestHeader('Content-Type', 'application/json');
       request.send(JSON.stringify({username: username.value, password: password.value}));
     }
 }

}
function registeringUser() {
        // Create a request object
        var request = new XMLHttpRequest();

        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  document.write(this.responseText);
                  document.close();
              } else {
                  alert('Could not register the user');
                  fullname='';
                  password='';
                  email='';
              }
          }
        };

        var fullname = document.getElementById('fullname');
        var email = document.getElementById('email');
        var password = document.getElementById('login-password');
      //  console.log(username);
        //console.log(password);
        if(fullname.value.length==0||password.value.length==0||email.value.length==0)
        {
          alert("Enter login details:");
          fullname.value="";
          password.value="";
          email.value="";

        }
        else if(validateEmail(email,password)==false)

          fullname.value="";

        else if(password.value.length<6 &&password.value.length>15)
        {
          alert('password must be atleast 6 characters and atmost 15 characters');
          fullname.value="";
          password.value=="";
          email.value="";
        }
      else{
        console.log("sending request");
        request.open('POST', 'http://localhost:3000/registeruser', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({fullname: fullname.value,email:email.value,password: password.value}));
        //register.value = 'Registering...';
      }

    }
//loadLogin()
