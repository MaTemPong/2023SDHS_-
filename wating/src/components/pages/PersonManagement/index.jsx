import React from "react";
import * as S from "./styled"
import ManagementTitle from "../../atoms/ManagementTitle";

const PersonManagement = () => {
    return(
        <S.Wrap>
            <ManagementTitle text={"인원 관리"}/>
        </S.Wrap>
    )
}

export default PersonManagement;