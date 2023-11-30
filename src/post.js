
class LocalStore {
    constructor() {
        this.myProject = {}
    }

    addProject(title, description) {
        this.myProject.hasOwnProperty(title) ? alert(`Your project \`${title}\` has exist in database`):this.myProject[title] = new Project(title, description);
    }

    saveStore() {
        localStorage.setItem('save', JSON.stringify(this.myProject))
    }

    loadStore() {
        return JSON.parse(localStorage.getItem('save'));
    }

    getForm() {
        const form = document.forms['getMainProject'];
        //check if there is already same title in main project, if true alert, otherwise create class ProjectToDo
        !this.myProject.hasOwnProperty(form['project-title'].value) ? this.addProject(form['project-title'].value, form['project-desc'].value) : alert(`Project with the title \`${form['project-title'].value}\` has exist`);
        this.saveDOM();
        form.reset();
    }

    //print every Project in myProject inside nav;
    show() {
        const nav = document.querySelector('.collection-main-project');
        nav.textContent = '';
        for (let obj in this.myProject) {
            const h3 = document.createElement('h3');
            h3.className = 'collection';
            h3.textContent = obj;
            h3.dataset.id = obj;
            
            h3.addEventListener('click', ()=> {
                this.update(obj);
            })

            nav.appendChild(h3);
        }
    }

    update(projectTitle) {
        this.updateCollection(projectTitle);
        if (Object.keys(this.myProject[projectTitle].subproject).length !== 0) {
            for (let subproject in this.myProject[projectTitle].subproject) {
                console.log(subproject);
                this.updateSubproject(subproject);
            }
            
        }    
    }

    updateCollection(target) {
        const showCollection = document.querySelector('.show-template');
        
        const div = document.createElement('div');
        const title = document.createElement('h1');
        const desc = document.createElement('p');
        const addSub = document.createElement('p');
        const addSubDiv = document.createElement('div')
        const subProjectDiv = document.createElement('div');

        title.textContent = this.myProject[target].title;
        desc.textContent = this.myProject[target].description;

        addSubDiv.className = 'main-border'
        addSub.textContent = 'Add new Sub Project';
        addSub.id = 'add-sub';
        addSubDiv.appendChild(addSub);
        subProjectDiv.className = 'show-subproject';
        subProjectDiv.id = this.myProject[target].title;

        addSub.addEventListener('click', ()=> {
            document.getElementById('sub-dialog').showModal();
        })

        div.appendChild(title);
        div.appendChild(desc);
        div.appendChild(addSubDiv);
        div.appendChild(subProjectDiv)

        showCollection.textContent = '';
        showCollection.appendChild(div);
    }

    updateSubproject(ProjectTitle) {
        const showSubproject = document.querySelector('.show-subproject');

        const div = document.createElement('div');
        const divEdit = document.createElement('div');
        const subproject = document.createElement('h3');
        const addContent = document.createElement('h3');
        const rmvContent = document.createElement('h3');
        subproject.textContent = ProjectTitle;
        addContent.className = 'add-ctn';
        addContent.textContent = `+`;
        rmvContent.className = 'rmv-ctn';
        rmvContent.textContent = `-`;
        divEdit.className = 'edit-btn';
        divEdit.appendChild(addContent)
        divEdit.appendChild(rmvContent)
        div.className = 'sub-border'
        div.appendChild(subproject);
        div.appendChild(divEdit);
        showSubproject.appendChild(div);
        showSubproject.appendChild(div);

    }
}

class Project {
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.subproject = {};
    }

    addSubProject(subProjectTitle) {
        this.subproject[subProjectTitle] = new SubProject(subProjectTitle);
    }

}

class SubProject {
    constructor(subProjectTitle) {
        this.subProjectTitle = subProjectTitle;
        this.content = [];
        
    }

    addContent(content, type) {
        this.content.push(new Content(type, content));
    }
}

class Content {
    constructor(type, content, id) {
        this.id = id;
        this.content = content;
        this.type = type;
        this.priority = false;
    }
}

export { LocalStore }