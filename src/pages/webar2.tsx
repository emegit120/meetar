import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';
import styles from '../../styles/webbar.module.scss'
import $ from 'jquery'

export default function Webar2() {

    useEffect(() => {


        console.log('TAG>',$('#teste').css('display','flex'))

        $("#teste").load("https://8thwall.8thwall.app/capturephoto-aframe/");


    },[])

    
    
  
    return (
        <>
            <Head>
                <title>WebAr | MeetAr</title>
            </Head>
            <main>
                <section className={styles.container}>
                    <div className={styles.linkvoltar}>
                        <Link href="/">
                            <a>Voltar</a>
                        </Link>
                    </div>
                    <div className={styles.iframe} id="teste"></div>
                    {/* <iframe
                        className={styles.iframe}
                        src="https://8thwall.8thwall.app/capturephoto-aframe/"
                        allow="accelerometer"
                        title="Iframe Example"
                        allowFullScreen
                    ></iframe> */}
                    </section>
            </main>
           
        </>
        
    )
}
