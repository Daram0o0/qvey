import CardItem, { type CardData } from '@/widgets/cardItem/ui/CardItem'

const DUMMY_CARD_ITEMS: CardData[] = [
    {
        id: 1,
        thumbnail: {
            thumbnailUrl: 'https://via.placeholder.com/400x180.png/0000FF/FFFFFF?text=React',
            isBookmarked: true,
        },
        content: {
            title: '리액트 기초 마스터',
            description: 'useState, useEffect를 완벽하게 이해해봅시다.',
            likes: 123,
        },
        footer: {
            createdAt: '2025.10.08',
            user: { name: 'dev_user' },
        },
    },
    {
        id: 2,
        thumbnail: {
            thumbnailUrl: '',
            isBookmarked: false,
        },
        content: {
            title: 'FSD 아키텍처 완전 정복',
            description: 'Feature-Sliced Design의 핵심 개념을 알아봅니다.',
            likes: 45,
        },
        footer: {
            createdAt: '2025.10.07',
            user: { name: 'architect' },
        },
    },
    {
        id: 3,
        content: {
            title: '타입스크립트 입문',
            description: '자바스크립트에 타입을 입혀봅시다.',
            likes: 78,
        },
        footer: {
            createdAt: '2025.10.06',
            user: { name: 'ts_master' },
        },
    },
    {
        id: 4,
        content: {
            title: '프론트엔드 개발 환경 설정',
            description: '최신 개발 도구와 워크플로우를 소개합니다.',
        },
    },
]

function DEMO_CardItemPage() {
    const handleClick = () => {
        console.log('카드 클릭 이벤트')
    }
    const handleClickBookmark = () => {
        console.log('북마크 클릭 이벤트')
    }
    const handleClickLike = () => {
        console.log('좋아요 클릭 이벤트')
    }
    return (
        <div>
            <h1>DEMO Card Item Page</h1>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                {DUMMY_CARD_ITEMS.map((card) => (
                    <CardItem
                        key={card.id}
                        card={card}
                        onClick={handleClick}
                        onBookmarkClick={handleClickBookmark}
                        onLikeClick={handleClickLike}
                    />
                ))}
            </div>
        </div>
    )
}

export default DEMO_CardItemPage
