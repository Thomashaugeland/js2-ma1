let books = [
    {
        isbn: "1600506460320",
        title: "Great book",
    },
    {
        isbn: "1600506460373",
        title: "Ok book",
    },
    {
        isbn: "1600506460521",
        title: "Bad book",
    },
    {
        isbn: "1600506460456",
        title: "Terrible book",
    },
];

const container = document.querySelector("ul");

function createList() {
    for (let i = 0; i < books.length; i++) {
        let isbn = books[i].isbn;
        let title = books[i].title;
        container.innerHTML += `<li>
          <p>ISBN: ${isbn}</p><h4>${title}</h4><button class="btn" data-item="${isbn}">Remove me
          </li>`
    }

    const trashCan = document.querySelectorAll("button");

    trashCan.forEach(function (can) {
        can.addEventListener("click", removeFromList);
    })
}

createList();

function removeFromList(event) {
    const itemToRemove = event.target.dataset.item;
    container.innerHTML = "";

    const newList = books.filter(function (book) {
        return book.isbn !== itemToRemove;
    })

    if (newList.length === 0) {
        container.innerHTML = `<div class="empty"><p>Congratulations! You finished your list!</p></div>`
    }

    books = newList;

    createList(newList);
}
