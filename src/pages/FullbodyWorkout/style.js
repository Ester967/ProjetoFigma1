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
    position: relative;
    flex: 1;
    background-color:rgba(157, 206, 255, 1);
`;
export const Scroller = styled.ScrollView` 
    flex: 1;
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
export const CircleBackground = styled.View`
position: absolute;
left: 15%;
right: 15%;
top: 8%;
bottom: 75%;
border-radius: 170px;
background:rgba(255, 255, 255, 0.3);

`;

export const Img1 = styled.View`
position: absolute;
width: 316px;
height: 415px;
left: 10px;
top: -50px;
`;

export const CircleDet1 = styled.View`
position: absolute;
left: 11.2%;
right: 12%;
top: 7.44%;
bottom: 75%;
border-radius: 170px;
background: #FFFFFF;

`;

export const ContainerPrincipal = styled.View`
    position: relative;
    background-color: #FFFFFF;
    top: 299px;
    width: 415px;
    height: 1650px;
    border-radius: 40px;
    align-items: center;

`;

export const TitleText = styled.Text`
position: relative;
right: 90px;
top: 40px;



font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;
`;
export const SubTitleText = styled.Text`
position: relative;
width: 233px;
height: 18px;
right: 43px;
top: 45px;


font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;

export const ContainerHeart = styled.View`
position: absolute;
width: 32px;
height: 32px;
left: 313px;
top: 48px;
align-items: center;
justify-content: center;

background: #FFFFFF;
/* card-shadow */

box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
border-radius: 8px;
`;

export const ContainerSchedule = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD33", "#9DCEFF33"],

})`
position: relative;
width: 315px;
height: 50px;
right: 0px;
top: 75px;
border-radius: 16px;
`;
export const TextSchedule = styled.Text`
position: absolute;
width: 109px;
height: 18px;
left: 47px;
top: 16px;


font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;
`;
export const IconFullbody = styled.View`
position: absolute;
top: 17px;
left: 18px;
`;

export const IconDifficulity = styled.View`
position: absolute;
top: 14px;
left: 20px;
`;

export const IconDifficulity2 = styled.View`
position: absolute;
top: 15px;
left: 30px;
`;

export const IconArrow = styled.View`
position: absolute;
top: 20px;
left: 289px;
`;

export const TextContainersScAndDiff = styled.Text`
position: absolute;
width: 75px;
height: 15px;
left: 202px;
top: 18px;
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
/* identical to box height, or 150% */

text-align: right;

/* gray-1 */

color: #7B6F72;

`;

export const ContainerDifficulity = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#C58BF233", "#EEA4CE33"],

})`
position: relative;
width: 315px;
height: 50px;
right: 0px;
top: 90px;
border-radius: 16px;
`;

export const ContainerNeed = styled.View`
position: relative;
width: 360px;
height: 330px;
left: 22px;
top: 120px;

/* Blue-Linear 
background-color:rgba(197, 139, 242, 0.2);
*/
border-radius: 16px;
`;
export const TextNeed = styled.Text`
position: absolute;
width: 161px;
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
export const TextNeed2 = styled.Text`
position: absolute;
width: 45px;
height: 18px;
left: 300px;
top: 0px;


font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-2 */

color: #ADA4A5;
`;
export const IconExercises = styled.View`
position: absolute;
left: 98.46%;
top: 25.54%;
bottom: -55.62%;


`;

export const ContainerBarbell = styled.View`
position: absolute;
width: 130px;
height: 130px;
left: 0px;
top: 45px;

/* Border-Color */

background: #F7F8F8;
border-radius: 12px;
`;
export const TextBarbell = styled.Text`
position: absolute;
width: 85px;
height: 18px;
left: 0px;
top: 135px;


font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


color: #000000;

`;

export const ImgBarbell = styled.View`
position: absolute;
width: 316px;
height: 415px;
left: 30px;
top: 40px;
`;

export const ContainerSkipping = styled.View`
position: absolute;
width: 130px;
height: 130px;
left: 145px;
top: 45px;

/* Border-Color */

background: #F7F8F8;
border-radius: 12px;
`;

