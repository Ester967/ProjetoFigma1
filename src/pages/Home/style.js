import React from "react";
import { exp } from "react-native/Libraries/Animated/Easing";
import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient'; 



export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFFFFF;
    justify-content: space-between;
    align-items: center;
    
`;

export const Scroller = styled.ScrollView` 
    flex: 1;
    background-color: #FFFFFF;
`;


export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderText = styled.Text`
position:relative;
    width: 92px;
    height: 18px;
    top: 0px;
    right: 155px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #ADA4A5;
`;

export const HeaderTitle = styled.Text`
    position:relative;
    width: 138px;
    height: 30px;
    right: 18px;
    top: 25px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    color: #1D1617;
    `;



export const NotificationButton = styled.View`
    position:relative;
    left: 25%;
    right: 10.43%;
    top: 20%;
    bottom: 23.55%;
    
`;

export const AreaButton = styled.View`
    position:relative;
    width: 40px;
    height: 40px;
    top: 20px;
    background: #F7F8F8;
    box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
    border-radius: 8px;
    
`;

export const HeaderContainer = styled(LinearGradient).attrs({
    start:{x:1.3, y:0},
    end:{x:0, y:0},
    colors: ["#92A3FD", "#9DCEFF"],

})`
    position:relative;
    height: 146px;
    width: 315px;
    top: 55px;
    bottom: 0%;
    box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
    border-radius: 22px;
    
`;

export const Bolha = styled.View`
    position: absolute;
    left: 87.3%;
    right: -3.17%;
    top: 67.12%;
    bottom: -1.37%;
    background: #FFFFFF;
    opacity: 0.2;
    border-radius: 22px;
`;

export const Bolha2 = styled.View`
position: absolute;
left: -6.03%;
right: 90.16%;
top: 78.08%;
bottom: -12.33%;
border-radius: 22px;
background: #FFFFFF;
opacity: 0.2;
`;

export const Bolha3 = styled.View`
position: absolute;
left: 41.9%;
right: 55.56%;
top: 72.6%;
bottom: 21.92%;
border-radius: 22px;
background: #FFFFFF;
opacity: 0.2;
`;

export const Bolha4 = styled.View`
position: absolute;
left: 55.56%;
right: 41.9%;
top: 86.99%;
bottom: 7.53%;
border-radius: 22px;
background: #FFFFFF;
opacity: 0.2;
`;

export const Bolha5 = styled.View`
position: absolute;
left: 34.6%;
right: 62.86%;
top: 8.22%;
bottom: 86.3%;
border-radius: 22px;
background: #FFFFFF;
opacity: 0.2;
`;

export const Bolha6 = styled.View`
position: absolute;
left: 53.02%;
right: 44.44%;
top: 15.07%;
bottom: 79.45%;
border-radius: 22px;
background: #FFFFFF;
opacity: 0.2;
`;

export const ContainerTitle = styled.Text`
    position: relative;
    left: 6.35%;
    right: 42.22%;
    top: 17.81%;
    bottom: 67.81%;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
`;

export const ContainerText = styled.Text`
    position: relative;
    left: 6.35%;
    right: 43.81%;
    top: 20%;
    bottom: 52.05%;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
`;

export const MoreButton = styled(LinearGradient).attrs({
    start:{x:-0.5, y:0},
    end:{x:1, y:0},
    colors: [ "#EEA4CE", "#C58BF2"],

})`
    width: 95px;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    position: absolute;
    top: 42px;
    left: 20px;
    right: 200px;
    border-radius: 18px;
`;


export const ButtonText = styled.Text`
    width: 60px;
    height: 10px;
    left: -7px;
    top: 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 10px;
    color: #FFFFFF;
`;

export const Circle = styled.View`
left: 85px;
top: -30px;
box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
`;

export const HalfCircle = styled.Text`
position: absolute;
left: 122px;
top: 35px;

/* Text / Small Text (Semi-bold) */

font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* white-color */

color: #FFFFFF;
`;

export const Container2 = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD33", "#9DCEFF33"],

})`
    position: relative;
    height: 57px;
    width: 315px;
   
    top: 85px;
    border-radius: 16px;
`;

export const TextContainer2 = styled.Text`
position: relative;
left: 6.35%;
right: 63.81%;
top: 31.58%;
bottom: 31.58%;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #1D1617;
`;

export const CheckButton = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD", "#9DCEFF"],

})`
    width: 68px;
    height: 28px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    position: absolute;
    left: 72.06%;
    right: 6.35%;
    top: -5px;
    bottom: 24.56%;

    background: rgba(146, 163, 253, 1);
    border-radius: 14px;

