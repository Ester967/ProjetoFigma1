import React from "react";
import { exp } from "react-native/Libraries/Animated/Easing";
import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient';

export const Container = styled.View`
    flex: 1;
    width: 415px;
    height: 1250px;
`;


export const Scroller = styled.ScrollView` 
    flex: 1;
    background: #FFFFFF;
`;
export const HeaderContainer1 = styled.View`
position: absolute;
width: 32px;
height: 32px;
left: 30px;
top: 44px;
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
    right: 30px;
    top: 44px;
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
export const ContainerImg = styled.View`
position: relative;
width: 315px;
height: 150px;
left: 49px;
top: 100px;
`;

export const TextImg = styled.Text`
position: absolute;
width: 116px;
height: 24px;
left: 0px;
top: 172px;


font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;
`;
export const TextImg2 = styled.Text`
position: absolute;
width: 143px;
height: 18px;
left: 0px;
top: 202px;


font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;

export const ContainerDescriptions = styled.View`
position: relative;
width: 315px;
height: 150px;
left: 49px;
top: 190px;

`;
export const TextDescriptions = styled.Text`
position: absolute;
width: 102px;
height: 24px;
left: 0px;
top: 0px;


font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;

`;
export const TextDescriptions2 = styled.Text`
position: absolute;
width: 315px;
height: 72px;
left: 0px;
top: 40px;


font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* or 150% */


/* gray-1 */

color: #7B6F72;

`;

export const TextRD = styled.Text`
position: absolute;
top: 94px;
left: 148px;


font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* or 150% */


/* gray-1 */

color:#92A3FD;
`;

export const ContainerHTDI = styled.View`
position: relative;
width: 315px;
height: 400px;
left: 49px;
top: 180px;
border-radius: 22px;

`;

export const TituloHow = styled.Text`
position: absolute;
width: 156px;
height: 21px;
left: 62px;
top: 0px;


font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;

`;
export const TextHow = styled.Text`
position: absolute;
width: 253px;
height: 72px;
left: 62px;
top: 28px;


font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* or 150% */


/* gray-1 */

color: #7B6F72;

`;

export const ContainerSpread = styled.View`
position: relative;
width: 315px;
height: 110px;
left: 0px;
top: 35px;
border-radius: 22px;
`;

export const ImgCircle = styled.View`
top: 0px;
left: 25px;
`;
export const ImgLine = styled.View`
top: 5px;
left: 35px;
`;

export const Num = styled.Text`
position: absolute;
top: 0px;
left: 0px;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #C58BF2;
`;
export const ContainerRest = styled.View`
position: relative;
width: 315px;
height: 110px;
left: 0px;
top: 35px;
border-radius: 22px;
`;
export const ContainerAdjust = styled.View`
position: relative;
width: 315px;
height: 110px;
left: 0px;
top: 35px;
border-radius: 22px;
`;
export const ContainerClapping = styled.View`
position: relative;
width: 315px;
height: 120px;
left: 0px;
top: 35px;
border-radius: 22px;
`;

export const ContainerCustom = styled.View`
position: relative;
width: 355px;
height: 150px;
left: 30px;
top: 290px;
border-radius: 22px;
`;

export const TextCalories = styled.Text`
position: relative;
width: 88px;
height: 15px;
left: 60px;
top: 50px;


font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
/* identical to box height, or 150% */


/* gray-2 */
color: rgba(173, 164, 165, 0.2);

`;

export const Line1 = styled.View`
position: relative;
width: 335px;
height: 0px;
left: 10px;
top: 40px;

/* gray-3 */

border: 0.8px solid #DDDADA;

`;
export const Line2 = styled.View`
position: absolute;
width: 335px;
height: 0px;
left: 10px;
top: 130px;

/* gray-3 */

border: 0.8px solid #DDDADA;

`;

export const Text30Calories = styled.Text`
position: relative;
width: 88px;
height: 15px;
left: 50px;
top: 55px;


font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
/* identical to box height, or 150% */


/* gray-2 */

color: #ADA4A5;
`;

export const Number30 = styled.Text`
position: relative;
width: 30px;
height: 36px;
left: 145px;
top: 28px;


font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;
`;

export const Number31 = styled.Text`
position: relative;
width: 22px;
height: 27px;
left: 150px;
top: 28px;


font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
/* identical to box height, or 150% */


/* gray-2 */

color: #ADA4A5;

opacity: 0.2;
`;

export const CaloriesTimes = styled.Text`
position: absolute;
width: 45px;
height: 24px;
left: 185px;
top: 92px;


font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* gray-2 */

color: #ADA4A5;

`;

export const NumberCalories = styled.Text`
position: relative;
width: 22px;
height: 27px;
left: 150px;
top: 28px;


font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
/* identical to box height, or 150% */


/* gray-2 */

color: #ADA4A5;

opacity: 0.2;
`;

export const ImgFire = styled.View`
position: absolute;
top: 50px;
left: 40px;
opacity: 0.2;
`;
export const ImgFire30 = styled.View`
position: absolute;
top: 98px;
left: 30px;
`;
export const ImgFire31 = styled.View`
position: absolute;
top: 145px;
left: 40px;
opacity: 0.2;
`;

export const ContainerButtonSave = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD", "#9DCEFF"],

})`
position: relative;
width: 315px;
height: 60px;
left: 45px;
top: 340px;
box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
border-radius: 30px;

`;
export const TextSave = styled.Text`
position: absolute;
width: 41px;
height: 24px;
left: 137px;
top: 18px;


font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* white-color */

color: #FFFFFF;
`;