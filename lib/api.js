const API_KEY = 'qpcqED-8j9HWAwrzwVNBYhjAK6VteN5WlRq9CxY0IaA';

export const getCuratedPhotos = async () => {
  const IMAGES = await fetch(`https://api.unsplash.com/search/photos?query=city&client_id=` + API_KEY);
  const responseJson = await IMAGES.json();
  return responseJson.photos;
};
