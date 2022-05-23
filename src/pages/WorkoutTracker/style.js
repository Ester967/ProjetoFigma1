import React from "react";
import { exp } from "react-native/Libraries/Animated/Easing";
import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient';


export const Container = styled.View`
    flex: 1;
    
`;

export const Background = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD", "#9DCEFF"],

})` 
    flex: 1;
`;
export const HeaderArea = styled.View`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
`;

export const ContainerProgress = styled.View`
position: relative;
    height: 250px;
    width: 360px;
    left: 25px;
    top: 90px;
   
`;

export const ImgProgress = styled.View`
position:absolute;
left: 30px;
right: 26.24px;
top: 43px;
`;
export const ImgFri = styled.View`
position: absolute;
top: 69px;
left: 245px;
`;

export const LineProgress = styled.View`
position: absolute;
left: 30px;
right: 45px;
top: 28px;
border: 1px solid rgba(221, 218, 218,  0.2);

`;
export const LineProgress2 = styled.View`
position: absolute;
left: 30px;
right: 45px;
top: 56px;
border: 1px solid rgba(221, 218, 218,  0.2);
`;
export const LineProgress3 = styled.View`
position: absolute;
left: 30px;
right: 45px;
top: 84px;
border: 1px solid rgba(221, 218, 218,  0.2);
`;
export const LineProgress4 = styled.View`
position: absolute;
left: 30px;
right: 45px;
top: 112px;
border: 1px solid rgba(221, 218, 218,  0.2);
`;
export const LineProgress5 = styled.View`
position: absolute;
left: 30px;
right: 45px;
top: 140px;
border: 1px solid rgba(221, 218, 218,  0.2);
`;
export const LineProgress6 = styled.View`
position: absolute;
left: 30px;
right: 45px;
top: 168px;
border: 1px solid rgba(221, 218, 218,  0.2);
`;

export const Day1 = styled.Text`
    position:absolute;
    left: 40px;
    top: 180px;
    
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    /* gray-1 */
    color: #FFFFFF;
`;
export const Day2 = styled.Text`
    position:absolute;
    left: 80px;
    top: 180px;
    
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    /* gray-1 */
    color: #FFFFFF;
`;
export const Day3 = styled.Text`
    position:absolute;
    left: 125px;
    top: 180px;
    
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    /* gray-1 */
    color: #FFFFFF;
`;
export const Day4 = styled.Text`
    position:absolute;
    left: 165px;
    top: 180px;
    
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    /* gray-1 */
    color: #FFFFFF;
`;
export const Day5 = styled.Text`
    position:absolute;
    left: 210px;
    top: 180px;
    
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    /* gray-1 */
    color: #FFFFFF;
`;
export const Day6 = styled.Text`
    position:absolute;
    left: 250px;
    top: 180px;
    
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    /* gray-1 */
    color: #FFFFFF;
`;
export const Day7 = styled.Text`
    position:absolute;
    left: 290px;
    top: 180px;
    
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    /* gray-1 */
    color: #FFFFFF;
`;
export const CashierProgress = styled.View`
    position:absolute;
    height: 58px;
    width: 130px;
    left: 115px;
    top: 10px;
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

export const ColorGraphicCachierProgress = styled.View`
    position:absolute;
    height: 5px;
    width: 87px;
    left: 10px;
    top: 43px;
    bottom: 6.35%;
    border-radius: 30px;
    background: rgba(146, 163, 253, 1);
`;
export const Num1 = styled.Text`
    position:absolute;
    right: 10px;
    top: 20px;
    
    font-style: normal;
    font-weight: normal;
    font-size: 10.625px;
    line-height: 16px;
    /* identical to box height */
    text-align: right;
    /* gray-1 */
    color: #FFFFFF;
`;
export const Num2 = styled.Text`
    position:absolute;
    right: 10px;
    top: 47px;
    
    font-style: normal;
    font-weight: normal;
    font-size: 10.625px;
    line-height: 16px;
    /* identical to box height */
    text-align: right;
    /* gray-1 */
    color: #FFFFFF;
`;
export const Num3 = styled.Text`
    position:absolute;
    right: 10px;
    top: 74px;
    
    font-style: normal;
    font-weight: normal;
    font-size: 10.625px;
    line-height: 16px;
    /* identical to box height */
    text-align: right;
    /* gray-1 */
    color: #FFFFFF;
`;
export const Num4 = styled.Text`
    position:absolute;
    right: 10px;
    top: 101px;
    
font-style: normal;
font-weight: 700;
font-size: 10.625px;
line-height: 16px;
/* identical to box height */

text-align: right;

/* white-color */

color: #FFFFFF;

`;
export const Num5 = styled.Text`
    position:absolute;
    right: 10px;
    top: 130px;
    
    font-style: normal;
    font-weight: normal;
    font-size: 10.625px;
    line-height: 16px;
    /* identical to box height */
    text-align: right;
    /* gray-1 */
    color: #FFFFFF;
`;
export const Num6 = styled.Text`
    position:absolute;
    right: 10px;
    top: 160px;
    
    font-style: normal;
    font-weight: normal;
    font-size: 10.625px;
    line-height: 16px;
    /* identical to box height */
    text-align: right;
    /* gray-1 */
    color: #FFFFFF;
    `;

export const HeaderTitle = styled.Text`
position: absolute;
width: 139px;
height: 24px;
left: 140px;
top: 44px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* white-color */

color: #FFFFFF;

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
    left: 345px;
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
export const ContainerPrincipal = styled.View`
    position: relative;
    background-color: #FFFFFF;
    top: 70px;
    width: 415px;
    height: 980px;
    border-radius: 40px;
    align-items: center;

`;
export const BarraInicial= styled.View`
position: relative;
width: 50px;
height: 5px;
top: 10px;

/* Black-color */
opacity: 0.2;
background: #1D1617;
border-radius: 50px;
`;
 
