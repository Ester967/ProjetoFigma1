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
    width: 53px;
    height: 24px;
    left:  170px;
    top: 10px;

    
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */


    /* Black-color */

    color: #1D1617;

`;

export const Img = styled.View`
position: absolute;
width: 55px;
height: 55px;
left: 30px;
top: 75px;
background: #9DCEFF;
border-radius: 30px;
`;

export const HeaderContainer1 = styled.View`
    position: absolute;
    width: 32px;
    height: 32px;
    left: 30px;
    top: 10px;

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
    left: 350px;
    top: 10px;

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

export const TextHead1 = styled.Text`
    position: absolute;
    width: 95px;
    height: 21px;
    left:100px ;
    top: 80px;

    
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */


    /* Black-color */

    color: #1D1617;
`;
export const TextHead2 = styled.Text`
    position: absolute;
    width: 115px;
    height: 18px;
    left:100px;
    top: 105px;

    
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */


    /* gray-1 */

    color: #7B6F72;

`;

export const ButtonEdit = styled(LinearGradient).attrs({
    start:{x:1.5, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD", "#9DCEFF"],

})`
position: absolute;
width: 83px;
height: 30px;
left: 270px;
top: 85px;
border-radius: 14px;
`;
export const TextButtonEdit = styled.Text`
position: absolute;
width: 23px;
height: 18px;
left: 30px;
top: 6px;


font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* white-color */

color: #FFFFFF;

`;

export const HeightContainer = styled.View`
position: absolute;
width: 95px;
height: 65px;
left: 45px;
top: 150px;

/* white-color */

background: #FFFFFF;
/* card-shadow */

box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
border-radius: 16px;
`;
export const CmText = styled.Text`
    position: absolute;
    width: 46px;
    height: 21px;
    left: 24px;
    top: 11px;
    color:rgba(146, 163, 253, 1) ;

    
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
`;
export const HeightText = styled.Text`
    position: absolute;
    width: 39px;
    height: 18px;
    left: 27px;
    top: 37px;

    
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */


    /* gray-1 */

    color: #7B6F72;

`;

export const WeightContainer = styled.View`
    position: absolute;
    width: 95px;
    height: 65px;
    left: 160px;
    top: 150px;

    /* white-color */

    background: #FFFFFF;
    /* card-shadow */

    box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
    border-radius: 16px;
`;
export const KgText = styled.Text`
    position: absolute;
    width: 36px;
    height: 21px;
    left: 29px;
    top: 11px;
    color:rgba(146, 163, 253, 1) ;

    
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
`;
export const WeightText = styled.Text`
    position: absolute;
    width: 43px;
    height: 18px;
    left: 26px;
    top: 37px;

    
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */


    /* gray-1 */

    color: #7B6F72;

`;

export const AgeContainer = styled.View`
    position: absolute;
    width: 95px;
    height: 65px;
    left: 270px;
    top: 150px;

    /* white-color */

    background: #FFFFFF;
    /* card-shadow */

    box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
    border-radius: 16px;
`;
export const YoText = styled.Text`
    position: absolute;
    width: 34px;
    height: 21px;
    left: 30px;
    top: 11px;
    color:rgba(146, 163, 253, 1) ;

    
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
`;
export const AgeText = styled.Text`
    position: absolute;
    width: 24px;
    height: 18px;
    left: 35px;
    top: 37px;

    
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */


    /* gray-1 */

    color: #7B6F72;

`;

export const ContainerAccount = styled.View`
    width: 315px;
    height: 189px;
    margin-left: auto;
    margin-right: auto;
    top: 250px;
    align-items:center ;

    /* white-color */

    background: #FFFFFF;
    /* card-shadow */

    box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
    border-radius: 16px;
`;

export const TextAccount = styled.Text`
position: absolute;
width: 69px;
height: 24px;
left: 20px;
top: 20px;


font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;

`;
export const TextPersonal = styled.Text`
position: absolute;
width: 84px;
height: 18px;
left: 50px;
top: 60px;


font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;
export const TextAchievement = styled.Text`
position: absolute;
width: 80px;
height: 18px;
left: 50px;
top: 90px;


font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;
export const TextActivy = styled.Text`
position: absolute;
width: 88px;
height: 18px;
left: 50px;
top: 120px;


font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;
export const TextWorkout = styled.Text`
position: absolute;
width: 105px;
height: 18px;
left: 50px;
top: 150px;


font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;

export const ContainerNotification = styled.View`
width: 315px;
height: 99px;
margin-left: auto;
margin-right: auto;
top: 280px;

/* white-color */

background: #FFFFFF;
/* card-shadow */

box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
border-radius: 16px;
`;
export const TextNotification = styled.Text`
position: absolute;
width: 95px;
height: 24px;
left: 20px;
top: 20px;


font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;

`;
export const TextPop = styled.Text`
position: absolute;
width: 117px;
height: 18px;
left: 50px;
top: 60px;


font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;
`;

export const GraphicPop = styled(LinearGradient).attrs({
    start:{x:1, y:0},
    end:{x:0, y:0},
    colors: [ "#C58BF2", "#EEA4CE"],

})`
position: absolute;
width: 36px;
height: 18px;
left: 264px;
top: 60px;
border-radius: 8px;
`;
export const GraphicPopCircle = styled.View`
position: absolute;
width: 12px;
height: 12px;
left: 285px;
top: 63px;
border-radius:10px ;
background: #FFFFFF;
`; 

export const ContainerOther = styled.View`
width: 315px;
height: 175px;
margin-left: auto;
margin-right: auto;
top: 308px;

/* white-color */

background: #FFFFFF;
/* card-shadow */

box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
border-radius: 16px;
`;
export const TextOther = styled.Text`
position: absolute;
width: 46px;
height: 24px;
left: 20px;
top: 20px;


font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;

`;
export const TextContact = styled.Text`
position: absolute;
width: 67px;
height: 18px;
left: 50px;
top: 60px;


font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;
export const TextPrivacy = styled.Text`
position: absolute;
width: 82px;
height: 18px;
left: 50px;
top: 90px;


font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;
export const TextSettings = styled.Text`position: absolute;
width: 49px;
height: 18px;
left: 50px;
top: 120px;


font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;`;

export const ImgProfile = styled.View`
position: absolute;
width: 20px;
height: 20px;
left: 24px;
top: 59px;

`;

export const ImgDocument = styled.View`
position: absolute;
left: 22px;
top: 91px;
`;
export const ImgGraphic = styled.View`
position: absolute;
left: 22px;
top: 120px;
`;
export const ImgChart = styled.View`
position: absolute;
left: 22px;
top: 150px;
`;
export const ImgNotification = styled.View`
position: absolute;
left: 22px;
top: 60px;
`;
export const ImgMessage = styled.View`
position: absolute;
left: 23px;
top: 61px;
`;
export const ImgShieldDone = styled.View`
position: absolute;
left: 23px;
top: 90px;
`;
export const ImgSetting = styled.View`
position: absolute;
left: 23px;
top: 120px;
`;

export const ImgArrow = styled.View`
position: absolute;
left: 288px;
top: 63px;
`;
export const ImgArrow2 = styled.View`
position: absolute;
left: 288px;
top: 93px;
`;
export const ImgArrow3 = styled.View`
position: absolute;
left: 288px;
top: 123px;
`;
export const ImgArrow4 = styled.View`
position: absolute;
left: 288px;
top: 153px;
`;
export const ImgArrow5 = styled.View`
position: absolute;
left: 288px;
top: 63px;
`;
export const ImgArrow6 = styled.View`
position: absolute;
left: 288px;
top: 93px;
`;
export const ImgArrow7 = styled.View`
position: absolute;
left: 288px;
top: 123px;
`;