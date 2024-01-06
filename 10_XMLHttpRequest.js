function createUrl(URL, id) {
  if (id === null) {
    return URL;
  } else {
    return `${URL}?postId=${id}`;
  }
}

function getComments(URL, id) {
  let newURL = createUrl(URL, id);
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
    }
  });

  xhr.open("GET", newURL);
  xhr.send();
}

getComments('https://jsonplaceholder.typicode.com/comments', null);


////----------------------------------

function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}