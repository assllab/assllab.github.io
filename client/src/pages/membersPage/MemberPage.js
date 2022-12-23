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
import JongSeonParkImg from "../../images/membersPage/JongSeonPark.jpg"
import YeJinOhImg from "../../images/membersPage/YeJinOh.png"
import InChulParkImg from "../../images/membersPage/InChulPark.png"
import EunKyoungParkImg from "../../images/membersPage/EunKyoungPark.png"
import ShinJuYongImg from "../../images/membersPage/Shinjuyong.jpg"
import HaeNyLeeImg from "../../images/membersPage/HaenyLee.jpg"
import SungMokKimImg from "../../images/membersPage/SungMokKim.jpg"
import HyeRanLeeImg from "../../images/membersPage/HyeRanLee.jpg"

function MemberPage() {
    const members = [
        {name: "Jong Seon Park", position: "Ph. D. student", desc: "jonsn.park◾gmail.com", image: JongSeonParkImg},
        {name: "Ye Jin Oh", position: "Ph. D. student", desc: "ohyejin0730◾gmail.com", image: YeJinOhImg},
        {name: "In Chul Park", position: "Master student", desc: "parkinchul601◾gmail.com", image: InChulParkImg},
        {name: "Eun Kyoung Park", position: "Master student", desc: "eunkyoung120◾hanyang.ac.kr", image: EunKyoungParkImg},
        {name: "Ju Yong Shin", position: "Undergraduate Student", desc: "balance0415◾hanyang.ac.kr", image: ShinJuYongImg},
        {name: "Hae Ny Lee", position: "Undergraduate Student", desc: "haeny6060◾hanyang.ac.kr", image: HaeNyLeeImg},
        {name: "Sung Mok Kim", position: "Undergraduate Student", desc: "sungmok06◾hanyang.ac.kr", image: SungMokKimImg},
        {name: "Hye Ran Lee", position: "Undergraduate Student", desc: "hyeran245◾hanyang.ac.kr", image: HyeRanLeeImg},

    ]
    return (
        <div>
            <NavBar normal={"normal"}/>
            <MemberContainer>
                <Title title={"MEMBERS"}/>
                <MemberCard image={professorImg} position={"Professor"} name={"Ji Won Kim"}
                            desc={"Department of Photonics and Nanoelectronics\n" +
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