`;

export const TextButtonCheck = styled.Text`
position: absolute;
padding: 15px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height */


/* white-color */

color: #FFFFFF;
`;

export const Text2 = styled.Text`
position: relative;
width: 118px;
height: 24px;
right: 90px;
top: 115px;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #1D1617;
`;

export const ContainerStatistics = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD33", "#9DCEFF33"],

})`
position: relative;
    height: 150px;
    width: 315px;
  
    top: 130px;
    bottom: 0%;
    box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
    border-radius: 20px;
    
`;
export const ImgStatistics = styled.View`
position: absolute;
left: 0%;
right: 0%;
top: 40%;
bottom: 19%;

`;

export const TitleStatistics = styled.Text`
position: absolute;
left: 6.35%;
right: 73.33%;
top: 13.33%;
bottom: 74.67%;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
color: #1D1617;
`;

export const TextStatistics = styled.Text`
position: absolute;
left: 6.35%;
right: 77.46%;
top: 28.67%;
bottom: 57.33%;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
color: rgba(146, 163, 253, 1);
`;

export const TimeButton = styled(LinearGradient).attrs({
    start:{x:-0.5, y:0},
    end:{x:1, y:0},
    colors: [ "#EEA4CE", "#C58BF2"],

})`
position:absolute;
width: 73px;
height: 25px;
left: 51.48%;
right: 26.35%;
top: 37px;
bottom: 60.67%;
box-shadow: 0px 10px 22px rgba(197, 139, 242, 0.3);
border-radius: 12px;
`;

export const DetButton = styled(LinearGradient).attrs({
    start:{x:-0.5, y:0},
    end:{x:1, y:0},
    colors: [ "#EEA4CE", "#C58BF2"],

})`
position:absolute;
width: 10px;
height: 10px;
left: 60.81%;
right: 37.02%;
top: 38%;
bottom: 58%;
border-radius: 11px;
`;

export const TextTimeButton = styled.Text`
position:absolute;
left: 15%;
right: 15%;
top: 24%;
bottom: 30%;
font-style: normal;
font-weight: normal;
font-size: 10px;
color: #FFFFFF;
`;

export const ContainerWater = styled.View`
position:relative;
    height: 315px;
    width: 150px;
    right: 80px;
    top: 146px;
    box-shadow: 0px 10px 40px rgba(29, 36, 42, 0.05);
    border-radius: 20px;
    background: #FFFFFF;
`;

export const ContainerSleep = styled.View`
position:relative;
    height: 150px;
    width: 150px;
    left: 85px;
    top: -168px;
    box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
    border-radius: 20px;
    background: #FFFFFF;
`;

export const ImgSleep = styled.View`
position:absolute;
left: 13.33%;
right: 13.33%;
top: 46%;
bottom: 2%;

`;

export const ContainerCalories = styled.View`
    position:relative;
    height: 150px;
    width: 150px;
    left: 85px;
    top: -158px;
    bottom: 0%;
    box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
    border-radius: 20px;
    background: #FFFFFF;
`;

export const MeterWater = styled.View`
position:absolute;
left: 13.33%;
right: 73.33%;
top: 6.35%;
bottom: 6.35%;
background: #F7F8F8;
border-radius: 30px;
`;

export const ColorMeterWater = styled(LinearGradient).attrs({
    start:{x:0, y:-0.9},
    end:{x:0, y:0.6},
    colors: [ "#C58BF2", "#B4C0FE"],

})`
position:absolute;
left: 13.33%;
right: 73.33%;
top: 45.71%;
bottom: 6.35%;
border-radius: 10px;


`;

export const TextWater = styled.Text`
    position:absolute;
    left: 33.33%;
    right: 14.67%;
    top: 6.35%;
    bottom: 87.94%;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #1D242A;
`;

export const TextWater2 = styled.Text`
    position:absolute;
    left: 33.33%;
    right: 32.67%;
    top: 13.65%;
    bottom: 79.68%;
    color: rgba(146, 163, 253, 1);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
`;

export const TextWater3 = styled.Text`
    position:absolute;
    left: 33.33%;
    right: 5.33%;
    top: 23.49%;
    bottom: 71.75%;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 15px;
    color: #7B6F72;
