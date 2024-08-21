
const Movie=(props) => {
    const {id,name,duration, year, rating, description} = props;
    return <div style={{backgroundColor:"#0d1137", color: "white" ,margin:"15px" ,padding:10}}>
        {/* [name, age, id] = props; */}
        <h2 style={{color:"#e52165"}}>{name}</h2>
        <div>{<span style={{color: "yellow"}}>{duration}</span>} ----  {<span style={{color: "yellow"}}>{year}</span>} ---- {<span style={{color: "yellow"}}>{rating}</span>}</div>
        <div>{description}</div>
        {/* <div>id: {id} </div> */}

    </div>

}

export default Movie;