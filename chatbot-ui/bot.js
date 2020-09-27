/* Execute show function*/
show();

// This function will show the message from the bot side.

function show(){
	//ch1.scrollTop = ch1.scrollHeight;
	let face;
	let element;
	
	face = document.createElement('div');
	face.className = "bot-face";
	face.innerHTML = 'Bot';


	element = document.createElement('div');
	element.className = "bot-chat";
	element.innerHTML = "Hello..! How may i help you?";

	//console.log(document.getElementsByClassName("user-chat")[0]);
	
	document.getElementsByClassName('chatbot-screen')[0].appendChild(face);
	document.getElementsByClassName('chatbot-screen')[0].appendChild(element);
}


// This function take the user input from the input tagg and set the input tag blank and execute the user_msg() function.

function send_msg(msg){

	var m = msg;
	document.getElementsByTagName("input")[0].value = ""

	user_msg(m);
}



// This function will add the message written by the user in the chatbot screen.

function user_msg(msg){
	
	let face;
	let element;
	
	face = document.createElement('div');
	face.className = "user-face";
	face.innerHTML = 'you';


	element = document.createElement('div');
	element.className = "user-chat";
	element.innerHTML = msg;

	//console.log(document.getElementsByClassName("user-chat")[0]);
	
	document.getElementsByClassName('chatbot-screen')[0].appendChild(face);
	document.getElementsByClassName('chatbot-screen')[0].appendChild(element);
}
