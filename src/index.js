import { buttonSubmit } from "./buttonModule";
import { CreateAllDialog } from "./modal";
import { createNavBar } from "./nav";
import { LocalStore } from "./post";


function main() {
    const store = new LocalStore();
    buttonSubmit(store);
}
CreateAllDialog();
createNavBar();
main();