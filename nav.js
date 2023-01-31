let docQS = function (x) {
    let xx = [];
    if (typeof x == 'object') {
        x.forEach(el => {
            xx.push(document.querySelector(el));
        });
    } else {
        xx = document.querySelector(x);
    };
    return xx;
};


let now = 'main';
let pages = docQS(['#main', '#info', '#purse', '#prices']);

function render() {
    for (let i = 0; i < pages.length; i++) {
        let el = pages[i];
        if (now != el.id) {
            el.style.display = 'none';
        };
    };
};