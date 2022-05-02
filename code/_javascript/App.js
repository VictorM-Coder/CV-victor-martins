const ajax = new XMLHttpRequest()
ajax.open('GET', 'http://localhost:3000/section')

ajax.onreadystatechange = () => {
    if(ajax.readyState == 4 && ajax.status == 200){
        let section = JSON.parse(ajax.responseText)
        for (const index in section) {
            let container = new Container(section[index])
            for (const index1 in section[index].items) {
                container.addItem(section[index].items[index1])
            }
            document.getElementById('section' + index).appendChild(container.getContainer())
        }
    }
}

ajax.send()

let addressContatos = new ContainerFooter()
addressContatos.addItem('github', 'mdi:github', '')
addressContatos.addItem('linkedin', 'mdi:linkedin', '')
addressContatos.addItem('e-mail', 'mdi:email', '')
addressContatos.addItem('instagram', 'mdi:instagram', '')
document.getElementById('contatos').appendChild(addressContatos.getContainer())