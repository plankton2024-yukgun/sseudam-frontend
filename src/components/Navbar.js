// src/components/Navbar.js
import React from 'react';

function Navbar() {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.title}>한쓰담</h1>
            <div style={styles.menu}>
                <a href="/">홈</a>
                <a href="/posts">피드</a>
                <a href="/user">마이페이지</a>
                <a href="/board">게시판</a>
            </div>
        </nav>
    );
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
    },
    title: {
        fontSize: '24px',
    },
    menu: {
        display: 'flex',
        gap: '15px',
    },
};

export default Navbar;
