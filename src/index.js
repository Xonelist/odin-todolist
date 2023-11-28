import { addButtonModule } from "./buttonModule";
import { DOMProject } from "./post";

function basis() {
    const a = new DOMProject()
    addButtonModule(a);
}

basis()