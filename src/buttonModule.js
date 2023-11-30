function buttonSubmit(LocalStore) {
    document.getElementById('getMainProject').addEventListener('submit', (event) => {
        const form = document.forms['getMainProject']
        
        event.preventDefault();
        LocalStore.addProject(form['project-title'].value, form['project-desc'].value);
        LocalStore.show();
        form.reset()
        document.getElementById('main-dialog').close()
    })

    document.getElementById('getSubProject').addEventListener('submit', (event)=> {
        event.preventDefault()
        const form = document.forms['getSubProject'];
        const path = document.querySelector('.show-subproject');
        console.log(form)
        
        LocalStore.myProject[path.id].addSubProject(form['subproject-title'].value);
        console.log(LocalStore.myProject)
        console.log(LocalStore.myProject[path.id]);
        
        LocalStore.update(path.id);
        form.reset()
        document.getElementById('sub-dialog').close()
        
    })
}

export {buttonSubmit}