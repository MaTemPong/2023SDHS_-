import React from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";
import { MenuCheck } from "../../../utils/urlEvent";


const MainList = ({link, text}) => {
    return(
        <S.Main>
            <Link to={link} style={{color:"#dbe4e3"}}>{text}</Link>
        </S.Main>
    )
}
export default MainList;