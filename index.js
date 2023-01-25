
let colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];
let boxes = document.querySelectorAll("div");

for (i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    boxes[i].style.width = '100px';
    boxes[i].style.height = '100px';
    boxes[i].style.display = 'inline-block';
}


class paginazione {
    constructor() {

        this.items = []
        this.pageSize = 10

    }

}
let newPage = new paginazione()



newPage.items[0] = `<div>hello world</div>`
newPage.items[1] = `<div>hello world</div>`

console.log(newPage)

// let pages