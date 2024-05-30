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
    
    video.onended = function() {
        document.exitFullscreen()
        window.location.href = 'index.html'
    }
}
