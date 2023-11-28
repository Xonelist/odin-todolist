function createNavBar() {
    const nav = document.createElement('nav');
    nav.className = 'left-tab';
    
    const tabList = {
        'profile': 'profile',
        'settings': 'settings',
        'myProjects': 'My Projects'
    }

    for (let key in tabList) {
        const div = document.createElement('div');
        div.className = `tab ${key}`;
        div.innerHTML = `<h1>${tabList[key]}</h1>`

        nav.appendChild(div);
        
    }

    //sub tab (can be click for active project or add new Main Project)
    const div = document.createElement('div');
    div.className = 'sub-tab myProjects';

    //create header3 for each available project from main Class Obj later
    const h3 = document.createElement('h3');
    h3.id = "btn-add"
    h3.textContent = 'Add new Main Project';

    div.appendChild(h3);
    nav.appendChild(div)
    document.body.appendChild(nav);
}