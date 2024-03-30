import styles from './header.module.scss';
  
function Header(){
    return(
    <>
   <div className={styles.container}>

    <header className={styles.header}>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
    </header>
   </div>


    
    </>

    )

}


export default Header;