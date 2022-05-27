    import React from "react";
    import { exp } from "react-native/Libraries/Animated/Easing";
    import styled from "styled-components/native";
    import {LinearGradient} from 'expo-linear-gradient'; 

    export const Container = styled.SafeAreaView`
        flex: 1;
        background-color: #FFFFFF;
        
        
    `;

    export const Scroller = styled.ScrollView`
        flex: 1;
        
    `;

    export const HeaderArea = styled.View`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `;

    export const HeaderTitle = styled.Text`
    position: relative;
    width: 124px;
    height: 24px;
    left: 400%;
    top: 2px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #1D1617;


    `;

    export const HeaderContainer1 = styled.View`
    position: relative;
    width: 32px;
    height: 32px;
    left: -600%;
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
        position: relative;
        width:32px;
        height:32px;
        left: -150%;
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

    export const ContainerTarget = styled(LinearGradient).attrs({
        start:{x:2, y:0},
        end:{x:0, y:0},
        colors: [ "#92A3FD33", "#9DCEFF33"],
    
    })`
        position: relative;
        width:80%;
        height:450%;
        left: 10%;
        top: 70%;
    border-radius: 22px;
    `;
    export const TextTarget = styled.Text`
    position: absolute;
    left: 6.35%;
    right: 63.49%;
    top: 15.83%;
    bottom: 69.06%;

    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */


    /* Black-color */

    color: #1D1617;

    `;
    export const ContainerWater = styled.View`
    position: absolute;
    left: 6.35%;
    right: 52.38%;
    top: 42.45%;
    bottom: 14.39%;

    background: #FFFFFF;
    border-radius: 12px;
    `;
    export const TextWater1 = styled.Text`
    position: absolute;
    left: 42px;
    top: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color:  #92A3FD;

    `;
    export const TextWater2 = styled.Text`
    position: absolute;
    left: 42px;
    top: 31px;


    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    /* identical to box height, or 167% */


    /* gray-1 */

    color: #7B6F72;

    `;
    export const ContainerFood = styled.View`
    position: absolute;
    left: 52.38%;
    right: 6.35%;
    top: 42.45%;
    bottom: 14.39%;

    background: #FFFFFF;
    border-radius: 12px;
    `;
    export const TextFood1 = styled.Text`
    position: absolute;
    left: 42px;

    top: 10px;

    color:  #92A3FD;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    `;
    export const TextFood2 = styled.Text`
    position: absolute;
    left: 42px;

    top: 31px;


    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    /* identical to box height, or 167% */


    /* gray-1 */

    color: #7B6F72;
    `;
export const ContainerPlus = styled(LinearGradient).attrs({
    start:{x:1.5, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD", "#9DCEFF"],

})`
    position: absolute;
    width: 24px;
    height: 24px;
    left: 271px; 
    top: 20px;
    background: #92A3FD;
    border-radius: 8px;
    `;

export const TextProgress = styled.Text`
position: absolute;
width: 137px;
height: 24px;
left: 5%;
top: -20%;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;

`;

export const ContainerWeekly = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD", "#9DCEFF"],

})`
position: absolute;
    width: 22%;
    height: 30px;
    left: 75%;
    top: -22%;

    background: #92A3FD;
    border-radius: 14px;
`;
export const TextWeekly = styled.Text`
position: absolute;
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

export const ContainerProgress = styled.View`
        position: absolute;
        width:315px;
        height:200px;
        left: 10%;
        top: 800%;
        box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
background: #FFFFFF;
border-radius: 20px;
`;

export const ContainerSun = styled.View`
position: absolute;
left: 6.35%;
right: 86.67%;
top: 10%;
bottom: 22.5%;

background: #F7F8F8;
border-radius: 20px;
`;
export const ContainerColorSun = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD", "#9DCEFF"],

})`
position: absolute;
left: 6.35%;
right: 86.67%;
top: 58%;
bottom: 22.5%;
border-radius: 10px;
`;
export const TextSun = styled.Text`
position: absolute;
left: 6.35%;
right: 86.35%;
top: 81%;
bottom: 10%;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;

