const getImagesProducts = () => {
  const images = [];
  for (let i = 1; i <= 11; i++) {
    images.push({
      produto: require(`./product-${i}.jpg`).default,
    });
  }
  return images;
};
export default getImagesProducts;