`;

export const Ball = styled(LinearGradient).attrs({
    start:{x:1, y:0},
    end:{x:-1, y:0},
    colors: [ "#C58BF2", "#EEA4CE"],

})`
    position:absolute;
    left: 34.67%;
    right: 61.33%;
    top: 30.79%;
    bottom: 67.3%;
    opacity: 0.5;
    border-radius: 3px;
`;

export const TextBall = styled.Text`
    position:absolute;
    left: 45.33%;
    right: 23.33%;
    top: 29.84%;
    bottom: 66.35%;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 12px;
    color: #ADA4A5;
`;

export const Straight = styled.View`
position: absolute;
left: 36.67%;
right: 48.67%;
top: 34.29%;
bottom: 65.71%;
`;

export const TextStraight = styled.Text`
    position:absolute;
    left: 45.33%;
    right: 37.33%;
    top: 34.6%;
    bottom: 61.59%;
    color: rgba(146, 163, 253, 1);
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 12px;
`;

export const Ball2 = styled(LinearGradient).attrs({
    start:{x:1, y:0},
    end:{x:-1, y:0},
    colors: [ "#C58BF2", "#EEA4CE"],

})`
    position:absolute;
    left: 34.67%;
    right: 61.33%;
    top: 42.86%;
    bottom: 55.24%;
    opacity: 0.5;
    border-radius: 3px;
    `;
export const TextBall2 = styled.Text`
    position:absolute;
    left: 45.33%;
    right: 23.33%;
    top: 41.9%;
    bottom: 54.29%;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 12px;
    color: #ADA4A5;
`;
export const Straight1 = styled.View`
position: absolute;
left: 36.67%;
right: 48.67%;
top: 46.35%;
bottom: 53.65%;
`;
export const TextStraight1 = styled.Text`
    position:absolute;
    left: 45.33%;
    right: 37.33%;
    top: 46.67%;
    bottom: 49.52%;
    color: rgba(146, 163, 253, 1);
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 12px;
    `;

export const Ball3 = styled(LinearGradient).attrs({
    start:{x:1, y:0},
    end:{x:-1, y:0},
    colors: [ "#C58BF2", "#EEA4CE"],

})`
    position:absolute;
    left: 34.67%;
    right: 61.33%;
    top: 54.92%;
    bottom: 43.17%;
    opacity: 0.5;
    border-radius: 3px;
    `;

export const TextBall3 = styled.Text`
    position:absolute;
    left: 45.33%;
    right: 24%;
    top: 53.97%;
    bottom: 42.22%;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 12px;
    color: #ADA4A5;
`;
export const Straight2 = styled.View`
position: absolute;
left: 36.67%;
right: 48.67%;
top: 58.41%;
bottom: 41.59%;
`;
export const TextStraight2 = styled.Text`
    position:absolute;
    left: 45.33%;
    right: 35.33%;
    top: 58.73%;
    bottom: 37.46%;
    color: rgba(146, 163, 253, 1);
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 12px;
`;

export const Ball4 = styled(LinearGradient).attrs({
    start:{x:1, y:0},
    end:{x:-1, y:0},
    colors: [ "#C58BF2", "#EEA4CE"],

})`
    position:absolute;
    left: 34.67%;
    right: 61.33%;
    top: 66.98%;
    bottom: 31.11%;
    opacity: 0.5;
    border-radius: 3px;
`;

export const TextBall4 = styled.Text`
    position:absolute;
    left: 45.33%;
    right: 24%;
    top: 66.03%;
    bottom: 30.16%;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 12px;
    color: #ADA4A5;
`;
export const Straight3 = styled.View`
position: absolute;
left: 36.67%;
right: 48.67%;
top: 70.48%;

`;
export const TextStraight3 = styled.Text`
    position:absolute;
    left: 45.33%;
    right: 37.33%;
    top: 70.79%;
    bottom: 25.4%;
    color: rgba(146, 163, 253, 1);
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 12px;
`;

export const Ball5 = styled(LinearGradient).attrs({
    start:{x:1, y:0},
    end:{x:-1, y:0},
    colors: [ "#C58BF2", "#EEA4CE"],

})`
position:absolute;
left: 34.67%;
right: 61.33%;
top: 79.05%;
bottom: 19.05%;
border-radius: 3px;

`;

export const TextBall5 = styled.Text`
    position:absolute;
    left: 45.33%;
    right: 24.67%;
    top: 78.1%;
    bottom: 18.1%;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 12px;
    color: #ADA4A5;
