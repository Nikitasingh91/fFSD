import {movies} from "./movies.js"

const MovieList = () => {
  return (
    <>
    <h1 style={{textAlign:"center",color:"red"}}>MOVIES CLONE APP</h1>
    <div style={{display:"flex", width:"80%",height:"500px",gap:"30px",flexWrap:"wrap",margin:"20px auto"}}>
    {
    movies.map((curr,index)=>{
        return(

            <div key={index} style={{background:"#f8f8ff",padding:"20px",boxSizing:"border-box",justifyContent:"center",borderRadius:"10px"}}>
                <img src={curr.image} height="300px" width="330px" />
                <h1>Title : {curr.title}</h1>
                <h3>Language: {curr.language}</h3>
                <h3>Cost : {curr.cost}</h3>
            </div>
 
        )
    })
}
</div>
    </>
    
  )
}

export default MovieList