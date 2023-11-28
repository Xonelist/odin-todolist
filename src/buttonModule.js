function addButtonModule(main) {
    const addMainProject = document.querySelector('.btn-add-main');
    const addSubProject = document.querySelector('.btn-add-sub');
    const addContentProject = document.querySelector('.btn-add-ctn');
    const printProject = document.querySelector('.btn-print');

    addMainProject.addEventListener('click', ()=> {
        main.addMain('Saturday', 'Simple things to do to make saturday great day')
    })

    addSubProject.addEventListener('click', ()=> {
        main.myProject[0].addProject('Presentation')
    })

    addContentProject.addEventListener('click', ()=> {
        main.myProject[0].project[0].addContent('list', 'Simple and flexible introduction');
    })

    printProject.addEventListener('click', ()=> {
        main.myProject[0].printCards();
    })
}

export {addButtonModule}
