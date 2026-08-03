import React from 'react';
import {MemberContainer} from "./memberPageStyles";
import NavBar from "../../components/navbar/NavBar";
import Title from "../../components/title/Title";
import MemberCard from "../../components/memberCard/MemberCard";
import professorImg from '../../images/membersPage/professor.jpg'
import EducationList from "../../components/EducationList/EducationList";
import ArticleList from "../../components/articleList/ArticleList";
import BorderLine from "../../components/borderLine/borderLine";
import hoonJungImg from "../../images/membersPage/HoonJung.jpg"
import EunKyoungParkImg from "../../images/membersPage/EunKyoungPark.png"
import InChulParkImg from "../../images/membersPage/InChulPark.png"
import JeongSeopLeeImg from "../../images/membersPage/JeongSeopLee.jpg"
import HyunJaeChoImg from "../../images/membersPage/HyunJaeCho.jpg"

function MemberPage() {
    const members = [
        {name: "Jun Ho Lee", position: "Master student", desc: "leejunho91◾taihanfiber.com"},
        {name: "Eun Kyoung Park", position: "Ph.D student", desc: "eunkyoung120◾hanyang.ac.kr", image: EunKyoungParkImg},
        {name: "In Chul Park", position: "Ph.D student", desc: "parkinchul601◾gmail.com", image: InChulParkImg},
        {name: "Hyun Jae Cho", position: "Master student", desc: "woguswo9532◾gmail.com", image: HyunJaeChoImg},
        {name: "Jeong Seop Lee", position: "Ph.D student", desc: "jeongseop◾outlook.com", image: JeongSeopLeeImg},
        {name: "Na Gyeong Kim", position: "Ph.D student", desc: "knk6103◾gmail.com"},
    ]
    return (
        <div>
            <NavBar normal={"normal"}/>
            <MemberContainer>
                <Title title={"MEMBERS"}/>
                <MemberCard image={professorImg} position={"Professor"} name={"Ji Won Kim"}
                            desc={"Department of Photonics and Nanoelectronics\n"+
                                    "Hanyang University, ERICA campus\n" +
                                    "jwk7417◾hanyang.ac.kr\n"}/>
                <Title size={"small"} title={"Education"}/>
                <EducationList/>
                {/*<Title size={"small"} title={"Main article"}/>*/}
                {/*<ArticleList/>*/}
                <BorderLine/>
                <MemberCard image={hoonJungImg} position={"공동 연구 "} name={"Hoon Jung"}
                            desc={"KITECH (Korean Institute of Industrial Technology)\n" +
                            "hoonj◾kitech.re.kr\n"}/>
                {
                    members.map(member => (
                        <React.Fragment key={member.name}>
                            <BorderLine/>
                            <MemberCard image={member.image} name={member.name} desc={member.desc}
                                        position={member.position} member={"member"}/>
                        </React.Fragment>
                    ))
                }
                <BorderLine/>
                <Title title={"ALUMNI"}/>
                <ArticleList alumni={"alumni"}/>

            </MemberContainer>
        </div>
    );
}

export default MemberPage;