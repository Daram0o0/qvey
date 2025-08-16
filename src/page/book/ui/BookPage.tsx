import BookCard from '@/features/book/ui/BookCard'
import style from './BookPage.module.css'
import { BookList } from '@/features/book/ui'
import { useLoaderData } from 'react-router'
import type { Book } from '@/features/book/types'

function BookPage() {
    const books = useLoaderData<Book[]>()
    return (
        <div className={style.container}>
            <BookList books={books} />
            <div
                style={{
                    backgroundColor: '#fff',
                    flex: 1,
                    overflowY: 'auto',
                }}
            >
                <h1 style={{ fontSize: '1.5em' }}>선택한 문제집</h1>
                <BookCard description="문제 설명" id={1} title="문제 1" key={2} />
                <BookCard description="문제 설명" id={1} title="문제 1" key={2} />
                <BookCard description="문제 설명" id={1} title="문제 1" key={2} />
                <BookCard description="문제 설명" id={1} title="문제 1" key={2} />
                <BookCard description="문제 설명" id={1} title="문제 1" key={2} />
                <BookCard description="문제 설명" id={1} title="문제 1" key={2} />
                <BookCard description="문제 설명" id={1} title="문제 1" key={2} />
                <BookCard description="문제 설명" id={1} title="문제 1" key={2} />
            </div>
        </div>
    )
}
export default BookPage
