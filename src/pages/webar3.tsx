import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/webbar.module.scss'

export default function Webar() {
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
                        src="https://web.zappar.com/?zid=z/xBlj1c"
                        allow="accelerometer"
                        title="Iframe Example"
                        allowFullScreen
                    ></iframe>

                    <div></div>
                </section>
            </main>
        </>
    )
}
