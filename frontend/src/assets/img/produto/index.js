const getImages = ()=>{
    const images = []
    for(let i=1;i<=8;i++){
      images.push(
        require(`./img${i}.jpg`).default
      )
    }
    return images
  }
  export default getImages;