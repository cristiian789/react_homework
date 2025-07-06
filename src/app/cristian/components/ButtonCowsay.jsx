import { say  } from 'cowsay-browser';
import { useState } from 'react';
import styles from '@/app/cristian/css/button.module.css';


export function ButtonCowsay ( { message, setMessage  }) {

  function handleCowsay () {

    if(message.trim() === ""){
      alert('Por favor ingresa el mensaje')
    }
    //console.log(message)
    console.log(say({ text: message }));
    alert('Revisa la consola')

    setMessage("")

  }

  return(
    <>
      <div className={styles.exercise}>
        <button className={styles.button} onClick={handleCowsay}>Ejecutar Cowsay</button>
      </div>
    </>
    
  )
}