import style from './BookPage.module.css'
import type { Book } from '@/features/book/types'
import { useState } from 'react'

function BookPage() {
    const [book] = useState<Book>()
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
