import React from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";

const MoveTo = ({link, text}) => {
    return(
        <S.MainDiv>
            <Link to={link}>{text}</Link>
        </S.MainDiv>
    )
}
export default MoveTo;