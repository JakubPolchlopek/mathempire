const btn = document.querySelector('.button-nauka')

const box_dzialy = document.querySelector('.box-dzialy')
const sectionsContainer = document.querySelector('.dzialy')
const polishCharMap = {
    'ą' : 'a',
    'ć' : 'c',
    'ę' : 'e',
    'ł' : 'l',
    'ń' : 'n',
    'ó' : 'o',
    'ś' : 's',
    'ź' : 'z',
    'ż' : 'z'
}

function btnOperations() {
    box_dzialy.classList.toggle('non-active')
}

btn.addEventListener('click', btnOperations)

const sections = ['Liczby', 'Ułamki', 'Pierwiastki i potęgi', 'Procenty', 'Algebra', 'Geometria płaska', 'Geometria przestrzenna', 'Elementy statystyki opisowej', 'Zadania tekstowe', 'Przekształcenia wzorów', 'Ważne wzory']

const changedName = (name) => {
    const nameWOutSpace = name.toLowerCase().replace(/ /g, '_').replace(/[ąćęłńóśźż]/g, znak=>polishCharMap[znak])
    return nameWOutSpace
}

const createSection = (section) => {
    const sectionDiv = document.createElement('div')
    sectionDiv.classList.add('dzial', changedName(section))
    sectionDiv.textContent = section
    sectionsContainer.appendChild(sectionDiv)
}

const fun = (e) => {
    if(e.target.classList[0] == 'dzial'){
        const link = `podstrony/nauka/${e.target.classList[1]}.html`
        window.open(link, '_blank')
    }
}

sectionsContainer.addEventListener('click', fun)
sections.forEach(createSection)