// Chamando a tag que representa o botão de ir pro topo
const topo = document.getElementById('topo')

// Adicionando os eventos
topo.addEventListener("click", function(){
    window.scrollTo(0, 0)
})

document.addEventListener('scroll', ocultar)

// Aplicando a função de ocultar
function ocultar() {
    
    if (window.scrollY > 1000) {
        topo.style.display = 'flex'
    } else {
        topo.style.display = 'none'
    }

    // Para telas menores
    if (window.innerWidth < 1200 && window.scrollY > 5000) {
        topo.style.display = 'none'
    }
    
}

ocultar()