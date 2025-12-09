import type { Book } from '../types'

interface BookListResult {
    list: Book[] | undefined
    loading: boolean
    error: Error | null
}
export const useBookList = (): BookListResult => {
    return {
        list: [],
        loading: false,
        error: null,
    }
}