export const ContainerMon = styled.View`
position: absolute;
left: 19.68%;
right: 73.33%;
top: 10%;
bottom: 22.5%;

background: #F7F8F8;
border-radius: 20px;
`;
export const ContainerColorMon = styled(LinearGradient).attrs({
    start:{x:1, y:0},
    end:{x:-1, y:0},
    colors: [ "#C58BF2", "#EEA4CE"],

})`
position: absolute;
left: 19.68%;
right: 73.33%;
top: 28.5%;
bottom: 22.5%;
border-radius: 10px;
`;
export const TextMon = styled.Text`
position: absolute;
left: 19.05%;
right: 72.7%;
top: 81%;
bottom: 10%;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;


`;

export const ContainerTue = styled.View`
position: absolute;
left: 33.02%;
right: 60%;
top: 10%;
bottom: 22.5%;

background: #F7F8F8;
border-radius: 20px;
`;
export const ContainerColorTue = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD", "#9DCEFF"],

})`
position: absolute;
left: 33.02%;
right: 60%;
top: 45.5%;
bottom: 22.5%;
border-radius: 10px;
background: #92A3FD;
`;
export const TextTue = styled.Text`
position: absolute;
left: 33.02%;
right: 60%;
top: 81%;
bottom: 10%;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */

text-align: center;

/* gray-1 */

color: #7B6F72;
`;

export const ContainerWed = styled.View`
position: absolute;
left: 46.35%;
right: 46.35%;
top: 10%;
bottom: 22.5%;

background: #F7F8F8;
border-radius: 20px;
`;
export const ContainerColorWed =  styled(LinearGradient).attrs({
    start:{x:1, y:0},
    end:{x:-1, y:0},
    colors: [ "#C58BF2", "#EEA4CE"],

})`
position: absolute;
left: 46.35%;
right: 46.35%;
top: 35%;
bottom: 22.5%;
border-radius: 10px;
background: #C58BF2;
`;
export const TextWed = styled.Text`
position: absolute;
left: 45.71%;
right: 45.4%;
top: 81%;
bottom: 10%;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */

text-align: center;

/* gray-1 */

color: #7B6F72;

`;

export const ContainerThu = styled.View`
position: absolute;
left: 60%;
right: 33.02%;
top: 10%;
bottom: 22.5%;

background: #F7F8F8;
border-radius: 20px;
`;
export const ContainerColorThu =styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD", "#9DCEFF"],

})`
position: absolute;
left: 60%;
right: 33.02%;
top: 23.5%;
bottom: 22.5%;
border-radius: 10px;
background: #92A3FD;
`;
export const TextThu = styled.Text`
position: absolute;
left: 60%;
right: 33.02%;
top: 81%;
bottom: 10%;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */

text-align: center;

/* gray-1 */

color: #7B6F72;

`;

export const ContainerFri = styled.View`
position: absolute;
left: 73.33%;
right: 19.68%;
top: 10%;
bottom: 22.5%;

background: #F7F8F8;
border-radius: 20px;
`;
export const ContainerColorFri =  styled(LinearGradient).attrs({
    start:{x:1, y:0},
    end:{x:-1, y:0},
    colors: [ "#C58BF2", "#EEA4CE"],

})`
position: absolute;
left: 73.33%;
right: 19.68%;
top: 58%;
bottom: 22.5%;
border-radius: 10px;
background: #C58BF2;
`;
export const TextFri = styled.Text`
position: absolute;
left: 74.6%;
right: 20.95%;
top: 81%;
bottom: 10%;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */

text-align: center;

/* gray-1 */

color: #7B6F72;
`;

export const ContainerSat = styled.View`
position: absolute;
left: 86.67%;
right: 6.35%;
top: 10%;
bottom: 22.5%;

background: #F7F8F8;
border-radius: 20px;
`;
export const ContainerColorSat = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD", "#9DCEFF"],

})`
position: absolute;
left: 86.67%;
right: 6.35%;
top: 34%;
bottom: 22.5%;
border-radius: 10px;
`;
export const TextSat = styled.Text`
position: absolute;
left: 86.98%;
right: 6.67%;
top: 81%;
bottom: 10%;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */

text-align: center;

/* gray-1 */

color: #7B6F72;

`;

export const TextActivity = styled.Text`
position: relative;
width: 115px;
height: 24px;
left: 5%;
top: -40%;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;

`;
export const TextMore = styled.Text`
position: relative;
width: 58px;
height: 18px;
left: 90%;
top: -70%;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-2 */

color: #ADA4A5;
`;

