let divJs =document.getElementById('testeJS')

let sectionContent = new Container('Teste')
sectionContent.addItem('olá', 'mundo')

divJs.appendChild(sectionContent.getContainer())