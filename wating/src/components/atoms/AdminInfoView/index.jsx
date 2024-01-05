import React from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";

const AdminInfoView = ({link, text}) => {
    return(
        <S.Main>
           <h3>Matempon님</h3>
           <h4>SDHS 급식</h4>
           <p>현재 데이터베이스의 80%를 사용했습니다.</p>
        </S.Main>
    )
}
export default AdminInfoView;