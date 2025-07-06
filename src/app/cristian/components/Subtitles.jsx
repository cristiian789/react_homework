import styles from '@/app/cristian/css/button.module.css';


export function Subtitles ({ name }) {

  return(
    <>
      <div className={styles.exercise}>
        <h2 className={styles.h2}>{name}</h2>
      </div>
    </>
    
  )
}