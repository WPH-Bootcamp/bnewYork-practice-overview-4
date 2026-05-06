async function fetchData() {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

fetchData();
