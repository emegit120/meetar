import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';
import styles from '../../styles/webbar.module.scss'
import $ from 'jquery'

export default function Webar2() {

    useEffect(() => {


     //   console.log('TAG>',$('#teste').css('display','flex'))


      

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
                    <iframe
                        className={styles.iframe}
                        src="https://www.8thwall.com/blog/post/56548289792/warner-bros.-pictures-and-legendary-create-cross-platform-avatar-experience-to-promote-upcoming-film-dune"
                        allow="accelerometer"
                        title="Iframe Example"
                        allowFullScreen
                    ></iframe>
                    </section>
            </main>
           
        </>
        
    )
}
