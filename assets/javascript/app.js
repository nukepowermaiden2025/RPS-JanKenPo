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

  $(document).on("click",".count-btn",function(event){
      event.preventDefault();

    count++;
    console.log("Clicked it");
    //set the reference to the database
    database.ref().set({
        counter: count
    });
  })


//Rest game function

//Render Player Object in Firebase

//Player Message Object
  //Waiting on Player1
  //Waiting on Player2
  //Game is full

// Take input from user form
//Two players login from one form
//Function to take player input
  //Create Player 1 object
    //Name
    //Player id from playerSlot array 1
    //login time
    //score
    
    
  //Create Player 2 object
    //Name
    //Player id from playerSlot array 1
    //login time
    //score

//Set player contraints to two at a time
//Capture the players into an array
//The person who enters there name first will get pushed to based on time captured
  //first position
//The person who enter there name second by the time capture
  //second position
  

// Control the player slot with an array playerSlot=[1,2]
  //if playerSlot.length>1 && < 2 flash waiting on player 2 otherwise flash both messages
  //Assigned player a number once they hit submit and then playerSlot.slice
  //Control the player slot by saying
    //if playerSlot.length = 0
      //flash "game is full message."
    
          

//Turn count
  //player1 turncount
  //player2 turncount
    //if player 1 turncount =0
      //chose an option
    //if player 2 turncount =0
      //chose an option

    


//Each player can log in
//Player object will auto create
//Each player can see whose turn it is
//Each player will see who wins and looses
//Each player will NOT see the other persons guess
//Need to reset
//When player disconnects the message that they left
//There is a textbox so that players can talk to each other


