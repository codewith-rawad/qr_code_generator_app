
const url2=`http://www.omdbapi.com/?s=${filmss}=bat&apikey=b722c6ef`;
const url1 = `http://www.omdbapi.com/?t=${film}&apikey=b722c6ef`;

var input_film=document.getElementById('films');

var all=document.getElementById('all');


async function films() {
    try {
        const films_befor=await fetch(url);
        const data= await films_befor.json();
data.forEach(element => {
    cre
    
});



    } catch (error) {
        console.error(error);
        
    }

    
    
}