export const ContainerDaly = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD33", "#9DCEFF33"],

})`
 position: relative;
    height: 57px;
    width: 315px;
    top: 40px;
    border-radius: 16px;
 
`;

export const TextDaly = styled.Text`
position: absolute;
left: 6.35%;
right: 40.63%;
top: 31.58%;
bottom: 31.58%;


font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
/* identical to box height */


/* Black-color */

color: #1D1617;

`;
export const ButtonDaly = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD", "#9DCEFF"],

})` 
position: absolute;
left: 72.06%;
right: 6.35%;
top: 26.32%;
bottom: 24.56%;
border-radius: 14px;
`;
export const ButtonTextDaly = styled.Text`
position: absolute;
top: 5px;
left: 15px;


font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height */


/* white-color */

color: #FFFFFF;

`;

export const ContainerUpcoming = styled.View`
 position: relative;
    height: 250px;
    width: 315px;
    top: 60px;
   
`;
export const TextUpcoming = styled.Text`
position: absolute;
width: 159px;
height: 24px;
top: 10px;
left: 0px;
/* Text / Large Text (Semi-bold) */


font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;

`;
export const TextUpcoming2 = styled.Text`
position: absolute;
width: 58px;
height: 18px;
left: 287px;
top: 18px;


font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-2 */

color: #ADA4A5;

`;

export const ContainerFullbody = styled.View`
position: relative;
width: 315px;
height: 80px;
left: 5px;
top: 45px;

background: #FFFFFF;
/* card-shadow */

box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
border-radius: 16px;
`;
export const TextFullbody = styled.Text`
position: absolute;
width: 106px;
height: 18px;
left: 75px;
top: 21px;

/* Text / Small Text (Medium) */


font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;
`;
export const TextFullbody2 = styled.Text`
position: absolute;
width: 80px;
height: 15px;
left: 75px;
top: 44px;

/* Text / Caption (Regular) */


font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
/* identical to box height, or 150% */


/* gray-2 */

color: #ADA4A5;
`;

export const GraphicPop = styled(LinearGradient).attrs({
    start:{x:-0.5, y:0},
    end:{x:1, y:0},
    colors: [ "#EEA4CE", "#C58BF2"],

})`
position: absolute;
width: 44px;
height: 24px;
left: 264px;
top: 30px;
border-radius: 11px;
`;
export const GraphicPopCircle = styled.View`
position: absolute;
width: 14px;
height: 14px;
left: 288px;
top: 35px;
border-radius:10px ;
background: #FFFFFF;
`; 

export const GraphicPop2 = styled.View`
position: absolute;
width: 44px;
height: 24px;
left: 264px;
top: 30px;
background: #DDDADA;

border-radius: 99px;
`;

export const GraphicPopCircle2 = styled.View`
position: absolute;
width: 14px;
height: 14px;
left: 268px;
top: 35px;
border-radius:10px ;
background: #FFFFFF;
`;

export const ContainerUpperbody = styled.View`
position: relative;
width: 315px;
height: 80px;
left: 5px;
top: 60px;

background: #FFFFFF;
/* card-shadow */

box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
border-radius: 16px;

`;
export const TextUpperbody = styled.Text`
position: absolute;
width: 122px;
height: 18px;
left: 75px;
top: 21px;

/* Text / Small Text (Medium) */


font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;

`;
export const TextUpperbody2 = styled.Text`
position: absolute;
width: 88px;
height: 15px;
left: 75px;
top: 44px;

/* Text / Caption (Regular) */


font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
/* identical to box height, or 150% */


/* gray-2 */

color: #ADA4A5;

`;

export const ContainerTrain = styled.View`
 position: relative;
    height: 315px;
    width: 315px;
    top: 50px;

    border-radius: 16px;
  
`;

export const TextTrain = styled.Text`
position: absolute;
width: 220px;
height: 24px;
left: 0px;
top: 10px;

/* Text / Large Text (Semi-bold) */


font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;

`;

export const Container11 = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD33", "#9DCEFF33"],

})`
position: relative;
width: 315px;
height: 132px;
left: 5px;
top: 50px;
border-radius: 20px;
`;
export const Text1Container11 = styled.Text`
position: absolute;
width: 135px;
height: 21px;
left: 20px;
top: 20px;


font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;
`;
export const Text2Container11=styled.Text`
position: absolute;
width: 125px;
height: 18px;
left: 20px;
top: 46px;


font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;

export const ButtonView = styled.View`
position: absolute;
width: 94px;
height: 35px;
left: 20px;
top: 79px;

background: #FFFFFF;
border-radius: 50px;
`;

export const TextButtonView = styled.Text`
position: absolute;
width: 54px;
height: 15px;
left: 20px;
top: 10px;
color: #92A3FD;

font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 15px;
`;

export const BackgroundFoto = styled.View`
position: absolute;
width: 92px;
height: 92px;
left: 203px;
top: 20px;
border-radius: 50px;
align-items: center;
justify-content: center;
/* white-color */

background:rgba(255, 255, 255, 0.5);

`;
export const Container12 = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD33", "#9DCEFF33"],

})`
position: relative;
width: 315px;
height: 132px;
left: 5px;
top: 70px;
border-radius: 20px;
`;

export const Container14 = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD33", "#9DCEFF33"],

})`
position: relative;
width: 315px;
height: 132px;
left: 5px;
top: 90px;
border-radius: 20px;
`;

export const Img = styled.View`
position: absolute;
width: 50px;
height: 50px;
left: 15px;
top: 15px;
`;