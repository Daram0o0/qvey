import style from './BookPage.module.css'
import { useLoaderData } from 'react-router'
import type { Book } from '@/features/book/types'
import { useCallback, useState } from 'react'
import AuthComponent from '@/shared/component/AuthComponent'

function BookPage() {
    const books = useLoaderData<Book[]>()
    const [book, setBook] = useState<Book>()
    const handleBook = useCallback((book: Book) => {
        setBook(book)
    }, [])
    return (
        <div className={style.container}>
            {/* <BookList books={books} onClick={handleBook} /> */}
            <section>
                {book ? (
                    /**
                     * TODO
                     * - Question Component 필요
                     * - Select 한 Book 이 있을 경우 여기에 Render 해야함
                     */
                    <div>
                        <h1>{book.title}</h1>
                    </div>
                ) : (
                    <div className={style.nodata}>
                        <p>문제집을 선택하여주십시오</p>
                    </div>
                )}
            </section>
        </div>
    )
}
export default BookPage
