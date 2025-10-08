import styles from './Card.module.css'
import { FaBookmark } from 'react-icons/fa6'
import { FaUserCircle } from 'react-icons/fa'
import { PiHeartDuotone } from 'react-icons/pi'
import reactLogo from '@/assets/react.svg'
function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.thumbnail}>
                <img src={reactLogo} alt="문제집 썸네일" className={styles.thumbnailImage} />
                <FaBookmark />
            </div>

            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>Card Title</h2>
                    <PiHeartDuotone />
                </div>
                <p className={styles.description}>
                    A card is a flexible and extensible content container. It includes options for headers and footers,
                    a wide variety of content, contextual background colors, and powerful display options.
                </p>
            </div>

            <div className={styles.footer}>
                <p>2025.10.14</p>
                <div className={styles.userInfo}>
                    <FaUserCircle />
                    <span>123</span>
                </div>
            </div>
        </div>
    )
}

export default Card
