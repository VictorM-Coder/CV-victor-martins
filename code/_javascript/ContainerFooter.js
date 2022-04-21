class ContainerFooter{

    constructor(){
        this.#initComponents()
        this.#initStyles()
    }

    getContainer(){
        return this.container
    }
    
    #initComponents(){
        this.container = document.createElement('address')
        this.row = document.createElement('div')

        this.container.appendChild(this.row)
    }

    #initStyles(){
        this.container.classList.add('container')
        this.row.classList.add('row')
    }

    addItem(name, iconURL, URL){
        let item = document.createElement('div')
        let link = document.createElement('a')
        let icon = document.createElement('span')
        let text = document.createElement('span')

        item.classList.add('col-12', 'col-lg-3', 'pb-1')

        link.classList.add('link-default')
        link.href = URL

        icon.classList.add('iconify', 'icon-default')
        icon.setAttribute('data-icon', iconURL)

        text.classList.add('btn-text')
        text.innerText = name

        item.appendChild(link)
        link.appendChild(icon)
        link.appendChild(text)

        this.row.appendChild(item)
    }
}