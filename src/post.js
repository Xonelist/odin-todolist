class PostToDo {
    constructor(title, description, priority){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.content = [];
    }

    addContent(type, content, priority) {
        switch(type) {
            case 'list':
                this.content.push(new PostList(content, priority));
                break;
        }
    }

    getContent() {
        return this.content;
    }

    printPost() {
          
    }
}

class PostList {
    constructor(content, priority) {
        this.content = content;
        this.priority = priority;
        this.elem = 'li';
        this.type = 'list';
    }

    printPost() {

    }
}

class PostCheck {
    constructor(content, priority) {
        this.content = content;
        this.priority = priority;
        this.elem = 'checkbox';
        this.type = 'check'
    }

    printPost() {

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