// LIBRARY
let myLibrary = [
	{
		"title" : "The Hobbit",
		"author" : "J.R.R. Tolkien",
		"pages" : 1000,
		"state" : "Read",
	},
	{
		"title" : "The Lord of The Rings",
		"author" : "J.R.R. Tolkien",
		"pages" : 1000,
		"state" : "Read",
	},
];

// ADD NEW BOOK BUTTON - OPEN POP-UP
const modalAdd = document.querySelector("#modal-add");
const openModalAdd = document.querySelector(".open-modal-add");

openModalAdd.addEventListener("click", () => {
	modalAdd.showModal();
});

// BOOK CONSTRUCTOR
function Book() {
	this.title = title
	this.author = author
	this.pages = pages
	this.state = state
}

// ADD BOOK FUNCTION
function addBookToLibrary() {
	// GET INPUT FIELDS' VALUES
	title = document.getElementById("title-input").value;
	author = document.getElementById("author-input").value;
	pages = document.getElementById("pages-input").value;
	state = document.getElementById("status-input").value;
	// PUSH BOOK TO LIBRARY
	let newBook = new Book(title, author, pages, state);
	myLibrary.push(newBook);
}

// ADD BUTTON
const addBook = document.querySelector(".add-book");

addBook.addEventListener("click", () => {
	addBookToLibrary();
	displayBooks();
});

// SHOW BOOKS IN SITE
const bookCardContainer = document.querySelector(".book-card-container");
let deleteButtons;
let statusButtons;

function displayBooks() {
	clearScreen();
	for (let i = 0; i < myLibrary.length; i++) {
		// CREATE BOOKCARD
		let bookCard = document.createElement("div");
		bookCard.classList.add("book-card");
		bookCard.setAttribute("id", `${i}-book-card`);
		bookCardContainer.appendChild(bookCard);
		// CREATE TITLE ELEMENT	
		let titleInfo = document.createElement("p");
		titleInfo.classList.add("title-info");
		titleInfo.textContent = myLibrary[i].title;
		bookCard.appendChild(titleInfo);
		// CREATE AUTHOR ELEMENT
		let authorInfo = document.createElement("p");
		authorInfo.classList.add("author-info");
		authorInfo.textContent = myLibrary[i].author;
		bookCard.appendChild(authorInfo);
		// CREATE PAGES ELEMENT
		let pagesInfo = document.createElement("p");
		pagesInfo.classList.add("pages-info");
		pagesInfo.textContent = `${myLibrary[i].pages} pages`;
		bookCard.appendChild(pagesInfo);
		// CREATE STATUS ELEMENT (BUTTON)
		let statusInfo = document.createElement("button");
		statusInfo.classList.add("status-info");
		statusInfo.setAttribute("value", `${i}`);
		statusInfo.textContent = myLibrary[i].state;
		bookCard.appendChild(statusInfo);
		// CREATE DELETE BUTTON
		let deleteButton = document.createElement("button");
		deleteButton.classList.add("delete-button");
		deleteButton.setAttribute("value", `${i}`);
		deleteButton.textContent = "Delete";
		bookCard.appendChild(deleteButton);
	}
	deleteButtons = document.querySelectorAll(".delete-button");
	statusButtons = document.querySelectorAll(".status-info");
	
	// DELETE BOOK BUTTON
	deleteButtons.forEach(deleteButton => {
		deleteButton.addEventListener("click", () => {
			deleteBook(deleteButton.value);
			displayBooks();
			console.log(myLibrary);
		});
	})
	
	// CHANGE BOOK STATUS BUTTON
	statusButtons.forEach(statusButton => {
	statusButton.addEventListener("click", () => {
		changeStatus(statusButton.value);
		displayBooks();
		});
	})
}

displayBooks()

// CLEAR SCREEN FUNCTION
function clearScreen() {
	const bookCards = document.querySelectorAll(".book-card");
	bookCards.forEach(bookCard => {
		bookCard.remove();
	})
};	

// CHANGE BOOK STATUS FUNCTION
function changeStatus(index) {
	if (myLibrary[index]["state"] === "Read") {
		myLibrary[index]["state"] = "Not Read";
	} else {
		myLibrary[index]["state"] = "Read";
	}
}

// DELETE BOOK FUNCTION
function deleteBook(index) {
	myLibrary.splice(index,1);
}



/*

// CHANGE BOOK STATUS BUTTON
statusButtons.forEach(statusButton => {
	statusButton.addEventListener("click", () => {
		changeStatus(statusButton.value);
		displayBooks();
	});
})

// DELETE BOOK BUTTON
deleteButtons.forEach(deleteButton => {
	deleteButton.addEventListener("click", () => {
		deleteBook(deleteButton.value);
		displayBooks();
		console.log(myLibrary);
	});
})

let titleInput = document.querySelector(".title-input")
	titleInput.setAttribute("value", "");
	let authorInput = document.querySelector(".author-input")
	authorInput.setAttribute("value", "");
	let pagesInput = document.querySelector(".pages-input")
	pagesInput.setAttribute("value", );
*/