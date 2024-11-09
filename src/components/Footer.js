// src/components/Footer.js
import React from 'react';

function Footer() {
    return (
        <footer style={styles.footer}>
            <a href="/">홈</a>
            <a href="/posts">피드</a>
            <a href="/user">마이페이지</a>
            <a href="/board">게시판</a>
        </footer>
    );
}

const styles = {
    footer: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 0',
        backgroundColor: '#FFFFFF',
        color: '#fff',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
};

export default Footer;
