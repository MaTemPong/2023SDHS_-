import React from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";

const MainList = ({children, link, onClick, state}) => {

    return(
        <S.Main>
            <Link onClick={onClick} to={link} style={{color: state ? '#cb98f5' : '#dbe4e3' }}>{children}</Link>
        </S.Main>
    )
}
export default MainList;