import React from "react";
import { exp } from "react-native/Libraries/Animated/Easing";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFFFFF;
`;

export const HeaderArea = styled.View`
    justify-content: space-between;
    align-items: center;
`;
export const HeaderTitle = styled.Text`
position: relative;
width: 97px;
height: 24px;
top: 10px;
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
    right: 160px;
    top: -20px;

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
   left: 140px;
    top: -51px;

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

export const TextLine1 = styled.Text`
position: absolute;
width: 131px;
height: 18px;
left: 80px;
top: 115px;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;
`;
export const Text2Line1 = styled.Text`
position: absolute;
width: 102px;
height: 15px;
left: 80px;
top: 140px;
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;
export const Img1 = styled.View`
position: absolute;
width: 40px;
height: 40px;
left: 30px;
top: 115px;
`;

export const Img2 = styled.View`
position: absolute;
width: 40px;
height: 40px;
left: 30px;
top: 182px;

`;
export const Img3 = styled.View`
position: absolute;
width: 40px;
height: 40px;
left: 30px;
top: 250px;
`;
export const Img4 = styled.View`
position: absolute;
width: 40px;
height: 40px;
left: 30px;
top: 320px;
`;
export const Img5 = styled.View`
position: absolute;
width: 40px;
height: 40px;
left: 30px;
top: 390px;
`;
export const Img6 = styled.View`
position: absolute;
width: 40px;
height: 40px;
left: 30px;
top: 460px;
`;


export const Line1 = styled.View`
position: absolute;
width: 315px;
height: 0px;
left: 50px;
top: 170px;

/* gray-3 */

border: 1px solid #DDDADA;
`;

export const TextLine2 = styled.Text`
position: absolute;
width: 212px;
height: 18px;
left: 80px;
top: 185px;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;

`;
export const Text2Line2 = styled.Text`
position: absolute;
width: 92px;
height: 15px;
left: 80px;
top: 208px;
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;
export const Line2 = styled.View`
position: absolute;
width: 315px;
height: 0px;
left: 50px;
top: 235px;

/* gray-3 */

border: 1px solid #DDDADA;
`;

export const TextLine3 = styled.Text`
position: absolute;
width: 225px;
height: 18px;
left: 80px;
top: 250px;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;
`;
export const Text2Line3 = styled.Text`
position: absolute;
width: 92px;
height: 15px;
left: 80px;
top: 275px;
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;
export const Line3 = styled.View`
position: absolute;
width: 315px;
height: 0px;
left: 50px;
top: 305px;

/* gray-3 */

border: 1px solid #DDDADA;
`;

export const TextLine4 = styled.Text`
position: absolute;
width: 231px;
height: 18px;
left: 80px;
top: 320px;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;
`;
export const Text2Line4 = styled.Text`
position: absolute;
width: 36px;
height: 15px;
left: 80px;
top: 345px;
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;
`;
export const Line4 = styled.View`
position: absolute;
width: 315px;
height: 0px;
left: 50px;
top: 375px;

/* gray-3 */

border: 1px solid #DDDADA;
`;

export const TextLine5 = styled.Text`
position: absolute;
width: 131px;
height: 18px;
left: 80px;
top: 390px;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;

`;
export const Text2Line5 = styled.Text`
position: absolute;
width: 32px;
height: 15px;
left: 80px;
top: 415px;
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;
export const Line5 = styled.View`
position: absolute;
width: 315px;
height: 0px;
left: 50px;
top: 445px;

/* gray-3 */

border: 1px solid #DDDADA;
`;

export const TextLine6 = styled.Text`
position: absolute;
width: 225px;
height: 18px;
left: 80px;
top: 460px;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* Black-color */

color: #1D1617;

`;
export const Text2Line6 = styled.Text`
position: absolute;
width: 31px;
height: 15px;
left: 80px;
top: 485px;
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
/* identical to box height, or 150% */


/* gray-1 */

color: #7B6F72;

`;

export const BallNotif1 = styled.View`
    position: absolute;
    width:32px;
    height:32px;
   left: 340px;
    top: 125px;
    border-radius: 8px;
`;

export const BallNotif2 = styled.View`
    position: absolute;
    width:32px;
    height:32px;
   left: 340px;
    top: 200px;
    border-radius: 8px;
`;

export const BallNotif3 = styled.View`
   position: absolute;
    width:32px;
    height:32px;
   left: 340px;
    top: 270px;
    border-radius: 8px;
`;

export const BallNotif4 = styled.View`
   position: absolute;
    width:32px;
    height:32px;
   left: 340px;
    top: 340px;
    border-radius: 8px;
`;

export const BallNotif5 = styled.View`
   position: absolute;
    width:32px;
    height:32px;
   left: 340px;
    top: 410px;
    border-radius: 8px;
`;

export const BallNotif6 = styled.View`
   position: absolute;
    width:32px;
    height:32px;
   left: 340px;
    top: 480px;
    border-radius: 8px;
`;