export const Container1 = styled.View`
position: absolute;
width: 315px;
height: 80px;
left: 8%;
top: 1550%;

/* white-color */

background: #FFFFFF;
/* card-shadow */

box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
border-radius: 16px;
`;
export const Container1Text1 = styled.Text`
position: absolute;
width: 131px;
height: 18px;
left: 73px;
top: 22px;

/* Text / Small Text (Medium) */
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;
`;
export const Container1Text2 = styled.Text`
position: absolute;
width: 105px;
height: 15px;
left: 73px;
top: 43px;

/* Text / Caption (Regular) */
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
/* identical to box height, or 150% */


/* gray-2 */

color: #A4A9AD;

`;

export const Container2 = styled.View`
position: absolute;
width: 315px;
height: 80px;
left: 30px;
top: 1850%;

/* white-color */

background: #FFFFFF;
border-radius: 16px;
`;
export const Container2Text1 = styled.Text`
position: absolute;
width: 109px;
height: 18px;
left: 73px;
top: 22px;

/* Text / Small Text (Medium) */
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;

`;
export const Container2Text2 = styled.Text`
position: absolute;
width: 108px;
height: 15px;
left: 73px;
top: 43px;

/* Text / Caption (Regular) */
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
/* identical to box height, or 150% */


/* gray-2 */

color: #A4A9AD;

`;
export const Imagem = styled.View`
position: absolute;
left: 9px;
right: 96px;
top: 13px;
`;

export const Imagem1 = styled.View`
position: absolute;
left: 8px;
right: 101px;
top: 18px;

`;

export const Line1 = styled.View`
position: absolute;
left: 45%;
right: 50%;
top: 20.83%;
bottom: 20.83%;

/* white-color */

border: 1px solid #FFFFFF;
`;
export const Line2 = styled.View`
position: absolute;
left: 20.83%;
right: 20.83%;
top: 45%;
bottom: 50%;

/* white-color */

border: 1px solid #FFFFFF;
`;

export const ImgWeekly = styled.View`
position: absolute;
left: 49px;
top: 8px;

`;
export const CircleColor = styled.View`
position: absolute;
width: 50px;
height: 50px;
left: 15px;
top: 15px;
border-radius: 30px;
background: #92A3FD;
`;
export const ImgLatest = styled.View`
position: absolute;
left: 1px;
right: 4px;
top: 1px;


`;
export const CircleColor2 = styled.View`
position: absolute;
width: 50px;
height: 50px;
left: 15px;
top: 15px;
border-radius: 30px;
background: #92A3FD;

`;
export const ImgLatest2 = styled.View`
position: absolute;
left: 1px;
right: 4px;
top: 8px;

`;

export const Ball1Latest1 = styled.View`
position: absolute;
left: 292px;
right: 45px;
top: 18px;
/* gray-2 */

background: #ADA4A5;
/* gray-2 */
border-radius: 10px;
border: 2px solid #ADA4A5;
`;

export const Ball2Latest1 = styled.View`
position: absolute;
left: 292px;
right: 45px;
top: 23px;
/* gray-2 */

background: #ADA4A5;
/* gray-2 */
border-radius: 100px;
border: 2px solid #ADA4A5;
`;

export const Ball3Latest1 = styled.View`
position: absolute;
left: 292px;
right: 45px;
top: 28px;
/* gray-2 */

background: #ADA4A5;
/* gray-2 */
border-radius: 100px;
border: 2px solid #ADA4A5;
`;

export const Ball1Latest2 = styled.View`
position: absolute;
left: 292px;
right: 45px;
top: 18px;
/* gray-2 */

background: #ADA4A5;
/* gray-2 */
border-radius: 10px;
border: 2px solid #ADA4A5;
`;

export const Ball2Latest2 = styled.View`
position: absolute;
left: 292px;
right: 45px;
top: 23px;
/* gray-2 */

background: #ADA4A5;
/* gray-2 */
border-radius: 100px;
border: 2px solid #ADA4A5;
`;

export const Ball3Latest2 = styled.View`
position: absolute;
left: 292px;
right: 45px;
top: 28px;
/* gray-2 */

background: #ADA4A5;
/* gray-2 */
border-radius: 100px;
border: 2px solid #ADA4A5;
`;