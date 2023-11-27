class ProjectsToDo {
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.project = [];
    }

    addProject(type, project) {
        switch(type) {
            case 'list':
                this.project.push(new content());
                break;
        }
    }

    getProject() {
        return this.project;
    }
}

class content {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        this.content = []
    }

    addContent(content, type) {
        this.content.push(new toDo(type, content));
    }
}

class toDo {
    constructor(type, content) {
        this.content = content;
        this.type = type;
    }
}

class CollectionPost {
    constructor(cards) {
        this.cards = cards;
    }
    /* 
        Cards structure
        {
            CardName : {
                CardTitle : CardTitle,
                CardDescription : CardDescription,
                Content : [
                    {type: type, content: content},
                    {...},
                    {type: type, content: content}
                ]
            }
        }
    */
    addCard() {

    }
    
    printCards() {
        for (let len in this.cards) {
            const div = document.createElement('div');
            div.className = 'card';
            div.innerHTML = `<h1>${this.cards[len]['title']}</h1><p>${this.cards[len]['description']}</p>`;
            console.log(div)
            if (this.cards[len]['content'].length !== 0) {
                const ol = document.createElement('ol')
                for (let len1 in this.cards[len]['content']) {
                    const li = document.createElement('li')
                    li.textContent = this.cards[len]['content'][len1].content;
                    ol.appendChild(li);
                }
                div.appendChild(ol);
                document.querySelector('.cards-collections').appendChild(div);
            } else {
                console.log('there is no content here');
            }

        }
    }
}

//export { postToDo }