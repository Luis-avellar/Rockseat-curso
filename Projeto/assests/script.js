function toggleMode() {
    const html = document.documentElement
    const img = document.querySelector('#profile img')
    html.classList.toggle('ligth')
    
    if(html.classList.contains('ligth')){
        img.setAttribute('src', '../assests/imagens/avatar-ligth.png')
        img.setAttribute('alt', 'Imagem de luis sorrindo usando óculos escuro em um dia de som quente.')
    }else {
        img.setAttribute('src', '../assests/imagens/Avatar.png')
        img.setAttribute('alt', 'Foto de Luis Avellar, sem sorrir, usando óculos escuro e boné com o fundo cinza.')
    }
}