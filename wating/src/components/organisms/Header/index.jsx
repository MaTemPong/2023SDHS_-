import React from "react";
import * as S from './styled';
import { Link } from "react-router-dom";
import logo from '../../../media/logo.png'
const Header = () => {
    return (
        <S.StyledHeader>
            <img src={logo} width={"90%"}/>
            <S.Menu>
                <li><Link to="/">웨이트관리</Link></li>
                <li><Link to="/">인원관리</Link></li>
                <li><Link to="/">조직관리</Link></li>
            </S.Menu>
        </S.StyledHeader>
    );
}

export default Header;
