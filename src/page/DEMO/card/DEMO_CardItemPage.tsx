import CardItem, { type CardData } from '@/widgets/cardItem/ui/CardItem'

const DUMMY_CARD_ITEMS: CardData[] = [
    {
        id: 1,
        title: '리액트 기초 마스터',
        description: 'useState, useEffect를 완벽하게 이해해봅시다.',
        thumbnailUrl: 'https://via.placeholder.com/400x180.png/0000FF/FFFFFF?text=React',
        createdAt: '2025.10.08',
        user: { name: 'dev_user' },
        likes: 123,
        isBookmarked: true,
    },
    {
        id: 2,
        title: 'FSD 아키텍처 완전 정복',
        description: 'Feature-Sliced Design의 핵심 개념을 알아봅니다.',
        createdAt: '2025.10.07',
        user: { name: 'architect' },
        likes: 45,
        isBookmarked: false,
    },
]

function DEMO_CardItemPage() {
    return (
        <div>
            <h1>DEMO Card Item Page</h1>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                {DUMMY_CARD_ITEMS.map((card) => (
                    <CardItem key={card.id} card={card} />
                ))}
            </div>
        </div>
    )
}

export default DEMO_CardItemPage
