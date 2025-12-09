import type { Board, BoardCreateDto } from '../types'

/**
 * 전체 게시글 목록 조회
 * BoardPostListResponse 에서 .data만 꺼내서 BoardPost[]로 반환
 */
export const fetchBoards = async (): Promise<Board[]> => {
    return []
}

/**
 * 게시글 등록 API
 */
export const createBoard = async (newPost: BoardCreateDto): Promise<Board> => {
    console.log(newPost)
    return {
        content: '',
        generatedTime: '',
        id: 1,
        modifiedTime: '',
        subject: '',
        userId: '',
    }
}
