
class DOMProject {
    constructor() {
        this.myProject = {}
    }

    addMain(title, description) {
        this.myProject[title] = new ProjectsToDo(title, description);
    }

    saveDOM() {
        localStorage.setItem('save', JSON.stringify(this.myProject))
    }

    getForm() {
        const form = document.forms['getMainProject'];
        
        //check if there is already same title in main project, if true alert, otherwise create class ProjectToDo
        !this.myProject.hasOwnProperty(form['project-title'].value) ? this.addMain(form['project-title'].value, form['project-desc'].value) : alert(`Project with the title \`${form['project-title'].value}\` has exist`);
        this.saveDOM();
        form.reset();
    }

    navProject() {
        const nav = document.querySelector('.collection-main-project');
        nav.textContent = '';
        for (let obj in this.myProject) {
            const h3 = document.createElement('h3');
            h3.className = 'collection';
            h3.textContent = obj;
            h3.dataset.id = obj;
            
            h3.addEventListener('click', ()=> {
                this.myProject[obj].printShowCollection();
            })
            nav.appendChild(h3);
        }
    }
}

class ProjectsToDo {
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.project = [];
    }

    addProject(project) {
        this.project.push({title: new Project(project)});
    }

    printShowCollection() {
        const showCollection = document.querySelector('.show-template');
        
        const div = document.createElement('div');
        const title = document.createElement('h1');
        const desc = document.createElement('p');

        title.textContent = this.title;
        desc.textContent = this.description;

        div.appendChild(title);
        div.appendChild(desc);
        
        showCollection.textContent = '';
        showCollection.appendChild(div);
    }
}

class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        this.content = [];
        
    }

    addContent(content, type) {
        this.content.push(new toDo(type, content, this.content.length+1));
    }
}

class toDo {
    constructor(type, content, id) {
        this.id = id;
        this.content = content;
        this.type = type;
        this.priority = false;
    }
}

export { DOMProject }