import styles from '@/app/cristian/css/button.module.css';


export function ButtonBuy ({name}) {

  function handleButton () {
    alert("Mi Boton")
  }

  return(
    <>
      <div className={styles.exercise}>
        <button className={styles.button} onClick={handleButton}>{name}</button>
      </div>
    </>
    
  )
}