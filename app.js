
let btnE = document.getElementById('btn-e')
let btnD = document.getElementById('btn-d')

let btnCopy = document.getElementById('btn-copy')

let inText = document.getElementById('in-texto')
let rText = document.getElementById('out-texto')

let predeterminado = document.getElementById('predeterminado')
let resultado = document.getElementById('resultado')

const rules = {
    e : 'enter',
    i : 'imes',
    a : 'ai',
    o : 'ober',
    u : 'ufat',
}

const validateInput = (text) => {
    let regex = /^[a-zA-Z\s]+$/
    return regex.test(text)
}

const encrypt = (text) => {
    let newText = ''
    for (const r in rules) { 
        newText = text.replaceAll(r, rules[r])
        text = newText
    }
    return newText
}

const dencrypt = (text) => {
    let newText = ''
    for (const r in rules) { 
        newText = text.replaceAll(rules[r], r)
        text = newText
    }
    return newText
}


btnE.addEventListener('click', () => {
    if (!validateInput(inText.value)) return alert('El formato no acepta caracteres especiales.')
    rText.innerHTML = encrypt(inText.value)

    btnE.classList.add('active')
    btnD.classList.remove('active')
    predeterminado.style.display = 'none'
    resultado.style.display = 'block'
})


btnD.addEventListener('click', () => {
    if (!validateInput(inText.value)) return alert('El formato no acepta caracteres especiales.')
    rText.innerHTML = dencrypt(inText.value)

    btnD.classList.add('active')
    btnE.classList.remove('active')
    predeterminado.style.display = 'none'
    resultado.style.display = 'block'
})

btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(rText.innerText)
})





























