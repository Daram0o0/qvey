import React from 'react'
import type { Board } from '@/features/board/types'

export const BoardList: React.FC = () => {
    return (
        <div>
            {[]!.map((post: Board) => (
                <div key={post.id}>
                    <h2>{post.subject}</h2>
                    <p>{post.content}</p>
                    <p>
                        {post.userId} · {new Date(post.generatedTime).toLocaleString()}
                    </p>
                </div>
            ))}
        </div>
    )
}
