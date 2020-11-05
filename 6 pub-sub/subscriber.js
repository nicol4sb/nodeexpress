const messaging = require('./messaging-api');

const TOPIC_ID = process.env.TOPIC_ID;

function displayMessage(message){
    console.log(`> ${message.name} : ${message.text}`);
}

function streamMessages(){
    const messagingSocket = messaging.subscribe(TOPIC_ID);

    messagingSocket.on('message',(data)=>{
        const message = JSON.parse(data);
        displayMessage(message);
    });
}

streamMessages();