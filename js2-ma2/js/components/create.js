const listKey = "list";
const listBooks = retrieve();
const container = document.querySelector("ul");

createBookList();

const listInput = document.querySelector("input");
const listButton = document.querySelector(".btn");

listButton.addEventListener("click", addToList);

function addToList() {
    const newBook = listInput.value.trim();

    if (newBook.length >= 1) {
        const newItem = { isbn: Date.now(), title: newBook };
        listInput.value = "";
        listBooks.push(newItem);
        createBookList();
        saveToStorage(listBooks);
    }
}

function createBookList() {
    container.innerHTML = "";

    listBooks.forEach(function (item) {
        let isbn = item.isbn;
        container.innerHTML += `<li>
        <p>ISBN: ${isbn}</p><h4>${item}</h4><button class="btn" data-item="${isbn}">Remove me
        </li>`
    });
}

function saveToStorage(valueToSave) {
    localStorage.setItem(listKey, JSON.stringify(valueToSave));
}

function retrieve() {
    const currentList = localStorage.getItem(listKey);

    if (!currentList) {
        return [];
    }

    return JSON.parse(currentList);
}