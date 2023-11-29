import { createMainModal } from "./modal";
import { createNavBar } from "./nav";
import { DOMProject } from "./post";


function main() {
    const store = new DOMProject();
    
    test(store);
    //add button function to add Main Project
    
}

function test(store) {
    document.getElementById('getMainProject').addEventListener('submit', (event)=>{
        event.preventDefault();
        store.getForm();
        store.navProject();
        document.querySelector('.main-dialog').close();
        
    });

    
}
createMainModal();
createNavBar();
main();