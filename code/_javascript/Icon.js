class IconCreator{
    static createIcon(iconURL, iconStyle){
        let icon = document.createElement('span')
        icon.classList.add('iconify')
        icon.setAttribute('data-icon', iconURL)

        if(iconStyle !== undefined && iconStyle !== null){
            icon.classList.add(iconStyle)
        }

        return icon
    }
}