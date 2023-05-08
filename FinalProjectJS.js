fetch('FinalProjectFile.json')
  .then(response => response.json())
  .then(data => {
    const coursesData = data.courses;
  })
  .catch(error => console.error(error));

