fetch('FinalProjectFile.json')
  .then(response => response.json())
  .then(data => {
    const coursesData = data.courses;
  })
  .catch(error => console.error(error));

  fetch('FinalProjectFile.json')
  .then(response => response.json())
  .then(data => {
    const booksData = data.courses.flatMap(course => course.books);

    const booksTable = document.getElementById('books-table');
    booksData.forEach(book => {
      const row = document.createElement('tr');
      const titleCell = document.createElement('td');
      titleCell.innerText = book.title;
      const authorCell = document.createElement('td');
      authorCell.innerText = book.author;
      const publisherCell = document.createElement('td');
      publisherCell.innerText = book.publisher;
      const priceCell = document.createElement('td');
      priceCell.innerText = book.price;
      row.appendChild(titleCell);
      row.appendChild(authorCell);
      row.appendChild(publisherCell);
      row.appendChild(priceCell);
      booksTable.appendChild(row);
    });
  })
  .catch(error => console.error(error));
