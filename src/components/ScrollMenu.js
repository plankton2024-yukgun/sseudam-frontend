// src/components/ScrollMenu.js
import React from 'react';

function ScrollMenu() {
    return (
        <div style={styles.scrollMenu}>
            <a href="/">홈</a>
            <a href="/posts">피드</a>
            <a href="/user">마이페이지</a>
            <a href="/board">게시판</a>
        </div>
    );
}

const styles = {
    scrollMenu: {
        position: 'fixed',
        top: '100px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        backgroundColor: '#333',
        padding: '10px',
        borderRadius: '5px',
        color: '#fff',
    },
};

export default ScrollMenu;