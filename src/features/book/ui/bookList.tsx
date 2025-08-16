import type { Book } from '../types'
import BookCard from './BookCard'
import style from './BookList.module.css'

type BookListProp = {
    books: Book[]
}
function BookList({ books }: BookListProp) {
    return (
        <div className={style.container}>
            <div className={style.top}>
                <p>뭔가 들어 갈것 같은데 아이디어 없음</p>
            </div>
            <ul>
                <li>
                    {books.map((book) => (
                        <BookCard key={book.id} {...book} />
                    ))}
                </li>
            </ul>
        </div>
    )
}

export default BookList
