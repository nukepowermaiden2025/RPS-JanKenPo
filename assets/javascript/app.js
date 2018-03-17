var config = {
    apiKey: "AIzaSyC4aihg6-fH1JwzvoaupLHdeTA320Semow",
    authDomain: "jan-ken-po-3da4a.firebaseapp.com",
    databaseURL: "https://jan-ken-po-3da4a.firebaseio.com",
    projectId: "jan-ken-po-3da4a",
    storageBucket: "jan-ken-po-3da4a.appspot.com",
    messagingSenderId: "280445464588"
  };
  firebase.initializeApp(config);

// TEST Connection to Firebase
  var database = firebase.database();

  var count =0;

  $(document).on("click","#count-btn",function(){
    count++;
    console.log("Clicked it");
    //set the reference to the database
    database.ref().set({
        counter: count
    });
  })


//This a game to make rock paper scissors
//Two players login from one form
    //Will need toggle between player one and player two

//Each player can log in
//Player object will auto create
//Each player can see whose turn it is
//Each player will see who wins and looses
//Each player will NOT see the other persons guess
//Need to reset
//When player disconnects the message that they left
//There is a textbox so that players can talk to each other


