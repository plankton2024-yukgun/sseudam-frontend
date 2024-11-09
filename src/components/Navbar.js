// src/components/Navbar.js
import React from 'react';
import logo from '../assets/logo.png'; // 이미지 파일 경로를 import

function Navbar() {
    return (
        <nav style={styles.navbar}>
            <img src={logo} alt="Logo" style={styles.logo} /> {/* 이미지 추가 */}
            <h1 style={styles.title}>한쓰담</h1>

        </nav>
    );
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#fff',
        color: '#fff',
    },
    logo: {
        height: '50px', // 이미지 높이 조절
        marginRight: '10px', // 로고와 텍스트 사이의 간격
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
