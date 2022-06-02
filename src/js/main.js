import { todoItem } from './item';
import { openDialog } from './modalControl';

function projectClick(e) {
    projects.forEach((btn) => {
        btn.classList.remove('active-project');
    })
    e.target.classList.add('active-project');
};

const projects = document.querySelectorAll('.project-button');
projects.forEach((btn) => {
    btn.addEventListener('click', projectClick);
});

const addItem = document.querySelector('.item-add');
addItem.addEventListener('click', openDialog);