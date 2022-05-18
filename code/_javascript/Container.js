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
        this.head.appendChild(IconCreator.createIcon(iconURL, 'icon-decoration'))
    }

    #initStyles(){
        this.section.classList.add('row', 'bg-container', 'border-default', 'shadow-default', 'h-100')
        this.adjustDiv.classList.add('p-0')
        this.head.classList.add('p-1', 'd-flex', 'justify-content-between')
        this.titlePrincipal.classList.add('h2-default')

        this.containerList.classList.add('container')
        this.list.classList.add('ul-default', 'row')
    }

    addItem(item){
        if(item.title !== undefined && item.title !== null){
            this.list.appendChild(this.#createItemComplete(item.title, item.description, item.isIntern))
        }else{
            this.list.appendChild(this.#createItemSimple(item.description))
        }
    }

    #createItemComplete(title, description, isIntern){
        let item = document.createElement('li')
        let contentContainer = document.createElement('div')
        let iconContainer = document.createElement('div')
        let itemTitle = document.createElement('span')
        let itemDescription = document.createElement('p')

        itemTitle.innerHTML = title
        itemDescription.innerHTML = description
        iconContainer.appendChild(IconCreator.createIcon('mdi:check-circle-outline', 'icon-list'))

        itemTitle.classList.add('li-default')
        itemDescription.classList.add('text-default', 'm-0')

        item.classList.add('col-12', 'col-sm-6', 'mb-2', 'd-flex')

        if(isIntern !== undefined && isIntern === true){
            item.classList.add('col-lg-12')
        }else{
            item.classList.add('col-lg-4')
        }

        item.appendChild(iconContainer)
        contentContainer.appendChild(itemTitle)
        contentContainer.appendChild(itemDescription)
        item.appendChild(contentContainer)

        return item
    }

    #createItemSimple(text){
        let item = document.createElement('li')
        let itemText = document.createElement('p')

        itemText.innerHTML = text

        item.classList.add('col-lg-4')
        itemText.classList.add('text-default')
        console.log('criado item simples')

        item.appendChild(itemText)

        return item
    }
}