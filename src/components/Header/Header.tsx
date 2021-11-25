import styles from './styles.module.scss'
import Image from 'next/image'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div className={styles.headerCategories}>
                    <h1>AR NOW</h1>
                    <Image
                    width={78}
                    height={17}
                        src="/images/logo.svg"
                        alt="MeetAR"
                        />
                </div>
                <nav className={styles.navHeader}>
                    <a href="#">AR Now</a>
                    <a href="#">Labels</a>
                    <a href="#">Try-on</a>
                    <a href="#">Brands</a>
                    <a href="#">Prints</a>
                </nav>
            </div>
        </header>
    )
}