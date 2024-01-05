import React from "react";
import * as S from './styled';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <S.StyledHeader>
            <h1>웨이트론</h1>
            <S.Menu>
                <li><Link to="/">웨이트 관리</Link></li>
                <li><Link to="/">인원관리</Link></li>
                <li><Link to="/">조직관리</Link></li>
            </S.Menu>
            <S.Menu>
                <li><Link to="/">로그인</Link></li>
                <li><Link to="/">회원가입</Link></li>
            </S.Menu>
        </S.StyledHeader>
    );
}

export default Header;
