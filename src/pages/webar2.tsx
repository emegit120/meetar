import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/webbar.module.scss'

export default function Webar2() {
    return (
        <>
            <Head>
                <title>WebAr | MeetAr</title>
            </Head>
            <main>
                <section className={styles.container}>
                    <Link href="/">
                        <a>Voltar</a>
                    </Link>
                    <div>
                    <iframe
                    className={styles.iframe}
                        src="https://8thwall.8thwall.app/capturephoto-aframe/"
                        allow="accelerometer"
                        title="Iframe Example"
                        allowFullScreen
                        ></iframe>
                    </div>
                </section>
            </main>
        </>
    )
}
