'use client'
import Link from "next/link";
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
           <HomeTitle name="Cristian Lopez"/>
        </div>
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
           <Subtitles name= "Boton"/>
           <Button name="Registrar"/>
          </div>
          <div className={styles.card}>
            <Subtitles name= "Cowsay"/>
            <LabelText text="Por favor Ingresa un mensaje para imprimir"/>
            <InputCowsay message={message} setMessage={setMessage}/>
            <ButtonCowsay message={message} setMessage={setMessage}/>
          </div>
          <div className={styles.card}>
            <Link href="/cristian/tienda">
              <button className={styles.button}>Ir a la Tienda</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
