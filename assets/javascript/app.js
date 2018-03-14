var config = {
    apiKey: "AIzaSyC4aihg6-fH1JwzvoaupLHdeTA320Semow",
    authDomain: "jan-ken-po-3da4a.firebaseapp.com",
    databaseURL: "https://jan-ken-po-3da4a.firebaseio.com",
    projectId: "jan-ken-po-3da4a",
    storageBucket: "jan-ken-po-3da4a.appspot.com",
    messagingSenderId: "280445464588"
  };
  firebase.initializeApp(config);


  var database = firebase.database();

  var count =0;

  $(document).on("click",".count-btn",function(){
    count++;
    console.log("Clicked it");
    //set the reference to the database
    database.ref().set({
        counter: count
    });
  })

//   $(".count-btn").on("click", function(){
//    ;

//   });