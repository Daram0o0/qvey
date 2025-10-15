import Card from '@/shared/card/ui/Card'
import { FaBookmark } from 'react-icons/fa6'
import { PiHeartDuotone } from 'react-icons/pi'
import reactLogo from '@/assets/react.svg'
import styles from './CardItem.module.css'

// INFO: 컴포넌트 구조와 데이터 구조를 일치시키며 독립적인 렌더링을 하기 위해, CardData를 3가지의 타입으로 분리하여 정의
// 썸네일 타입 (url, 북마크 여부)
export type ThumbnailType = {
    thumbnailUrl?: string
    isBookmarked: boolean
}
// 컨텐츠 타입 (제목, 설명, 좋아요 수)
export type ContentType = {
    title: string
    description: string
    likes?: number
}
// 푸터 타입 (작성일, 작성자 정보)
export type FooterType = {
    createdAt: string
    user: {
        name: string
        avatarUrl?: string
    }
}

// 카드 데이터 타입 -> 순수한 카드 데이터만을 정의
export type CardData = {
    id: number
    thumbnail?: ThumbnailType
    content: ContentType
    footer?: FooterType
}

// 카드 아이템 컴포넌트 props 타입 -> 컴포넌트가 작동하기 위한 모든 것을 포함
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
