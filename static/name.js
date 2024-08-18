var socket = io()

function onPageLoad() {

    socket.on('connect', function(){
        console.log('connected');
        
       
        const name = localStorage.getItem('username');
        if(name){
            socket.emit('newUser', name);
        }
    });
} //페이지가 새로 로드될때마다 newUser 호출(수정필요)

document.addEventListener('DOMContentLoaded', onPageLoad);


function sendName(){
    
    var name = document.getElementById('inputName').value
    if(name==='') {
        const button = document.getElementById('nameBtn')
        button.classList.remove('shake')
        void button.offsetWidth
        button.classList.add('shake')

        return
    }
    document.getElementById('inputName').value = ''
    localStorage.setItem('username', name)

    setTimeout(() => {
        window.location.href = 'chat.html';
    }, 100)
}