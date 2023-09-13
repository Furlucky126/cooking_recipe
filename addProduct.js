function addProduct() {
  let name = document.getElementById('name').value;
  let image = document.getElementById('image').value;
  let description = document.getElementById('description').value;

  const newObject = {
    name: name,
    desc: description,
    img: image,
  };

  // Get existing data from local storage or initialize it as an empty array
  let existing = JSON.parse(localStorage.getItem("data")) || [];

  // Push the new object into the existing data array
  existing.push(newObject);

  // Store the updated data back in local storage
  localStorage.setItem("data", JSON.stringify(existing));

  // Optionally, you can clear the input fields after adding the product
  document.getElementById('name').value = '';
  document.getElementById('image').value = '';
  document.getElementById('description').value = '';
}
