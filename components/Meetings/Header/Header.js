import Image from "next/image"
import styles from "./Header.module.css"

export default function Headers({ backgroundColor, headerSrc, bannerSrc }) {
    return (
        <div className={styles.header}>
            <div
                className={styles.headerBackground}
                style={{
                    backgroundColor: backgroundColor
                }}
            >
                <div className={styles.headerImage}>
                    <Image
                        src={headerSrc}
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
            <div className={styles.banner}>
                <Image
                    src={bannerSrc}
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </div>
    )
}