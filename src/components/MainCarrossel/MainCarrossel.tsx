import styles from './styles.module.scss'
import { useState } from "react";
import Slider from "react-slick";
import Link from 'next/link'
import Image from 'next/image'

export function MainCarrossel() {
    const [nav1, setnavi1] = useState(null)
    const [nav2, setnavi2] = useState(null)
    const settings = {
        dots: false,
        arrows: false
    };
    return (
        <>
            <Slider
                {...settings}
                asNavFor={nav2}
                ref={slider => (setnavi1(slider))}
            >
                <div className={styles.bodyContainer}>
                    <Image
                        layout="responsive"
                        width={419}
                        height={239}
                        src="/images/banner1.jpg"
                        alt="Banner"
                    />
                    <div className={styles.shareImg}> 
                    <Link href="https://api.whatsapp.com/send?text=https://www.brastemp.com.br/purificadores-de-agua/assinatura/sparkling#realidade?utm_content=RASiteSparkling">
                        <Image
                            
                            width={51}
                            height={51}
                            src="/images/share.png"
                            alt="Banner"
                        />
                    </Link>
                    </div>
                    <div className={styles.botoes}>
                        <Link href="https://www.brastemp.com.br/purificadores-de-agua/assinatura/sparkling#realidade?utm_content=RASiteSparkling"><a>VIEW AR</a></Link>
                    </div>
                   
                </div>
                <div className={styles.bodyContainer}>
                    <Image
                        layout="responsive"
                        width={419}
                        height={239}
                        src="/images/banner2.jpg"
                        alt="Banner"
                    />
                    <div className={styles.shareImg}> 
                    <Link href="https://api.whatsapp.com/send?text=https://web.zappar.com/?zid=z/xBlj1c&rs=&menu=&toolbar=">
                        <Image
                            
                            width={51}
                            height={51}
                            src="/images/share.png"
                            alt="Banner"
                        />
                    </Link>
                    </div>
                        <Link href="/label"><a className={styles.btnLabel}>Label</a></Link>
                    <div className={styles.botoes}>
                        <Link href="https://web.zappar.com/?zid=z/xBlj1c&rs=&menu=&toolbar="><a>VIEW AR</a></Link>
                    </div>
                </div>
                <div className={styles.bodyContainer}>
                    <Image
                        layout="responsive"
                        width={419}
                        height={239}
                        src="/images/banner3.jpg"
                        alt="Banner"
                    />
                    <div className={styles.shareImg}> 
                    <Link href="https://api.whatsapp.com/send?text=https://web.zappar.com/?zid=z/EhNm1c&rs=1&menu=1&toolbar=1">
                        <Image
                            
                            width={51}
                            height={51}
                            src="/images/share.png"
                            alt="Banner"
                        />
                    </Link>
                    </div>
                    <Link href="/label2"><a className={styles.btnLabel}>Label</a></Link>
                    <div className={styles.botoes}>
                        <Link href="https://web.zappar.com/?zid=z/EhNm1c&rs=1&menu=1&toolbar=1"><a>VIEW AR</a></Link>
                    </div>
                </div>
                <div className={styles.bodyContainer}>
                    <Image
                        layout="responsive"
                        width={419}
                        height={239}
                        src="/images/banner4.jpg"
                        alt="Banner"
                    />
                    <div className={styles.shareImg}> 
                    <Link href="https://api.whatsapp.com/send?text=https://area-ar.com/lambreta/">
                        <Image
                            
                            width={51}
                            height={51}
                            src="/images/share.png"
                            alt="Banner"
                        />
                    </Link>
                    </div>
                    <div className={styles.botoes}>
                        <Link href="https://area-ar.com/lambreta/"><a>VIEW AR</a></Link>
                    </div>
                </div>
                <div className={styles.bodyContainer}>
                    <Image
                        layout="responsive"
                        width={419}
                        height={239}
                        src="/images/banner5.jpg"
                        alt="Banner"
                    />
                    <div className={styles.shareImg}> 
                    <Link href="https://api.whatsapp.com/send?text=https://mywebar.com/p/AveiaIntegral">
                        <Image
                            
                            width={51}
                            height={51}
                            src="/images/share.png"
                            alt="Banner"
                        />
                    </Link>
                    </div>
                    <Link href="/label3"><a className={styles.btnLabel}>Label</a></Link>
                    <div className={styles.botoes}>
                        <Link href="https://mywebar.com/p/AveiaIntegral"><a>VIEW AR</a></Link>
                    </div>
                </div>
                <div className={styles.bodyContainer}>
                    <Image
                        layout="responsive"
                        width={419}
                        height={239}
                        src="/images/banner6.jpg"
                        alt="Banner"
                    />
                    <div className={styles.shareImg}> 
                    <Link href="https://api.whatsapp.com/send?text=https://toolofnorthamerica.8thwall.app/pizza-hut-pacman/?f=1">
                        <Image
                            
                            width={51}
                            height={51}
                            src="/images/share.png"
                            alt="Banner"
                        />
                    </Link>
                    </div>
                    <div className={styles.botoes}>
                        <Link href="https://toolofnorthamerica.8thwall.app/pizza-hut-pacman/?f=1"><a>VIEW AR</a></Link>
                    </div>
                </div>
                <div className={styles.bodyContainer}>
                    <Image
                        layout="responsive"
                        width={419}
                        height={239}
                        src="/images/banner7.jpg"
                        alt="Banner"
                    />
                    <div className={styles.shareImg}> 
                    <Link href="https://api.whatsapp.com/send?text=https://alivenow.8thwall.app/freefire/">
                        <Image
                            
                            width={51}
                            height={51}
                            src="/images/share.png"
                            alt="Banner"
                        />
                    </Link>
                    </div>
                    <div className={styles.botoes}>
                        <Link href="https://alivenow.8thwall.app/freefire/"><a>VIEW AR</a></Link>
                    </div>
                </div>
                <div className={styles.bodyContainer}>
                    <Image
                        layout="responsive"
                        width={419}
                        height={239}
                        src="/images/banner8.jpg"
                        alt="Banner"
                    />
                    <div className={styles.shareImg}> 
                    <Link href="https://api.whatsapp.com/send?text=https://aircards.8thwall.app/chronic-cellars/">
                        <Image
                            
                            width={51}
                            height={51}
                            src="/images/share.png"
                            alt="Banner"
                        />
                    </Link>
                    </div>
                    <div className={styles.botoes}>
                        <Link href="https://aircards.8thwall.app/chronic-cellars/"><a>VIEW AR</a></Link>
                    </div>
                </div>
                <div className={styles.bodyContainer}>
                    <Image
                        layout="responsive"
                        width={419}
                        height={239}
                        src="/images/banner9.jpg"
                        alt="Banner"
                    />
                    <div className={styles.shareImg}> 
                    <Link href="https://api.whatsapp.com/send?text=https://alivenow.8thwall.app/flipandmatch/">
                        <Image
                            
                            width={51}
                            height={51}
                            src="/images/share.png"
                            alt="Banner"
                        />
                    </Link>
                    </div>
                    <div className={styles.botoes}>
                        <Link href="https://alivenow.8thwall.app/flipandmatch/"><a>VIEW AR</a></Link>
                    </div>
                </div>

                
                
            </Slider>
            <h4 className={styles.titleCarrossel}>AR NOW</h4>
            <Slider
                {...settings}
                asNavFor={nav1}
                ref={slider => (setnavi2(slider))}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                <div className={styles.bodyCarrosselBaixo}>
                    <Image
                        layout="responsive"
                        width={137}
                        height={192}
                        src="/images/img-webar1.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrosselBaixo}>
                    <Image
                        layout="responsive"
                        width={137}
                        height={192}
                        src="/images/img-webar2.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrosselBaixo}>
                    <Image
                        layout="responsive"
                        width={137}
                        height={192}
                        src="/images/img-webar3.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrosselBaixo}>
                    <Image
                        layout="responsive"
                        width={137}
                        height={192}
                        src="/images/img-webar4.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrosselBaixo}>
                    <Image
                        layout="responsive"
                        width={137}
                        height={192}
                        src="/images/img-webar5.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrosselBaixo}>
                    <Image
                        layout="responsive"
                        width={137}
                        height={192}
                        src="/images/img-webar6.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrosselBaixo}>
                    <Image
                        layout="responsive"
                        width={137}
                        height={192}
                        src="/images/img-webar7.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrosselBaixo}>
                    <Image
                        layout="responsive"
                        width={137}
                        height={192}
                        src="/images/img-webar8.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrosselBaixo}>
                    <Image
                        layout="responsive"
                        width={137}
                        height={192}
                        src="/images/img-webar9.jpg"
                        alt="Banner"
                    />
                </div>
              


                
            </Slider>
          
        </>
    );
}