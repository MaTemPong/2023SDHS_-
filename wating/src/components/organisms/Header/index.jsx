import React from "react";
import * as S from './styled';
import { Link } from "react-router-dom";
import logo from '../../../media/logo.png'
import MainList from "../../atoms/MainList";
import AdminInfoView from "../../atoms/AdminInfoView"

const Header = () => {
    const urlList = [
        {
            url: '/waitList',
            content: '웨이팅관리'
        },
        {
            url: '/personList',
            content: '인원관리'
        },
        {
            url: '/groupList',
            content: '조직관리'
        }
    ]
    return (
        <S.StyledHeader>
            <div>
                <img src={logo} width={"100%"} style={{padding: "20px"}}/>
                <S.Menu>
                    <MainList link={'/waitList'} text={"웨이팅관리"}/>
                    <MainList link={'/personList'} text={"인원관리"}/>
                    <MainList link={'/groupList'} text={"조직관리"}/>
                </S.Menu>
            </div>
            <AdminInfoView></AdminInfoView>
        </S.StyledHeader>
    );
}

export default Header;
