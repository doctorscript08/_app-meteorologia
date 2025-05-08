var hora = new Date().getHours()
const search = document.querySelector('#pesquisar')

if (hora < 12) {
    document.body.style.backgroundImage = "url('./src/assets/images/dia.jpg')"
} else if (hora < 18) {
    document.body.style.backgroundImage = "url('./src/assets/images/tarde.jpg')"
} else {
    document.body.style.backgroundImage = "url('./src/assets/images/noite.jpg')"
}

const buscarCidade = async () => {
    const promiseCidade = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&lang=pt_br&appid=353ba8d3c9de3fac8fe2158b1f438bb7`)
    const result = await promiseCidade.json()

    console.log(result)
    document.querySelector('.pais').innerHTML = result['sys']['country']
    document.querySelector('.cidade').innerHTML = result['name']
    document.querySelector('.temperatura').innerHTML = Math.round(result['main']['temp'])
    document.querySelector('.clima-descricao').innerHTML = result['weather']['0']['description']
    document.querySelector('.icone-clima').innerHTML = result['weather']['0']['icon']
}

search.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        if (search.value.lenght !== 0) {
            buscarCidade()
        }
    }
})