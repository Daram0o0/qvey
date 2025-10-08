import Card from '@/shared/card/ui/Card'
import { FaBookmark } from 'react-icons/fa6'
import { FaUserCircle } from 'react-icons/fa'
import { PiHeartDuotone } from 'react-icons/pi'
import reactLogo from '@/assets/react.svg'
import styles from './CardItem.module.css'

export type CardData = {
    id: number
    title: string
    description: string
    thumbnailUrl?: string
    createdAt: string
    user: {
        name: string
        avatarUrl?: string
    }
    likes: number
    isBookmarked?: boolean
}

export type CardItemProps = {
    card: CardData
}

function CardItem({ card }: CardItemProps) {
    return (
        <Card>
            {card.thumbnailUrl && (
                <Card.Thumbnail>
                    <img src={card.thumbnailUrl || reactLogo} alt="문제집 썸네일" className={styles.thumbnailImage} />
                    <FaBookmark className={styles.bookmark} />
                </Card.Thumbnail>
            )}

            <Card.Content>
                <div className={styles.title}>
                    <h2>{card.title}</h2>
                    {card.thumbnailUrl && <PiHeartDuotone />}
                </div>
                <p className={styles.description}>{card.description}</p>
            </Card.Content>

            {card.thumbnailUrl && (
                <Card.Footer>
                    <p className={styles.date}>{card.createdAt}</p>
                    <div className={styles.userInfo}>
                        <FaUserCircle />
                        <span>{card.user.name}</span>
                    </div>
                </Card.Footer>
            )}
        </Card>
    )
}

export default CardItem
