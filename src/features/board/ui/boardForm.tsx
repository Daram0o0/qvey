import React, { useState } from 'react'

export const BoardForm: React.FC = () => {
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!subject || !content) {
            alert('제목과 내용을 입력해주세요.')
            return
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="제목" value={subject} onChange={(e) => setSubject(e.target.value)} />
            <textarea placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)} />
            <button type="submit">게시글 등록</button>
        </form>
    )
}
