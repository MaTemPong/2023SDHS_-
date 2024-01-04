import React from "react";
import * as S from './styled';
import { Link } from "react-router-dom";
import MoveTo from "../../atoms/MoveTo";
const Header = () => {
    return (
        <S.StyledHeader>
            <h1>웨이트론</h1>
            <ul>
                <li><MoveTo link="/" text="웨이트 관리"/></li>
                <li><MoveTo link="/" text="인원 관리"/></li>
                <li><MoveTo link="/" text="조직 관리"/></li>
            </ul>
        </S.StyledHeader>
    );
}

export default Header;
