function createMainModal() {
    
    const dialog = document.createElement('dialog');
    const close = document.createElement('span');    

    //make Close button
    close.className = 'btn-span';
    close.textContent = "X";
    close.addEventListener('click', ()=> dialog.close());

    //make dialog attribute
    dialog.id = 'main-dialog';

    //create Form
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
    ];
    const submitList = {
        'id': 'main-btn-submit',
        'content': 'Add Main Project',
    };
    const form = createForm('getMainProject', formlist, submitList);

    dialog.appendChild(close);
    dialog.appendChild(form);

    document.body.append(dialog)
}

function createSubModal() {
    const dialog = document.createElement('dialog');
    const close = document.createElement('span');
    const form = document.createElement('form');


}
function createDialog(id) {

}
function createForm(id, formlist, submitList) {
    //form structure
    const form = document.createElement('form');
    const div = document.createElement('div');
    const submit = document.createElement('button');

    form.action = '';
    form.method = 'post';
    form.id = id;
    form.name = id;
    div.className = 'form-input';

    //input,label, submit attribute
    formlist.forEach((list) => {
        const input = document.createElement('input');
        const label = document.createElement('label');

        input.type = list['inputType'];
        input.id = list['inputId'];
        input.name = list['inputId'];
        input.required = true;

        label.setAttribute('for', list['inputId']);
        label.textContent = list['labelContent'];

        //append to form
        div.appendChild(label);
        div.appendChild(input);
    })

    submit.type = 'submit';
    submit.id = submitList['id'];
    submit.textContent = submitList['content'];

    form.appendChild(div);
    form.appendChild(submit);

    return form;
}
export { createMainModal }