`;
export const TextStraight4 = styled.Text`
    position:absolute;
    left: 45.33%;
    right: 37.33%;
    top: 82.86%;
    bottom: 13.33%;
    color: rgba(146, 163, 253, 1);
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 12px;
`;

export const TextSleep = styled.Text`
    position:absolute;
    left: 13.33%;
    right: 64%;
    top: 13.33%;
    bottom: 74.67%;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #1D1617;
`;
export const TextTimeSleep = styled.Text`
    position:absolute;
    left: 10.00%;
    right: 55.00%;
    top: 28.67%;
    bottom: 57.50%;
    color: rgba(146, 163, 253, 1);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
`;

export const TextCalories = styled.Text`
    position:absolute;
    left: 13.33%;
    right: 53.33%;
    top: 16%;
    bottom: 72%;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #1D1617;
`;

export const Textkg = styled.Text`
    position:absolute;
    left: 13.33%;
    right: 45.33%;
    top: 31.33%;
    bottom: 54.67%;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: rgba(146, 163, 253, 1);
`;


export const TextCircleCalories = styled.Text`
    position:absolute;
    left: 12%;
    right: 20%;
    top: 25.33%;
    bottom: 5%;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 12px;
    text-align: center;
    color: #FFFFFF;
`;

export const CircleCircle = styled.View`
top:77px;
`;

export const CircleCalories =  styled(LinearGradient).attrs({
    start:{x:1, y:0},
    end:{x:-0.5, y:0},
    colors: [ "#92A3FD", "#9DCEFF"],

})`
    position:absolute;
    left: 34%;
    right: 34%;
    top: 55.33%;
    bottom: 12.67%;
    background: rgba(146, 163, 253, 1);
    border-radius: 24px;
    box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
`;

export const ContainerProgress = styled.View`
position: relative;
    height: 250px;
    width: 315px;
    top: -140px;
 

`;

export const TextProgress = styled.Text`
    position:absolute;
    width: 145px;
    height: 24px;
    left: 7px;
    top: 9px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1D1617;
`;

export const ImgFri = styled.View`
position: absolute;
top: 106px;
left: 233px;
`;


export const ButtonWeekly = styled(LinearGradient).attrs({
    start:{x:1.8, y:0},
    end:{x:-0.5, y:0},
    colors: [ "#92A3FD", "#9DCEFF"],

})`
position:absolute;
width: 76px;
height: 30px;
left: 257px;
top: 5px;
background: rgba(146, 163, 253, 1);
border-radius: 14px;
`;

export const TextWeekly = styled.Text`
position:absolute;
left: 13.16%;
right: 39.47%;
top: 26.67%;
bottom: 23.33%;
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
/* identical to box height, or 150% */
text-align: right;
/* white-color */
color: #FFFFFF;
`;

export const ImgWeekly = styled.View`
position:absolute;
left: 49px;
right: 12px;
top: 8px;

`;

export const LineProgress = styled.View`
    position:absolute;
    left: 7px;
    right: 14px;
    top: 65px;
    bottom: 95.35%;
    /* gray-3 */
    border: 1px solid rgba(221, 218, 218, 0.2);
`;

export const LineProgress2 = styled.View`
    position:absolute;
    left: 7px;
    right: 14px;
    top: 93px;
    bottom: 95.35%;
    /* gray-3 */
    border: 1px solid rgba(221, 218, 218,  0.2);
`;
export const LineProgress3 = styled.View`
    position:absolute;
    left: 7px;
    right: 14px;
    top: 121px;
    bottom: 95.35%;
    /* gray-3 */
    border: 1px solid rgba(221, 218, 218,  0.2);
`;
export const LineProgress4 = styled.View`
    position:absolute;
    left: 7px;
    right: 14px;
    top: 149px;
    bottom: 95.35%;
    /* gray-3 */
    border: 1px solid rgba(221, 218, 218,  0.2);
`;
export const LineProgress5 = styled.View`
    position:absolute;
    left: 7px;
    right: 14px;
    top: 177px;
    bottom: 95.35%;
    /* gray-3 */
    border: 1px solid rgba(221, 218, 218,  0.2);
`;
export const LineProgress6 = styled.View`
    position:absolute;
    left: 7px;
    right: 14px;
    top: 205px;
    bottom: 95.35%;
    /* gray-3 */
    border: 1px solid rgba(221, 218, 218, 0.2);
