import type { Book } from '../types'
import style from './BookCard.module.css'
type BookCardProp = {
    book: Book
    onClick?: (book: Book) => void
}
function BookCard({ book, onClick = () => {} }: BookCardProp) {
    return (
        <div className={style.card} onClick={() => onClick(book)}>
            <div className={style.subject}>
                <i>👍</i>
                <span>
                    <p>{book.title}</p>
                </span>
            </div>
            <div className={style.description}>
                <p>{book.description}</p>
            </div>
        </div>
    )
}

export default BookCard
