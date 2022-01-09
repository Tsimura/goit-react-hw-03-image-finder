function fetchImages(nextRequestValue, currentPage) {
  const BASE_URL = 'https://pixabay.com/api';
  const KEY = '24121745-05691669c6e1f2eaf3f0511ee';
  const FILTERS = 'image_type=photo&orientation=horizontal';
  return fetch(
    `${BASE_URL}/?q=${nextRequestValue}&page=${currentPage}&key=${KEY}&${FILTERS}&per_page=12`,
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
