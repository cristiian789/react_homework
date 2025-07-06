'use client'
import { useState } from 'react';
import { Button } from "./components/Button.jsx";
import { ButtonCowsay } from "./components/ButtonCowsay.jsx";
import { HomeTitle } from "./components/HomeTitle.jsx";
import styles from '@/app/cristian/css/page.module.css';
import { Subtitles } from "./components/Subtitles.jsx";
import { LabelText } from "./components/Label.jsx";
import { InputCowsay } from "./components/Input.jsx";


export default function Welcome() {
  const [message, setMessage ] = useState('')


  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
           <HomeTitle/>
        </div>
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
           <Subtitles name= "Boton"/>
           <Button/>
          </div>
          <div className={styles.card}>
            <Subtitles name= "Cowsay"/>
            <LabelText text="Por favor Ingresa un mensaje para imprimir"/>
            <InputCowsay message={message} setMessage={setMessage}/>
            <ButtonCowsay message={message} setMessage={setMessage}/>
          </div>
        </div>
      </div>
    </>
  );
}
