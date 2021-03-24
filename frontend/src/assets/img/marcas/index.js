const getImages = ()=>{
  const images = []
  for(let i=1;i<=12;i++){
    images.push({
      frente: require(`./marca${i}.png`).default,
      tras: require(`./produtomarca${i}.png`).default,
    })
  }
  return images
}
export default getImages