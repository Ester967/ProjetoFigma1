import React from "react";
import { exp } from "react-native/Libraries/Animated/Easing";
import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient';

export const Container = styled.View`
    flex: 1;
    
`;
export const Scroller = styled.ScrollView`
flex: 1;
padding:20px;
background-color: #FFFFFF;
`;
export const HeaderArea = styled.View`
top: 10px;
`;

export const HeaderContainer1 = styled.View`
    position: relative;
    width: 32px;
    height: 32px;
    left: 30px;
    top: 40px;

    background: #F7F8F8;
    border-radius: 8px;
`;
export const HeaderIcon1 = styled.View`
    position: absolute;
    width: 9.33px;
    height: 20.67px;
    left: 10px;
    top: 10px;
`;

export const HeaderContainer2 = styled.View`
    position: absolute;
    width:32px;
    height:32px;
    left: 313px;
    top: 40px;

    background: #F7F8F8;
    border-radius: 8px;
`;
export const HeaderIcon2 = styled.View`
    position:absolute ;
    top: 13px ;
    left:11px ;
`;

export const HeaderIcon3 = styled.View`
    position:absolute ;
    top: 13px ;
    left:17px ;
`;
export const HeaderTitle = styled.Text`
 position: absolute;
    width: 145px;
    height: 24px;
    left: 112px;
    top: 44px;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */


    /* Black-color */

    color: #1D1617;
`;

export const ContainerMonth = styled.View`
position: relative;
width: 420px;
height: 150px;
right: 20px;
top: 80px;
border-radius: 22px;
`;

export const ContainerMay = styled.View`
position: relative;
width: 315px;
height: 100px;
left: 45px;
top: 0px;
border-radius: 22px;
`;

export const IconMay = styled.View`
position: absolute;
left: 80px;
top: 3px;

`;
export const IconMay2 = styled.View`
position: absolute;
left: 220px;
top: 3px;
`;

export const TextMay = styled.Text`
position: absolute;
width: 63px;
height: 21px;
left: 125px;
top: 0px;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height, or 150% */


/* gray-2 */

color: #ADA4A5;
`;

export const ContainerTue = styled.View`
position: absolute;
width: 60px;
height: 80px;
left: -15px;
top: 39px;
display: flex;
justify-content: center;
align-items: center;
background: #F7F8F8;
border-radius: 10px;
`;
export const ContainerWed = styled.View`
position: absolute;
width: 60px;
height: 80px;
left: 65px;
top: 39px;
display: flex;
justify-content: center;
align-items: center;
background: #F7F8F8;
border-radius: 10px;
`;
export const ContainerThus = styled.View`
position: absolute;
width: 60px;
height: 80px;
left: 145px;
top: 39px;
display: flex;
justify-content: center;
align-items: center;
background: #F7F8F8;
border-radius: 10px;
`;
export const ContainerFri = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD", "#9DCEFF"],

})`
position: absolute;
width: 60px;
height: 80px;
left: 225px;
top: 39px;
display: flex;
border-radius: 10px;
`;

export const TextFri = styled.Text`
position: absolute;
width: 15px;
height: 21px;
left: 23px;
top: 15px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 21px;
/* identical to box height, or 175% */


/* white-color */

color: #FFFFFF;
`;
export const NumberFri = styled.Text`
position: absolute;
width: 16px;
height: 18px;
left: 23px;
top: 46px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
/* identical to box height, or 129% */


/* white-color */

color: #FFFFFF;

`;

export const ContainerSat = styled.View`
position: absolute;
width: 60px;
height: 80px;
left: 305px;
top: 39px;

justify-content: center;
align-items: center;
background: #F7F8F8;
border-radius: 10px;
`;

export const TextSat = styled.Text`
position: absolute;
width: 19px;
height: 21px;

top: 15px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 21px;
/* identical to box height, or 175% */


/* gray-1 */

color: #7B6F72;

`;
export const ContainerSun = styled.View`
position: absolute;
width: 60px;
height: 80px;
left: 385px;
top: 39px;
display: flex;
justify-content: center;
align-items: center;
background: #F7F8F8;
border-radius: 10px;
`;
export const TextWeek = styled.Text`
position: absolute;
width: 27px;
height: 21px;

top: 15px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 21px;
/* identical to box height, or 175% */


/* gray-1 */

color: #7B6F72;
`;

