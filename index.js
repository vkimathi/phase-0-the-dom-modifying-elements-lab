document.querySelector('main').remove()
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = 'Victor is the champion'
document.body.append(newHeader)