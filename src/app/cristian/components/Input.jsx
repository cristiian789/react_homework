import styles from '@/app/cristian/css/button.module.css';


export function InputCowsay ({ message,setMessage}) {

  return(
    <>
        <input className={styles.input} value={message} onChange={e => setMessage(e.target.value)}></input>
    </>
    
  )
}