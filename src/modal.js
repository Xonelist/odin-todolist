function createMainModal() {
    const dialog = document.createElement('dialog');
    const close = document.createElement('span');
    const form = document.createElement('form');
    

    //make Close button
    close.className = 'btn-span';
    close.textContent = "X";
    close.addEventListener('click', ()=> dialog.close());

    //make dialog attribute
    dialog.className = 'main-dialog';

    //form structure
    const div = document.createElement('div');
    const submit = document.createElement('button');

    form.action = '';
    form.method = 'post';
    form.id = 'getMainProject';
    form.name = 'getMainProject';
    div.className = 'form-input';
    
    //input,label, submit attribute
    const formlist = [
        {
            'inputType': 'text',
            'inputId': 'project-title',
            'labelContent': 'Create New Main Project',
        },{
            'inputType': 'text',
            'inputId': 'project-desc',
            'labelContent': 'New Project Description'
        }   
    ]
    formlist.forEach((list) => {
        const input = document.createElement('input');
        const label = document.createElement('label');

        input.type = list['inputType'];
        input.id = list['inputId'];
        input.name = list['inputId'];
        input.required = true;

        label.setAttribute('for', list['inputId']);
        label.textContent = list['labelContent'];

        div.appendChild(label);
        div.appendChild(input);
    })

    submit.type = 'submit';
    submit.id = "main-btn-submit";
    submit.textContent = "Add Main Project";
    
    //append to form
    form.appendChild(div);
    form.appendChild(submit);

    dialog.appendChild(close);
    dialog.appendChild(form);

    document.body.append(dialog)
}

export { createMainModal }