export const NumberWeek = styled.Text`
position: absolute;
width: 16px;
height: 18px;
top: 45px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
/* identical to box height, or 129% */


/* gray-1 */

color: #7B6F72;

`;

export const ContainerTL = styled.View`
position: relative;
width: 420px;
height: 650px;
right: 20px;
top: 90px;
border-radius: 22px;
`;

export const Container1 = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 0px;
border-radius: 22px;
`;
export const Container2 = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 40px;


border-radius: 22px;
`;
export const Container3 = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 80px;


border-radius: 22px;
`;
export const Container4 = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 120px;


border-radius: 22px;
`;
export const Container5 = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 160px;


border-radius: 22px;
`;
export const Container6 = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 200px;


border-radius: 22px;
`;
export const Container7 = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 240px;


border-radius: 22px;
`;
export const Container8 = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 280px;


border-radius: 22px;
`;
export const Container9 = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 320px;


border-radius: 22px;
`;
export const Container10 = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 360px;


border-radius: 22px;
`;
export const Container11 = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 400px;


border-radius: 22px;
`;
export const Container12 = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 440px;


border-radius: 22px;
`;
export const Container13 = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 480px;


border-radius: 22px;
`;
export const Container14 = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 520px;


border-radius: 22px;
`;

export const Container15 = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 560px;


border-radius: 22px;
`;

export const Time = styled.Text`
position: absolute;
width: 63px;
height: 18px;
left: 45px;
top: 0px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;
`;
export const Line = styled.View`
position: absolute;
width: 420px;
height: 0px;
right: 5px;
top: 30px;

/* Border-Color */

border: 1px solid #F7F8F8;

`;

export const ContainerLineBlue = styled.View`
position: absolute;
width: 180px;
height: 11px;
left: 125px;
top: 16px;
background: #F7F8F8;
border-radius: 100px;

`;
export const LineBlue = styled.View`
position: absolute;
width: 400px;
height: 0px;
right: -115px;
top: 0px;

/* Border-Color */

border: 1px solid #92A3FD;



`;

export const ContainerAB = styled(LinearGradient).attrs({
    start:{x:1, y:0},
    end:{x:-1, y:0},
    colors: [ "#C58BF2", "#EEA4CE"],

})`
position: absolute;
width: 149px;
height: 35px;
left: 284px;
top: 15px;
opacity: 0.8;
border-radius: 18px;
`;

export const TextAB = styled.Text`
position: absolute;
width: 119px;
height: 18px;
left: 12px;
top: 8px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */

text-align: right;

/* white-color */

color: #FFFFFF;

`;

export const ContainerUpperbody = styled(LinearGradient).attrs({
    start:{x:1, y:0},
    end:{x:-1, y:0},
    colors: [ "#C58BF2", "#EEA4CE"],

})`
position: absolute;
width: 184px;
height: 35px;
left: 123px;
top: 30px;
border-radius: 18px;
opacity: 0.8;
`;

export const TextUpperbody = styled.Text`
position: absolute;
width: 154px;
height: 18px;
left: 15px;
top: 8px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* white-color */

color: #FFFFFF;

`;

export const ContainerLowerbody = styled.View`
position: absolute;
width: 182px;
height: 35px;
left: 125px;
top: 30px;

/* Border-Color */

background: #F7F8F8;
opacity: 0.8;
border-radius: 50px;
`;

export const TextLowerbody = styled.Text`
position: absolute;
width: 152px;
height: 18px;
left: 15px;
top: 9px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;
`;

export const ContainerButtonPlus = styled(LinearGradient).attrs({
    start:{x:1, y:0},
    end:{x:-1, y:0},
    colors: [ "#C58BF2", "#EEA4CE"],

})`
    position: relative;
    height: 60px;
    width: 60px;
    left: 300px;
    top: -55px;
    border-radius: 30px;
    box-shadow: 0px 10px 22px rgba(197, 139, 242, 0.3);
    justify-content: center;
    align-items: center;
`;


