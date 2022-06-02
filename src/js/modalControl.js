const dialog = document.getElementById('dialog');
const close = document.getElementById('close');
const bodyElements = document.querySelectorAll('header,main,footer');

function openDialog() {
    dialog.setAttribute('open', '');
    close.focus();
    close.addEventListener('keydown', function(e) {
        if (e.keyCode == 9) {
            e.preventDefault();
        }
    });
    document.getElementById('cover').style.display = 'block';
    document.addEventListener('keydown', addESC);
    bodyElements.forEach((el) => {
        el.classList.add('fade');
    })
}

function closeDialog() {
    dialog.removeAttribute('open');
    document.getElementById('cover').style.display = 'none';
    document.removeEventListener('keydown', addESC);
    bodyElements.forEach((el) => {
        el.classList.remove('fade');
    })
}

var addESC = function(e) {
    if (e.keyCode == 27) {
        closeDialog();
    }
};

close.addEventListener('click', closeDialog);

export { openDialog };