import styles from './Card.module.css'

export type CardProps = {
    children: React.ReactNode
    className?: string
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

Card.Footer = function ({ children, className = '' }: CardProps) {
    return <footer className={`${styles.footer} ${className}`}>{children}</footer>
}

export default Card
