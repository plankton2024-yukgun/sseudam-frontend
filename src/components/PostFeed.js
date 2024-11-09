// src/components/PostFeed.js
import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/postService';

function PostFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts().then(data => setPosts(data));
    }, []);

    return (
        <div style={styles.container}>
            <h2>게시물 피드</h2>
            <div style={styles.scrollableFeed}>
                {posts.map(post => (
                    <div key={post.postId} style={styles.post}>
                        <h3>{post.content}</h3>
                        <p>{post.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
    },
    scrollableFeed: {
        height: '400px', // 고정된 높이를 설정하여 스크롤 필요
        overflowY: 'auto', // 세로 스크롤 활성화
        border: '1px solid #ddd',
        padding: '10px',
    },
    post: {
        borderBottom: '1px solid #ddd',
        padding: '10px 0',
    },
};

export default PostFeed;