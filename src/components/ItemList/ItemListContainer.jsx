const ItemListContainer = ({greeting}) =>{
    const greetingStyle ={
      fontSize:"30px",
      texAling:"center",
      fontWeight:"700",
      display:"flex",
      justifyContent:"center",
      padding:"30px"
    }
    
    return(
      <div style={greetingStyle}>
        {greeting}
      </div>
    )
  }
  
  export default ItemListContainer;