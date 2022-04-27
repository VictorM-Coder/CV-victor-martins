class IconCreator{
    static createIcon(iconURL){
        let icon = document.createElement('span')
        icon.classList.add('iconify', 'icon-default')
        icon.setAttribute('data-icon', iconURL)

        return icon
    }
}