function openLink(evt, linkName){
    let menuContent = document.getElementsByClassName('menuContent')
    for(let i=0; i<menuContent.length; i++){
        menuContent[i].style.display = 'none';
    }
    let menuLinks = document.getElementsByClassName('menuLink');
    for(let i=0;i<menuLinks.length; i++){
        menuLinks[i].className = menuLinks[i].className.replace('active',' ');
    }
    document.getElementById(linkName).style.display='block';
    evt.currentTarget.className += ' active';
}