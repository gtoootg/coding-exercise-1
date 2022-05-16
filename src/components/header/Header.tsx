import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import styles from './Header.module.scss';

// const header = {
//   display:'flex',
//   backgroundColor :'black',
//   color:'white',
//   justifyContent:'center',

//   container:{
//     display:'flex',
//     width:'90vw',
//     justifyContent:'space-between'
//   }
// }


function NavigationItem(){
  return(
    <>
      <Link to="/">
        <h3>  to Top </h3>
      </Link>
      <Link to="/table">
        <h3>  to Table </h3>
      </Link>
    </>
  )
}

export default function Header(){
  const [toggle, setToggle] = useState(false)

  const toggleDrawer = (open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
  if (
    event.type === 'keydown' &&
    ((event as React.KeyboardEvent).key === 'Tab' ||
      (event as React.KeyboardEvent).key === 'Shift')
  ) {
    return;
  }

  setToggle(open);
};

  return(
    <div className={styles.header}>
      <div className={styles.header_container}>
        <div>
          <h1>Hello</h1>
        </div>
        <div>
          <NavigationItem/>
        </div>
        <div>
          <button onClick={()=>{setToggle(!toggle)}}>toggle</button>
          <Drawer
            anchor= 'right'
            open={toggle}
            onClose={toggleDrawer(false)}
          >
            <div style={{width:'50vw'}}>
              <NavigationItem/>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  )
}