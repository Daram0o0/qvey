import { FaUserCircle } from 'react-icons/fa'
import styles from './Card.module.css'
import type { FooterType } from '@/widgets/cardItem/ui/CardItem'

export type CardProps = {
    children?: React.ReactNode
    className?: string
    onClick?: () => void
}

export type CardFooterProps = CardProps & {
    footer: FooterType
}

function Card({ children, className = '', onClick }: CardProps) {
    return (
        <div className={`${styles.container} ${className}`} onClick={onClick}>
            {children}
        </div>
    )
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
