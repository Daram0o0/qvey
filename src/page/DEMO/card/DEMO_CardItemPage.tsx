import Card from '@/widgets/card/ui/Card'

function DEMO_CardItemPage() {
    return (
        <div>
            <h1>DEMO Card Item Page</h1>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default DEMO_CardItemPage
