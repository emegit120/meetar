import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/webbar.module.scss'

export default function Webar() {
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
                        <h3>Escaneie este Qr code e depois aponte a camêra do seu celular para a imagem abaixo do produto:</h3>
                        <Image
                        width={200}
                        height={200}
                        src="/images/qrcode2.jpg"
                        alt="Banner"
                    />
                    </div>
                    
                    <Image
                        width={500}
                        height={500}
                        src="/images/label2.jpg"
                        alt="Banner"
                    />

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
