const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

const newArray = books.map(book => {
  book.author = book.author.split(' ').reverse().join(' ');
  return book;
});

let sortedArray = newArray.sort((a, b) => {
  if (a.author.charAt(0) > b.author.charAt(0)) {
    return 1;
  } else {
    return -1;
  }
});

const ul = document.querySelector('.book-list');
const liArr = [];

sortedArray.forEach(book => {
  
  // Create elements
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.setAttribute('src', book.img);

  // Card elements
  const h3 = document.createElement('h3');
  const h3Text = document.createTextNode(book.title);
  const p = document.createElement('p');
  const authorArr = book.author.split(' ');
  const author = `${authorArr[1]}, ${authorArr[0]}`;
  const pText = document.createTextNode(author);
  const divSpan = document.createElement('div');
  const divText = document.createElement('div');
  const span = document.createElement('span');
  let spanText = '';

  // Already read
  if (book.alreadyRead) {
    spanText = document.createTextNode('Read');
    span.style.backgroundColor = 'green';
  } else {
    spanText = document.createTextNode('To read');
    span.style.backgroundColor = 'grey';
  }
  
  // Append
  span.append(spanText);
  divSpan.append(span);
  divText.append(h3, p);
  p.append(pText);
  h3.append(h3Text);
  li.append(img, divText, divSpan);
  ul.append(li);

  // Style
  span.classList.add('status');
  img.classList.add('book-cover');
  divText.classList.add('text');
  divSpan.classList.add('book-footer');
  li.classList.add('book')
})
