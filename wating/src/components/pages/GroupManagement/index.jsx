import React from "react";
import * as S from "./styled"
import ManagementTitle from "../../atoms/ManagementTitle";

const GroupManagement = () => {
    return(
        <S.Wrap>
            <ManagementTitle text={"조직 관리"}/>
        </S.Wrap>
    );
}

export default GroupManagement;