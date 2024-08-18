var socket = io()


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