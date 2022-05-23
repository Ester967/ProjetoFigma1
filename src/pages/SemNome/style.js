import React from "react";
import { exp } from "react-native/Libraries/Animated/Easing";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;


export const Scroller = styled.ScrollView` 
    flex: 1;
    background: #FFFFFF;
`;

export const HeaderContainer = styled.View`
    position:relative;
    height: 146px;
    width: 315px;
    left: 25px;
    top: 110px;
    bottom: 0%;
    background: rgba(146, 163, 253, 1);
    box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
    border-radius: 22px;
    
`;

export const Circle = styled.View`
left: 60px;
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