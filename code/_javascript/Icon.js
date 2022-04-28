class IconCreator{
    static createIcon(iconURL, colorClass){
        let icon = document.createElement('span')
        icon.classList.add('iconify', 'icon-default')
        icon.setAttribute('data-icon', iconURL)

        if(colorClass !== undefined && colorClass !== null){
            icon.classList.add(colorClass)
        }

        return icon
    }
}