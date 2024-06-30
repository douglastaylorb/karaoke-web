let modal = document.querySelector('.modal-content')

document.querySelector('#nomeVideo').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buscarVideo()
    }
})
function buscarVideo() {
    const nomeVideo = document.querySelector('#nomeVideo').value
    const video = document.querySelector('#meuVideo')
     
    let containerVideo = document.querySelector('#containerVideo')
    let erro = document.querySelector('.error')

    video.src = `musicas/${nomeVideo}.mp4`

    video.addEventListener('error', () => {
        if (video.error.code === 4) {
            containerVideo.style.display = 'none'
            erro.innerHTML = '<p>Vídeo não encontrado!</p>'
        } else {
            console.error('Erro ao carregar o vídeo:', video.error.message)
        }
    })

    video.onloadedmetadata = function() {
            containerVideo.style.display = 'block'
            erro.innerHTML = ''
            video.play()
            video.requestFullscreen()
    }
    
    function gerarNota() {
        const min = 85;
        const max = 99;
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    video.onended = function() {
        document.exitFullscreen()
        
  
        let nota = gerarNota()
        
        document.querySelector('.modal-content').style.display = 'flex'

        if (nota >= 85 && nota <= 90) {    
            setTimeout(() => {
                modal.innerHTML = `<div class="modal-content--titulo"><h2>Muito Bem! 😊</h2></div>
                <div class="modal-content--texto">Você tirou</div>
                <div class="modal-content--pontos">${nota}</div>
                <div class="modal-content--texto"><p>pontos!</p></div>`
            }, 600);
        } else if (nota >= 91 && nota <= 95) {
            setTimeout(() => {
                modal.innerHTML = `<div class="modal-content--titulo"><h2>Arrasou! 😁</h2></div>
                <div class="modal-content--texto">Você tirou</div>
                <div class="modal-content--pontos">${nota}</div>
                <div class="modal-content--texto"><p>pontos!</p></div>`
            }, 600);
            
        } else {
            setTimeout(() => {
                modal.innerHTML = `<div class="modal-content--titulo"><h2>Você é Profissional? 🤩</h2></div>
                <div class="modal-content--texto">Você tirou</div>
                <div class="modal-content--pontos">${nota}</div>
                <div class="modal-content--texto"><p>pontos!</p></div>`
            }, 600);
        }
        
        setTimeout(() => {
            document.querySelector('.modal-content').style.display = 'none'
            window.location.href = 'index.html'
        }, 6000)
    }
}