`;

export const LineProgress7 = styled.View`
    position:absolute;
    left: 7px;
    right: 14px;
    top: 233px;
    bottom: 95.35%;
    /* gray-3 */
    border: 1px solid rgba(221, 218, 218,  0.2);
`;
export const Day1 = styled.Text`
    position:absolute;
    left: 11px;
    right: 31px;
    top: 212px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    /* gray-1 */
    color: #7B6F72;
`;
export const Day2 = styled.Text`
    position:absolute;
    left: 55px;
    top: 212px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    /* gray-1 */
    color: #7B6F72;
`;
export const Day3 = styled.Text`
    position:absolute;
    left: 99px;
    top: 212px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    /* gray-1 */
    color: #7B6F72;
`;
export const Day4 = styled.Text`
    position:absolute;
    left: 143px;
    top: 212px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    /* gray-1 */
    color: #7B6F72;
`;
export const Day5 = styled.Text`
    position:absolute;
    left: 189px;
    top: 212px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    /* gray-1 */
    color: #7B6F72;
`;
export const Day6 = styled.Text`
    position:absolute;
    left: 237px;
    top: 212px;
    
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    /* gray-1 */
    color: rgba(146, 163, 253, 1);
`;
export const Day7 = styled.Text`
    position:absolute;
    left: 275px;
    top: 212px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    /* gray-1 */
    color: #7B6F72;
`;

export const Num1 = styled.Text`
    position:absolute;
    left: 30px;
    right: -20px;
    top: 57px;
    font-style: normal;
    font-weight: normal;
    font-size: 10.625px;
    line-height: 16px;
    /* identical to box height */
    text-align: right;
    /* gray-1 */
    color: #7B6F72;
`;
export const Num2 = styled.Text`
    position:absolute;
    left: 30px;
    right: -20px;
    top: 85px;
    font-style: normal;
    font-weight: normal;
    font-size: 10.625px;
    line-height: 16px;
    /* identical to box height */
    text-align: right;
    /* gray-1 */
    color: #7B6F72;
`;
export const Num3 = styled.Text`
    position:absolute;
    left: 30px;
    right: -20px;
    top: 112px;
    font-style: normal;
    font-weight: normal;
    font-size: 10.625px;
    line-height: 16px;
    /* identical to box height */
    text-align: right;
    /* gray-1 */
    color: #7B6F72;
`;
export const Num4 = styled.Text`
    position:absolute;
    left: 30px;
    right: -20px;
    top: 141px;
    font-style: normal;
    font-weight: normal;
    font-size: 10.625px;
    line-height: 16px;
    /* identical to box height */
    text-align: right;
    /* gray-1 */
    color: rgba(146, 163, 253, 1);
`;
export const Num5 = styled.Text`
    position:absolute;
    left: 30px;
    right: -20px;
    top: 168px;
    font-style: normal;
    font-weight: normal;
    font-size: 10.625px;
    line-height: 16px;
    /* identical to box height */
    text-align: right;
    /* gray-1 */
    color: #7B6F72;
`;
export const Num6 = styled.Text`
    position:absolute;
    left: 30px;
    right: -20px;
    top: 195px;
    font-style: normal;
    font-weight: normal;
    font-size: 10.625px;
    line-height: 16px;
    /* identical to box height */
    text-align: right;
    /* gray-1 */
    color: #7B6F72;
`;

export const CashierProgress = styled.View`
    position:absolute;
    height: 58px;
    width: 130px;
    left: 100px;
    top: 53px;
    bottom: 0%;
    box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
    border-radius: 8px;
    background: #FFFFFF;
`;
export const TextCashierProgress = styled.Text`
    position:absolute;
    left: 10px;
    right: 68px;
    top: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 12px;
    /* identical to box height */
    /* gray-2 */
    color: #ADA4A5;
`;
export const Text2CashierProgress  = styled.Text`
    position:absolute;
    left: 10px;
    right: 10px;
    top: 25px;
        
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 15px;
    /* identical to box height */
    /* gray-1 */
    color: #7B6F72;
`;
export const NumCashierProgress  = styled.Text`
    position:absolute;
    left: 85px;
    right: 18px;
    top: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 12px;
/* identical to box height */
/* Success */
    color: #42D742;
`;
export const ArrowCashierProgress = styled.View`
    position:absolute;
    left: 105px;
    right: 15px;
    top: 10px;
`;

export const GraphicCachierProgress = styled.View`
    position:absolute;
    height: 5px;
    width: 110px;
    left: 10px;
    top: 43px;
    bottom: 0%;
