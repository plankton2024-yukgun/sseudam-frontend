// src/components/UploadPost.js
import React, { useState } from 'react';

function UploadPost() {
    const [content, setContent] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // 업로드 API 호출
    };

    return (
        <div>
            <h2>게시물 업로드</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="게시물 내용"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="위치"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <button type="submit">업로드</button>
            </form>
        </div>
    );
}

export default UploadPost;