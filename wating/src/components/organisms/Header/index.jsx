import { useState } from "react";
import * as S from './styled';
import logo from '../../../media/logo.png'
import MainList from "../../atoms/MainList";
import AdminInfoView from "../../atoms/AdminInfoView"

const Header = () => {

    const [wait, setWait] = useState(false);
    const [person, setPerson] = useState(false);
    const [group, setGroup] = useState(false);

    const onClick = (props) => {
        if(props === 'wait'){
            setWait(true);
            setPerson(false);
            setGroup(false);
        }else if(props === 'person'){
            setWait(false);
            setPerson(true);
            setGroup(false);
        }else{
            setWait(false);
            setPerson(false);
            setGroup(true);
        }
    }

    return (
        <S.StyledHeader>
            <div>
                <img src={logo} width={"100%"} style={{padding: "20px"}}/>
                <S.Menu>
                    <MainList state={wait} onClick={() => onClick('wait')} link={'/waitList'}>웨이팅관리</MainList>
                    <MainList state={person} onClick={() => onClick('person')} link={'/personList'}>인원관리</MainList>
                    <MainList state={group} onClick={() => onClick('group')} link={'/groupList'}>조직관리</MainList>
                </S.Menu>
            </div>
            <AdminInfoView></AdminInfoView>
        </S.StyledHeader>
    );
}

export default Header;
