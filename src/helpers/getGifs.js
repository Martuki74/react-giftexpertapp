export const getGifs=async (category)=>{
       
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=x3RDqAS1Cgsz1xopZGl4LZfZ4vSheqVU`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs=data.map(img => {
        return {
            id:img.id,
            title: img.title,
            //conla interrogación nos aseguramos que images trae contenido
            url: img.images?.downsized_medium.url
        }

    });
    
    return (gifs);
}
