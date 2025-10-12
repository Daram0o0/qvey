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
    onClick?: () => void
    onBookmarkClick?: () => void
    onLikeClick?: () => void
}

function CardItem({ card, onClick, onBookmarkClick, onLikeClick }: CardItemProps) {
    const handleClickBookmark = (e: React.MouseEvent) => {
        e.stopPropagation()
        onBookmarkClick?.()
    }

    const handleClickLike = (e: React.MouseEvent) => {
        e.stopPropagation()
        onLikeClick?.()
    }

    return (
        <Card onClick={onClick}>
            {card.thumbnail && (
                <Card.Thumbnail>
                    <img
                        src={card.thumbnail.thumbnailUrl || reactLogo}
                        alt="문제집 썸네일"
                        className={styles.thumbnailImage}
                    />
                    <FaBookmark className={styles.bookmark} onClick={handleClickBookmark} />
                </Card.Thumbnail>
            )}

            <Card.Content>
                <div className={styles.title}>
                    <h2>{card.content.title}</h2>
                    {card.content.likes && <PiHeartDuotone onClick={handleClickLike} />}
                </div>
                <p className={styles.description}>{card.content.description}</p>
            </Card.Content>

            {card.footer && <Card.Footer footer={card.footer} />}
        </Card>
    )
}

export default CardItem
