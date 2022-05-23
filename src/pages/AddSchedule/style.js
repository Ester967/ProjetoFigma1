import React from "react";
import { exp } from "react-native/Libraries/Animated/Easing";
import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient';

export const Container = styled.SafeAreaView`
flex: 1;
background-color: #FFFFFF;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderTitle = styled.Text`
position: absolute;
width: 114px;
height: 24px;
left: 145px;
top: 20px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;


`;

export const HeaderContainer1 = styled.View`
    position: relative;
    width: 32px;
    height: 32px;
    left: 45px;
   top: 19px;

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
    left: 330px;
   top: 20px;

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

export const ContainerThu = styled.View`
position: relative;
width: 315px;
height: 50px;
left: 30px;
top: 40px;
`;
export const TextThu = styled.Text`
position: absolute;
width: 114px;
height: 21px;
left: 50px;
top: 15px;

font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;

export const ContainerTime = styled.View`
position: relative;
width: 415px;
height: 200px;
left: 0px;
top: 60px;
`;

export const TextTime = styled.Text`
position: absolute;
width: 35px;
height: 21px;
left: 45px;
top: 0px;

font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;

`;

export const ContainerTwo = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 30px;
`;

export const ContainerTree = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 68px;
`;

export const ContainerFor = styled.View`
position: absolute;
width: 415px;
height: 50px;
left: 0px;
top: 115px;
`;

export const TextNumber = styled.Text`
position: absolute;
width: 10px;
height: 18px;
left: 155px;
top: 0px;

font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
color: rgba(173, 164, 165, 0.35);
`;

export const TextNumber2 = styled.Text`
position: absolute;
width: 18px;
height: 18px;
left: 200px;
top: 0px;

font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
color: rgba(173, 164, 165, 0.35);
`;

export const TextNumber3 = styled.Text`
position: absolute;
width: 25px;
height: 18px;
left: 255px;
top: 0px;

font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
color: rgba(173, 164, 165, 0.35);
`;

export const TextNumberBold1 = styled.Text`
position: absolute;
width: 21px;
height: 21px;
left: 155px;
top: 5px;

font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;

export const TextNumberBold2 = styled.Text`
position: absolute;
width: 21px;
height: 21px;
left: 200px;
top: 5px;

font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;

export const TextNumberBold3 = styled.Text`
position: absolute;
width: 25px;
height: 21px;
left: 255px;
top: 5px;

font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;

export const Line1 = styled.View`
position: absolute;
width: 415px;
height: 0px;
left: 0px;
top: 30px;

/* Border-Color */

border: 0.8px solid #F7F8F8;
`;

export const Line2 = styled.View`
position: absolute;
width: 415px;
height: 0px;
left: 0px;
top: 35px;

/* Border-Color */

border: 0.8px solid #F7F8F8;
`;

export const ContainerDetails = styled.View`
position: relative;
width: 385px;
height: 300px;
left:45px;
top:40px;
`;
export const TextDetails = styled.Text`
position: absolute;
width: 112px;
height: 21px;
left: 0px;
top: 0px;

font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;
`;

export const ContainerChoose = styled.View`
position: absolute;
width: 315px;
height: 50px;
left: 0px;
top: 35px;

/* Border-Color */

background: #F7F8F8;
border-radius: 16px;
`;
export const ContainerDifficulity = styled.View`
position: absolute;
width: 315px;
height: 50px;
left: 0px;
top: 100px;

/* Border-Color */

background: #F7F8F8;
border-radius: 16px;
`;
export const ContainerRepetitions = styled.View`
position: absolute;
width: 315px;
height: 50px;
left: 0px;
top: 165px;

/* Border-Color */

background: #F7F8F8;
border-radius: 16px;
`;
export const ContainerWeights = styled.View`
position: absolute;
width: 315px;
height: 50px;
left: 0px;
top: 230px;

/* Border-Color */

background: #F7F8F8;
border-radius: 16px;
`;

export const TextContainerDetails = styled.Text`
position: absolute;
width: 119px;
height: 18px;
left: 45px;
top: 15px;

font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;

export const TextContainerDetails2 = styled.Text`
position: absolute;
width: 100px;
height: 15px;
right: 40px;
top: 15px;
text-align: right;
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
/* identical to box height, or 150% */


/* gray-2 */

color: #ADA4A5;

`;

export const IconArrow = styled.View`
position: absolute;
top: 15px;
right: 20px;
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
top: 150px;
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