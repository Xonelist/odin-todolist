
class DOMProject {
    constructor() {
        this.myProject = []
    }

    addMain(title, description) {
        this.myProject.push(new ProjectsToDo(title, description));
    }
}

class ProjectsToDo {
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.project = [];
    }

    addProject(project) {
        this.project.push(new Project(project));
    }

    getProject() {
        return this.project;
    }

    printTemplate() {
        const div = document.createElement('div');
        const title = document.createElement('h1');
        const desc = document.createElement('p');
        title.textContent = `${this.title}`
        desc.textContent = `${this.description}`
        div.className = 'main-project';
        div.appendChild(title);
        div.appendChild(desc);

        document.querySelector('.show-template').appendChild(div)
        return div;
    }

    printCards() {
        if (this.project.length !== 0) {
            
            const div = this.printTemplate()
            for (let i in this.project) {
                if (this.project[i].printCards()) {
                    div.appendChild(this.project[i].printCards());
                }
            }
            document.querySelector('.show-template').appendChild(div);
            return div;
        }
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

    printCards() {
        const div = document.createElement('div');
        div.className = 'Project-title';
        const title = document.createElement('h2');
        title.textContent = `${this.projectTitle}`;
        div.appendChild(title);
        if (this.content.length !== 0) {
            
            for (let i in this.content) {
                div.appendChild(this.content[i].printCards());
            }
        }
        return div;
    
    }
}

class toDo {
    constructor(type, content, id) {
        this.id = id;
        this.content = content;
        this.type = type;
        this.priority = false;
    }

    printCards() {
        const div = document.createElement('div');
        const chk = document.createElement('input');
        const label = document.createElement('label');
        div.className = `content-${this.id}`;
        chk.type = 'checkbox';
        chk.id = `content-${this.id}`;
        label.textContent = `${this.content}`;
        label.htmlFor = `content-${this.id}`;
        div.appendChild(chk)
        div.appendChild(label)
        return div;
        
    }
}

export { DOMProject }