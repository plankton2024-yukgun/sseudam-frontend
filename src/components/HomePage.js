// src/components/HomePage.js
import React from 'react';
import ScrollMenu from './ScrollMenu';

function HomePage() {
    return (
        <div style={styles.container}>
            <ScrollMenu />
            <h2>한쓰담 홈 화면</h2>
            <p>여러분의 플로깅 활동을 공유해보세요.</p>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
    },
};

export default HomePage;
