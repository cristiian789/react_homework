import styles from '@/app/cristian/css/button.module.css';


export function LabelText ({ text }) {

  return(
    <>
      <label className={styles.label}>{text}</label>
    </>
    
  )
}