class Container{
    constructor(titleText){
        this.titleText = titleText

        this.#initComponents()
        this.#initStyles()
    }

    getContainer(){
        return this.section
    }

    #initComponents(){
        this.section = document.createElement('section')

        this.titlePrincipal = document.createElement('h2')
        this.titlePrincipal.innerHTML = this.titleText

        this.containerList = document.createElement('div')
        this.list = document.createElement('ul')

        this.section.appendChild(this.titlePrincipal)
        this.section.appendChild(this.containerList)
        this.containerList.appendChild(this.list)
    }

    #initStyles(){
        this.section.classList.add('row', 'py-1', 'bg-success')
        this.titlePrincipal.classList.add('h2-default')

        this.containerList.classList.add('container', 'p-0')
        this.list.classList.add('ul-default', 'row', 'p-0')
    }

    addItem(title, description, isIntern){
        if(description !== undefined){
            this.list.appendChild(this.#createItemComplete(title, description, isIntern))
        }else{
            this.list.appendChild(this.#createItemSimple(title))
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