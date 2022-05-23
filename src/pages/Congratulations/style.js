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

export const Imagem = styled.View`
position: absolute;
width: 255px;
height: 327px;
left: 80px;
top: 65px;

`;

export const Text1 = styled.Text`
position: absolute;
width: 277px;
height: 60px;
left: 60px;
top: 428px;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 30px;
/* or 150% */

text-align: center;

/* Black-color */

color: #1D1617;

`;
export const Text2 = styled.Text`
position: absolute;
width: 315px;
height: 36px;
left: 50px;
top: 503px;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
/* or 150% */

text-align: center;

/* gray-1 */

color: #7B6F72;

`;
export const Text3 = styled.Text`
position: absolute;
width: 85px;
height: 18px;
left: 165px;
top: 544px;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */

text-align: center;

/* gray-1 */

color: #7B6F72;

`;

export const Graphic = styled(LinearGradient).attrs({
    start:{x:2, y:0},
    end:{x:0, y:0},
    colors: [ "#92A3FD", "#9DCEFF"],

})`
position: absolute;
width: 315px;
height: 60px;
left: 50px;
top: 710px;
background:rgba(146, 163, 253, 1);

border-radius: 30px;
`;
export const TextGraphic = styled.Text`
position: absolute;
width: 117px;
height: 24px;
left: 99px;
top: 18px;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* white-color */

color: #FFFFFF;

`;