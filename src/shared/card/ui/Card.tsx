import { FaUserCircle } from 'react-icons/fa'
import styles from './Card.module.css'
import type { footerType } from '@/widgets/cardItem/ui/CardItem'

export type CardProps = {
    children?: React.ReactNode
    className?: string
}

export type CardFooterProps = CardProps & {
    footer: footerType
}

function Card({ children, className = '' }: CardProps) {
    return <div className={`${styles.container} ${className}`}>{children}</div>
}

Card.Thumbnail = function ({ children, className = '' }: CardProps) {
    return <div className={`${styles.thumbnail} ${className}`}>{children}</div>
}

Card.Content = function ({ children, className = '' }: CardProps) {
    return <div className={`${styles.content} ${className}`}>{children}</div>
}

Card.Footer = function ({ footer, className = '' }: CardFooterProps) {
    return (
        <footer className={`${styles.footer} ${className}`}>
            <p className={styles.date}>{footer.createdAt}</p>
            <div className={styles.userInfo}>
                <FaUserCircle />
                <span>{footer.user.name}</span>
            </div>
        </footer>
    )
}

export default Card
