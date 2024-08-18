var socket = io()

// document.getElementById('chatBox').addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         send();  
//     }
// });

socket.on('recieve', function(data){
    const chatBox = document.getElementById('chatBox')
    console.log(data)

    const messageDiv = document.createElement('div')
    messageDiv.className = 'message'
    messageDiv.innerText = `${data.name} : ${data.message}`

    chatBox.insertBefore(messageDiv, chatBox.firstChild)
})

function send(){ 
    var message = document.getElementById('test').value

    if(message==='') return

    document.getElementById('test').value = ''

    socket.emit('send',{message: message})
}


socket.on('connect', function(){
    console.log('connected');
            
        
    const name = localStorage.getItem('username');
    if(name){
        socket.emit('newUser', name);
    }
})

