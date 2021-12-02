import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';
import styles from '../../styles/webbar.module.scss'
import $ from 'jquery'
import Image from 'next/image'

export default function Webar2() {

    useEffect(() => {


        //   console.log('TAG>',$('#teste').css('display','flex'))




    }, [])




    return (
        <>
            <Head>
                <title>WebAr | MeetAr</title>
            </Head>
            <main>
                <div className={styles.linkvoltarBarra}>
                    <Link href="/">
                        <a>Voltar</a>
                    </Link>
                </div>
                <section className={styles.container}>

                    <div className={styles.conteudo}>
                        <h1 className={styles.marginBottom}>
                            Warner Bros. Pictures and Legendary create cross-platform avatar experience to promote upcoming film Dune
                        </h1>
                        <h4 className={styles.marginBottom}>Create your own custom Dune avatar in this first-of-its kind cross-platform avatar experience</h4>
                        <Image
                            layout="responsive"
                            width={786}
                            height={442}
                            src="/images/duna.jpg"
                            alt="Banner"
                        />
                        <p className={styles.marginBottom}>
                            To promote the launch of the upcoming sci-fi blockbuster film, Dune, Warner Bros. Pictures and Legendary launched an innovative cross-platform avatar experience that allowed users to create their own custom 3D Dune avatars.
                        </p>
                        <iframe
                            src="https://www.youtube.com/embed/WKWTD1uujCM"
                            allow="accelerometer"
                            title="Iframe Example"
                            allowFullScreen
                            className={styles.iframeVideo}
                        ></iframe>
                        <p>
                            In the experience, Dune fans can create their own custom avatar by uploading a selfie of themselves or by customizing one of the avatars provided to them. Next, users can personalize their avatars to look like a citizen of the planet Arrakis by choosing from a variety of custom designed Dune character outfits, hair style and eye colors. Once their avatar has been created, users can view their custom avatar in web-based augmented reality or download it to use across platforms in hundreds of compatible games and environments.
                        </p>
                        <p>
                            Created by Aircards in partnership with Yahoo Creative Studios, <Link href="https://readyplayer.me/"><a className={styles.linkConteudo}>Ready Player Me</a></Link>, <Link href="https://readyplayer.me/"><a className={styles.linkConteudo}>Ringtail Studios</a></Link> and powered by 8th Wall, this innovative experience is the first-of-its kind to incorporate Ready Player Me with 8th Wall. It also makes use of 8th Wall’s Media Recorder to capture photos for easy sharing of the experience to friends and social media.
                        </p>
                        <p>
                            Create your own custom Dune avatar by tapping <Link href="https://dune-avatar.com/"><a className={styles.linkConteudo}>here.</a></Link>
                        </p>
                        <p>
                            Read more about this experience on <Link href="https://nerdist.com/article/dune-avatar-generator-denis-villeneuve/"><a className={styles.linkConteudo}>Nerdist.</a></Link>
                        </p>

                    </div>
                </section>
                <div className={styles.linkvoltarBarra}>
                    <Link href="/">
                        <a>Voltar</a>
                    </Link>
                </div>
            </main>

        </>

    )
}
