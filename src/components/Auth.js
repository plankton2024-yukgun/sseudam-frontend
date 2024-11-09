// src/components/Auth.js
import React, { useState } from 'react';

function Auth() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div style={styles.container}>
            <h2>{isLogin ? "로그인" : "회원가입"}</h2>
            <form>
                <input type="text" placeholder="아이디" required />
                <input type="password" placeholder="비밀번호" required />
                {!isLogin && <input type="email" placeholder="이메일" required />}
                <button type="submit">{isLogin ? "로그인" : "회원가입"}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "회원가입 하기" : "로그인 하기"}
            </button>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
    },
};

export default Auth;
