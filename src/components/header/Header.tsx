import { Link } from "react-router-dom";


const header = {
  display:'flex',
  backgroundColor :'black',
  color:'white',
  justifyContent:'center',

  container:{
    display:'flex',
    width:'90vw',
    justifyContent:'space-between'
  }
}

export default function Header(){
  return(
    <div style={header}>
      <div style={header.container}>
        <div>
          <h1>Hello</h1>
        </div>
        <div>
          <Link to="/">
            <h3>  to Top </h3>
          </Link>
          <Link to="/table">
            <h3>  to Table </h3>
          </Link>
        </div>
      </div>
    </div>
  )
}