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
                    <div className={styles.botoes}>
                    <Link href="/webar"><a href="#">VIEW AR</a></Link>
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
                    <div className={styles.botoes}>
                    <Link href="https://8thwall.8thwall.app/capturephoto-aframe/"><a>VIEW AR</a></Link>
                    <Link href="/webar2"><a href="#">BASTIDORES</a></Link>
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
                    <div className={styles.botoes}>
                    <Link href="/webar3"><a>VIEW AR</a></Link>
                    </div>
                </div>
                <div className={styles.bodyContainer}>
                    <Image
                    layout="responsive"
                    width={419}
                    height={239}
                        src="/images/banner.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyContainer}>
                    <Image
                    layout="responsive"
                    width={419}
                    height={239}
                        src="/images/banner.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyContainer}>
                    <Image
                    layout="responsive"
                    width={419}
                    height={239}
                        src="/images/banner.jpg"
                        alt="Banner"
                    />
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
                <div className={styles.bodyCarrossel}>
                    <Image
                    layout="responsive"
                    width={137}
                    height={192}
                        src="/images/img-webar1.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrossel}>
                    <Image
                    layout="responsive"
                    width={137}
                    height={192}
                        src="/images/img-webar2.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrossel}>
                    <Image
                    layout="responsive"
                    width={137}
                    height={192}
                    src="/images/img-webar3.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrossel}>
                    <Image
                    layout="responsive"
                    width={137}
                    height={192}
                        src="/images/img1.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrossel}>
                    <Image
                    layout="responsive"
                    width={137}
                    height={192}
                        src="/images/img1.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrossel}>
                    <Image
                    layout="responsive"
                    width={137}
                    height={192}
                        src="/images/img1.jpg"
                        alt="Banner"
                    />
                </div>
            </Slider>
            <h4 className={styles.titleCarrossel}>Try-ON</h4>
            <Slider
                {...settings}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                <div className={styles.bodyCarrossel}>
                    <Image
                    layout="responsive"
                    width={137}
                    height={192}
                        src="/images/img1.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrossel}>
                    <Image
                    layout="responsive"
                    width={137}
                    height={192}
                        src="/images/img1.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrossel}>
                    <Image
                    layout="responsive"
                    width={137}
                    height={192}
                        src="/images/img1.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrossel}>
                    <Image
                    layout="responsive"
                    width={137}
                    height={192}
                        src="/images/img1.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrossel}>
                    <Image
                    layout="responsive"
                    width={137}
                    height={192}
                        src="/images/img1.jpg"
                        alt="Banner"
                    />
                </div>
                <div className={styles.bodyCarrossel}>
                    <Image
                    layout="responsive"
                    width={137}
                    height={192}
                        src="/images/img1.jpg"
                        alt="Banner"
                    />
                </div>
            </Slider>
        </>
    );
}