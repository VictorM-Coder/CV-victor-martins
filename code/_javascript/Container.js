class Container{
    constructor(section){
        this.titleText = section.title

        this.#initComponents(section.iconURL)
        this.#initStyles()
    }

    getContainer(){
        return this.section
    }

    #initComponents(iconURL){
        this.section = document.createElement('section')
        this.adjustDiv = document.createElement('div')

        this.head = document.createElement('div')

        this.titlePrincipal = document.createElement('h2')
        this.titlePrincipal.innerHTML = this.titleText

        this.containerList = document.createElement('div')
        this.list = document.createElement('ul')

        //Content Appends
        this.section.appendChild(this.adjustDiv)
        this.adjustDiv.appendChild(this.head)
        this.head.appendChild(this.titlePrincipal)
        this.adjustDiv.appendChild(this.containerList)
        this.containerList.appendChild(this.list)

        //Add Icon
        this.head.appendChild(IconCreator.createIcon(iconURL, 'decoration-color'))
    }

    #initStyles(){
        this.section.classList.add('row', 'bg-container', 'border-default', 'shadow-default', 'h-100')
        this.adjustDiv.classList.add('p-0')
        this.head.classList.add('pt-1', 'px-1', 'd-flex', 'justify-content-between')
        this.titlePrincipal.classList.add('h2-default')

        this.containerList.classList.add('container', 'p-0')
        this.list.classList.add('ul-default', 'row', 'p-0')
    }

    addItem(item){
        if(item.description !== undefined){
            this.list.appendChild(this.#createItemComplete(item.title, item.description, item.isIntern))
        }else{
            this.list.appendChild(this.#createItemSimple(item.title))
        }
    }

    #createItemComplete(title, description, isIntern){
        let item = document.createElement('li')
        let itemTitle = document.createElement('p')
        let itemDescription = document.createElement('p')

        itemTitle.innerHTML = title
        itemDescription.innerHTML = description

        itemTitle.classList.add('li-default')
        itemDescription.classList.add('text-default')

        item.classList.add('col-12', 'col-sm-6')

        if(isIntern !== undefined && isIntern === true){
            item.classList.add('col-lg-12')
        }else{
            item.classList.add('col-lg-4')
        }
        

        item.appendChild(itemTitle)
        item.appendChild(itemDescription)

        return item
    }

    #createItemSimple(text){
        let item = document.createElement('li')
        let itemText = document.createElement('p')

        itemText.innerHTML = text

        item.classList.add('col-lg-4')
        itemText.classList.add('text-default')

        item.appendChild(itemText)

        return item
    }
}