/* Border-Color */
background: #F7F8F8;
border-radius: 5px;
`;

export const ColorGraphicCachierProgress = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:-1, y:0},
    colors: [ "#C58BF2", "#92A3FD"],

})`
    position:absolute;
    height: 5px;
    width: 87px;
    left: 10px;
    top: 43px;
    bottom: 6.35%;
    border-radius: 3px;
`;
//COR DO FRI
export const ColorGraphicProgress = styled.View`
position:absolute;
width: 18px;
height: 119px;
left: 253px;
right: 105px;
top: 1135px;
background: rgba(255, 255, 255, 0.4);
`;
export const ImgProgress = styled.View`
position:absolute;
left: 15px;
right: 26.24px;
top: 80px;

`;

export const ContainerWorkout = styled.View`
position: relative;
    height: 70px;
    width: 375px;
    left: 35px;
    top: -130px;

`;
export const TextWorkout = styled.Text`
    position:absolute;
    width: 123px;
    height: 24px;
    left: 0px;
    top: 0px;
    /* Text / Large Text (Semi-bold) */
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    /* Black-color */
    color: #1D1617;
`;
export const Text2Workout = styled.Text`
position:absolute;
    width: 58px;
    height: 18px;
    left: 274px;
    top: 2px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */
    /* gray-2 */
    color: #ADA4A5;
`;

export const TextPerfil1 = styled.Text`
    position:absolute;
    width: 106px;
    height: 18px;
    left: 75px;
    top: 30px;
    /* Text / Small Text (Medium) */
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */
    /* gray-3 */
    color: #DDDADA;
`;
export const Text2Perfil1 = styled.Text`
    position:absolute;
    width: 146px;
    height: 15px;
    left: 75px;
    top: 50px;
    /* Text / Caption (Regular) */
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 15px;
    /* identical to box height, or 150% */
    /* gray-2 */
    color: #A4A9AD;
`;
export const GraphicPerfil1 = styled.View`
    position:absolute;
    height: 10px;
    width: 191px;
    left: 75px;
    top: 75px;
    bottom: 0%;
/* Border-Color */
background: #F7F8F8;
border-radius: 5px;
`;
export const GraphicColorPerfil1 = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#C58BF2", "#92A3FD"],

})`
    position:absolute;
    height: 10px;
    width: 63px;
    left: 75px;
    top: 75px;
    bottom: 6.35%;
    border-radius: 5px;
 
`;

export const TextPerfil2 = styled.Text`
    position:absolute;
    width: 120px;
    height: 18px;
    left: 75px;
    top: 115px;
    /* Text / Small Text (Medium) */
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */
    /* Black-color */
    color: #1D1617;
`;
export const Text2Perfil2 = styled.Text`
    position:absolute;
    width: 149px;
    height: 15px;
    left: 75px;
    top: 135px;
    /* Text / Caption (Regular) */
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 15px;
    /* identical to box height, or 150% */
    /* gray-2 */
    color: #A4A9AD;
`;

export const GraphicPerfil2 = styled.View`
    position:absolute;
    height: 10px;
    width: 191px;
    left: 75px;
    top: 160px;
    bottom: 0%;
/* Border-Color */
    background: #F7F8F8;
    border-radius: 5px;
`;
export const GraphicColorPerfil2 = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#C58BF2", "#92A3FD"],

})`
    position:absolute;
    height: 10px;
    width: 105px;
    left: 75px;
    top: 160px;
    bottom: 6.35%;
    border-radius: 5px;
`;
export const CirclePerfil1 = styled.View`
    position:absolute;
    width: 25px;
    height: 25px;
    left: 295px;
    top: 46px;
`;

export const ArrowPerfil1 = styled.View`
    position:absolute;
    width: 25px;
    height: 25px;
    left: 302px;
    top: 54px;
`;

export const CirclePerfil2 = styled.View`
    position:absolute;
    width: 25px;
    height: 25px;
    left: 295px;
    top: 125px;
`;
export const ArrowPerfil2 = styled.View`
    position:absolute;
    width: 24px;
    height: 24px;
    left: 302px;
    top: 133px;
`;

export const Img1 = styled.View`
position:absolute;
width: 50px;
height: 50px;
left: 15px;
top: 33px;
background: #ADD8E6;
border-radius: 30px;
`;
export const Img2 = styled.View`
position:absolute;
width: 50px;
height: 50px;
left: 15px;
top: 115px;
background: #FADCE6;
border-radius: 30px;
`;