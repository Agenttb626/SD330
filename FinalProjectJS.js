fetch('FinalProjectFile.json')
  .then(response => response.json())
  .then(course => {
    const coursesList = document.getElementById('courses-list');
    data.courses.forEach(course => {
      const courseItem = document.createElement('li');
      courseItem.textContent = course.title;
      
      const booksList = document.createElement('ul');
      course.books.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.textContent = book.title;
        booksList.appendChild(bookItem);
      });
      
      courseItem.appendChild(booksList);
      coursesList.appendChild(courseItem);
    });
  });
