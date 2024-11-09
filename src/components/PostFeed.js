// src/components/PostFeed.js
import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/postService';

function PostFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts().then(data => setPosts(data));
    }, []);

    return (
        <div>
            <h2>게시물 피드</h2>
            {posts.map(post => (
                <div key={post.id} style={styles.post}>
                    <h3>{post.content}</h3>
                    <p>{post.location}</p>
                    <button>쓰담쓰담</button>
                    <button>댓글 달기</button>
                </div>
            ))}
        </div>
    );
}

const styles = {
    post: {
        border: '1px solid #ddd',
        padding: '10px',
        marginBottom: '10px',
    },
};

export default PostFeed;
