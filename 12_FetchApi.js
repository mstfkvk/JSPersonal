function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
}

// getData("https://jsonplaceholder.typicode.com/albums");

function sendData(url, requestType) {
  fetch(url, {
    method: requestType,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      `
      [
        {
        "userId": 1,
        "id": 1,
        "title": "yu rwty",
        "body": "qiae"
        },
        {
        "userId": 2,
        "id": 2,
        "title": "qui est esse",
        "body": "sgdf"
        },
        {
        "userId": 24,
        "id": 3,
        "title": "mk",
        "body": "mm"
        }
      ]
`
    ),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

// sendData("https://jsonplaceholder.typicode.com/posts", "POST");
