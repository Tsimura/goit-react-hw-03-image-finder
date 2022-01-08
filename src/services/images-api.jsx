function fetchImages(nextRequestValue) {
  return fetch(
    `https://pixabay.com/api/?q=${nextRequestValue}&page=1&key=24121745-05691669c6e1f2eaf3f0511ee&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`Error message with ${nextRequestValue} value!!!`),
    );
  });
}
const api = { fetchImages };
export default api;
