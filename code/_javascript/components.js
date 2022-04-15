class Container{
    constructor(titleText){
        this.titleText = titleText

        this.initComponents()
        this.initStyles()
    }

    getContainer(){
        return this.section
    }

    initComponents(){
        this.section = document.createElement('section')

        this.titlePrincipal = document.createElement('h2')
        this.titlePrincipal.innerHTML = this.titleText

        this.containerList = document.createElement('div')
        this.list = document.createElement('ul')

        this.section.appendChild(this.titlePrincipal)
        this.section.appendChild(this.containerList)
        this.containerList.appendChild(this.list)
    }

    initStyles(){
        this.section.classList.add('row', 'mt-3', 'py-1')
        this.titlePrincipal.classList.add('h2-default')

        this.containerList.classList.add('container', 'p-0')
        this.list.classList.add('ul-default', 'row', 'p-0')
    }

    addItem(title, desription){
        this.list.appendChild(this.#createItem(title, desription))
    }

    #createItem(title, description){
        let item = document.createElement('li')
        let itemTitle = document.createElement('p')
        let itemDescription = document.createElement('p')

        itemTitle.innerHTML = title
        itemDescription.innerHTML = description

        itemTitle.classList.add('li-default')
        itemDescription.classList.add('text-default')
        item.classList.add('col-12', 'col-sm-6', 'col-lg-4')

        item.appendChild(itemTitle)
        item.appendChild(itemDescription)

        return item
    }
}