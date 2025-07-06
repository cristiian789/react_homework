import styles from '@/app/cristian/css/homeTitle.module.css';


export function HomeTitle ({name}) {

  return(
    <>
      <h1 className={styles.title}>{name}</h1>
    </>
    
  )
}