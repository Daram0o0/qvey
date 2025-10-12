import Card from '@/shared/card/ui/Card'
import { FaBookmark } from 'react-icons/fa6'
import { PiHeartDuotone } from 'react-icons/pi'
import reactLogo from '@/assets/react.svg'
import styles from './CardItem.module.css'

export type thumbnailType = {
    thumbnailUrl?: string
    isBookmarked: boolean
}
export type contentType = {
    title: string
    description: string
    likes?: number
}
export type footerType = {
    createdAt: string
    user: {
        name: string
        avatarUrl?: string
    }
}

export type CardData = {
    id: number
    thumbnail?: thumbnailType
    content: contentType
    footer?: footerType
}

export type CardItemProps = {
    card: CardData
}

function CardItem({ card }: CardItemProps) {
    return (
        <Card>
            {card.thumbnail && (
                <Card.Thumbnail>
                    <img
                        src={card.thumbnail.thumbnailUrl || reactLogo}
                        alt="문제집 썸네일"
                        className={styles.thumbnailImage}
                    />
                    <FaBookmark className={styles.bookmark} />
                </Card.Thumbnail>
            )}

            <Card.Content>
                <div className={styles.title}>
                    <h2>{card.content.title}</h2>
                    {card.content.likes && <PiHeartDuotone />}
                </div>
                <p className={styles.description}>{card.content.description}</p>
            </Card.Content>

            {card.footer && <Card.Footer footer={card.footer} />}
        </Card>
    )
}

export default CardItem
