async function fetchdata(){
    try{
    const res= await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1",{method:"GET"});
   const data = await res.json();
   console.log(data.data);
   const array=data.data;
   array.forEach(anime=>createAnime(anime));
    }
    catch(err){
        console.log("error has occured",err);
    }
   
}
fetchdata();

function createAnime(anime)
{
    const container= document.querySelector(".container");
    
    const {anime_img,anime_id,anime_name}=anime;
    container.innerHTML +=`
    <div class="innercontainer">
    <img src="${anime_img}" alt="animeimg" class="image">
    <p>Anime id: ${anime_id}</p>
    <p>Anime Name:${anime_name} </p>
    </div>
    `
   
    ;
}








