// src/components/PostDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
    const { postId } = useParams();

    return (
        <div>
            <h2>Post Detail Page</h2>
            <p>Post ID: {postId}</p>
        </div>
    );
}

export default PostDetail;