export const ImgSkipping = styled.View`
position: absolute;
width: 316px;
height: 415px;
left: 40px;
top: 26px;
`;

export const ContainerBottle = styled.View`
position: absolute;
width: 130px;
height: 130px;
left: 290px;
top: 45px;

/* Border-Color */

background: #F7F8F8;
border-radius: 12px;
`;

export const ImgBottle = styled.View`
position: absolute;
width: 316px;
height: 415px;
left: 70px;
top: 20px;
`;

export const ContainerExercises = styled.View`
position: relative;
width: 315px;
height: 350px;
right: 0px;
top: 10px;

/* Blue-Linear 
background-color:rgba(157, 206, 255, 0.2);
*/
border-radius: 16px;
`;

export const ContainerSet1 = styled.View`
position: relative;
width: 315px;
height: 250px;
right: 0px;
top: 35px;
border-radius: 16px;
`;

export const ImgExercises = styled.View``;
export const TextSet = styled.Text`
position: absolute;
width: 27px;
height: 18px;
left: 0px;
top: 0px;


font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;
`;
export const ContainerWarm = styled.View`
position: relative;
width: 315px;
height: 80px;
right: 0px;
top: 35px;

/* Blue-Linear 
background-color:rgba(157, 206, 255, 0.2);
*/
border-radius: 16px;
`;

export const ContainerJumping = styled.View`
position: relative;
width: 315px;
height: 80px;
right: 0px;
top: 45px;

/* Blue-Linear 
background-color:rgba(157, 206, 255, 0.2);
*/
border-radius: 16px;
`;
export const ContainerSkippin = styled.View`
position: relative;
width: 315px;
height: 80px;
right: 0px;
top: 55px;

/* Blue-Linear 
background-color:rgba(157, 206, 255, 0.2);
*/
border-radius: 16px;
`;
export const ContainerSquats = styled.View`
position: relative;
width: 315px;
height: 80px;
right: 0px;
top: 65px;

/* Blue-Linear 
background-color:rgba(157, 206, 255, 0.2);
*/
border-radius: 16px;
`;
export const ContainerArm = styled.View`
position: relative;
width: 315px;
height: 80px;
right: 0px;
top: 75px;

/* Blue-Linear 
background-color:rgba(157, 206, 255, 0.2);
*/
border-radius: 16px;
`;
export const ContainerRest = styled.View`
position: relative;
width: 315px;
height: 80px;
right: 0px;
top: 85px;

/* Blue-Linear
background-color:rgba(157, 206, 255, 0.2);
*/
border-radius: 16px;
`;

export const ContainerSet2 = styled.View`
position: relative;
width: 315px;
height: 250px;
right: 0px;
top: 355px;

/* Blue-Linear 
background-color:rgba(157, 206, 255, 0.2);
*/
border-radius: 16px;
`;
export const TextSet2 = styled.Text`
position: absolute;
width: 30px;
height: 18px;
left: 0px;
top: 0px;


font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;

`;

export const ContainerIncline = styled.View`
position: relative;
width: 315px;
height: 80px;
right: 0px;
top: 25px;

/* Blue-Linear
background-color:rgba(157, 206, 255, 0.2);
*/
border-radius: 16px;
`;
export const ContainerPush = styled.View`
position: relative;
width: 315px;
height: 80px;
right: 0px;
top: 35px;

/* Blue-Linear
background-color:rgba(157, 206, 255, 0.2);
*/
border-radius: 16px;
`;

export const TextsExercises = styled.Text`
position: absolute;
width: 121px;
height: 18px;
left: 70px;
top: 10px;


font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
/* identical to box height, or 129% */


/* Black-color */

color: #1D1617;
`;
export const Texts2Exercises = styled.Text`
position: absolute;
width: 34px;
height: 18px;
left: 70px;
top: 33px;


font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;
`;

export const ButtonStart = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD", "#9DCEFF"],

})`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 18px 129px;

position: absolute;
width: 315px;
height: 60px;
left: 0px;
top: 800px;
box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
border-radius: 30px;
`;
export const TextStart = styled.Text`
position: absolute;
width: 116px;
height: 24px;
left: 99.5px;
top: 18px;


font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* white-color */

color: #FFFFFF;

`;