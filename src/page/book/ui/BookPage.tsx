import BookCard from '@/features/book/ui/BookCard'
import style from './BookPage.module.css'
import { BookList } from '@/features/book/ui'
import { useLoaderData } from 'react-router'
import type { Book } from '@/features/book/types'
import { useCallback } from 'react'

function BookPage() {
    const books = useLoaderData<Book[]>()
    const handleBook = useCallback((book: Book) => {
        console.log('Handle Book!')
        console.log(book)
    }, [])
    return (
        <div className={style.container}>
            <BookList books={books} onClick={handleBook} />
            <div
                style={{
                    backgroundColor: '#fff',
                    flex: 1,
                    overflowY: 'auto',
                }}
            >
                <h1 style={{ fontSize: '1.5em' }}>선택한 문제집</h1>
                <BookCard
                    book={{
                        description: '문제 설명',
                        title: ' 테스트 문제 입니다.',
                        id: 1,
                    }}
                />
            </div>
        </div>
    )
}
export default BookPage
