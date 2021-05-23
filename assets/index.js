var firebaseConfig = {
  apiKey: "AIzaSyCqkSMjGeOoS14J4iaXF_TFPWqr33T9A6w",
  authDomain: "breath-c81a6.firebaseapp.com",
  projectId: "breath-c81a6",
  storageBucket: "breath-c81a6.appspot.com",
  messagingSenderId: "914405563919",
  appId: "1:914405563919:web:50e41eabd43e6eaebecd7a",
  measurementId: "G-B0C6M5QVGZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function(){
    var email=$("#email").val();
    var password=$("#password").val();
    if(email !="" && password!= "")
    {
      var result=firebase.auth().signInWithEmailAndPassword(email,password);
    result.catch(function(error){
  var errorCode =error.code;
  var errorMessage=error.message;
  console.log(errorCode);
  window.alert("Message :"+errorMessage);
    });
  }
    else
    {
        window.alert("Please fill out all fields");
    }
});


$("#btn-signup").click(function(){

  var email=$("#semail").val();
  var password=$("#spassword").val();
  var cpassword=$("#confirmpassword").val();


  if(email !="" && password!= "" &&cpassword!= "")
  {
    if(password==cpassword)
    {
      var result=firebase.auth().createUserWithEmailAndPassword(email,password);
      result.catch(function(error){
    var errorCode =error.code;
    var errorMessage=error.message;
    console.log(errorCode);
    window.alert("Message :"+errorMessage);
      });
    }
    else{
      window.alert("password does not match");
    }
}
  else
  {
      window.alert("Please fill out all fields");
  }
});

$("#btn-resetpassword").click(function(){
  var auth=firebase.auth();
  var email=$("#email").val();
  if (email !="") {
      auth.sendPasswordResetEmail(email).then(function(){
          window.alert("Please check your email");
      })
      .catch(function(error){
          var errorCode =error.code;
          var errorMessage=error.message;
          console.log(errorCode);
          window.alert("Message :"+errorMessage);
      });

  }
  else{
      window.alert("Please fill out all fields");
  }
});



$("#btn-logout").click(function(){
  firebase.auth().signOut();
});
var id="";
$("#btn-update").click(function(){

  var firstname=$("#firstname").val();
  var lastname=$("#lastname").val();
  var username=$("#input-username").val();
  var email=$("#input-email").val();
  var address=$("#input-address").val();
  var city=$("#input-city").val();
  var country=$("#input-country").val();
  var pcode=$("#input-postal-code").val();
  var about=$("#input-about").val();
  






  var rootRef = firebase.database().ref().child("Users");
  var userID = firebase.auth().currentUser.uid;
  
  var userRef = rootRef.child(userID);
  if(firstname!=""  && lastname!="" && username!="" && email!="" && address!="" && city!="" && country!="" && pcode!="")
  {
    var userData ={
      "firstname":firstname,
      "lastname":lastname,
      "username":username,
      "email":email,
      "address":address,
      "city":city,
      "country":country,
      "pcode":pcode,
      "about":about,
    };
    userRef.set(userData,function(error)
    {
      if (error) {
        var errorCode =error.code;
          var errorMessage=error.message;
          console.log(errorCode);
          console.log(errorMessage);
          window.alert("Message :"+errorMessage);
        
      }
      else
      {
        window.location.href="home.html";
      }
    });
  }
  else
  {
    window.alert("Please fill out all fields");
  }

});


