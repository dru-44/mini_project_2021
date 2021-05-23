
       
 //var uid = firebase.auth().currentUser.uid;
        
        // var dbBloges= firebase.database().ref().child("Users");
        // dbBloges.on("value",function(blogs){
        //     if(blogs.exists()){
        //         var userHtml="";
        //         blogs.forEach(function(singleblog){
        //             counter=counter+1;
        //             userHtml+="<div class='row'>";
        //             userHtml+="<div class='col-sm-5'><p style='color:grey';>"
        //                 + "Name:"+blogs.val().username
        //                 +"</p></div>";
        //             userHtml+="</div>";    
        //         });
        //         $("#blogs").html(userHtml);
        //     }
        // });
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                getUserData(user.uid)
            }
        })
        
        function getUserData(uid) {
            firebase.database().ref('Users/' + uid).once("value", snap => {
                var userHtml="";
                var emailHtml="";
                var fnameHtml="";
                var lnameHtml="";
                var addressHtml="";
                var cityHtml="";
                var countryHtml="";
                var codeHtml="";
                var aboutHtml="";



                userHtml+=snap.val().username;
               
                emailHtml+=snap.val().email;
                fnameHtml+=snap.val().firstname;
                lnameHtml+=snap.val().lastname;
                addressHtml+=snap.val().address;
                cityHtml+=snap.val().city;
                countryHtml+=snap.val().country;
                codeHtml+=snap.val().pcode;
                aboutHtml+=snap.val().about;
                
                console.log(snap.val())
                $("#blogs").html(userHtml)  
                $("#blogs-1").html(userHtml)
                $("#op-email").html(emailHtml)
                $("#op-firstname").html(fnameHtml)
                $("#op-lastname").html(lnameHtml)
                $("#op-address").html(addressHtml)
                $("#op-city").html(cityHtml)
                $("#op-country").html(countryHtml)
                $("#op-code").html(codeHtml)
                $("#op-about").html(aboutHtml)
                
                
            })
        }


        
//         var starCountRef = firebase.database().ref('Users');
//         starCountRef.on('value', (snapshot) => {
//     const data = snapshot.val();
//     var userHtml="";
//     userHtml+="<div class='col-sm-5'><p style='color:grey';>"
//                         + "Name:"+data
//                         +"</p></div>";
//   });
