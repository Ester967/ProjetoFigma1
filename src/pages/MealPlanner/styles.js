import React from "react";
import { exp } from "react-native/Libraries/Animated/Easing";
import styled from "styled-components/native";

export const Container = styled.View`
    background: #FFFFFF;
`;

export const HeaderButtonLeft = styled.View`
    top: 18px;
    margin-left: 10px;
    left: 10px;
    position: absolute;
    border-radius: 10px;
    border: none;
`;

export const HeaderButtonRight = styled.View`
    margin-right: 10px;
    right: 10px;
    position: absolute;
    border-radius: 10px;
    top: 18px;
    border: none;
`;

export const Title = styled.Text`
    position: absolute;
    font-style: normal;
    font-size: 16px;
    color: #1D1617;
    text-align: center;
    top: 16px;
    left: 140px;
    width: 108px;
    height: 24px;
`;

export const Text1 = styled.Text`
    position: absolute;
    width: 123px;
    height: 24px;
    left: 30px;
    top: 105px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1D1617;
`;

export const Container1 = styled.View`
    position: absolute;
    height: 30px;
    width: 76px;
    left: 269px;
    bottom: 833px;
    top: 102px;
    border-radius: 50px;
`;

export const Text2 = styled.Text`
    position: absolute;
    left: 13.16%;
    right: 39.47%;
    top: 26.67%;
    bottom: 23.33%;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    text-align: right;
    color: #FFFFFF;
`;

export const Container2 = styled.View`
    height: 57px;
    width: 315px;
    left: 30px;
    top: 349px;
    border-radius: 16px;
    position: absolute;
    right: 30px;
    bottom: 559px;
    opacity: 0.2;
`;

export const Text3 = styled.Text`
    position: absolute;
    left: 50px;
    right: 183px;
    top: 367px;
    bottom: 577px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #1D1617;
`;

export const Container3 = styled.View`
    position: absolute;
    width: 68px;
    height: 28px;
    left: 257px;
    right: 50px;
    top: 364px;
    bottom: 573px;
    border-radius: 50px; 
`;

export const Text4 = styled.Text`
    position: absolute;
    left: 26%;
    right: 65px;
    top: 15%;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
`;

export const Text5 = styled.Text`
    position: absolute;
    width: 103px;
    height: 24px;
    left: 30px;
    top: 439px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1d1617;
`;

export const Container4 = styled.View`
    position: absolute;
    height: 30px;
    width: 87px;
    left: 258px;
    right: 30px;
    top: 436px;
    border-radius: 50px;
`;

export const Text6 = styled.Text`
    height: 15px;
    width: 47px;
    left: 10px;
    top: 8px;
    position: absolute;
    left: 11.49%;
    right: 34.48%;
    top: 26.67%;
    bottom: 23.33%;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    text-align: right;
    color: #FFFFFF;
`;

export const Container5 = styled.View`
    position: absolute;
    width: 315px;
    height: 80px;
    left: 30px;
    top: 481px;
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
    border-radius: 16px;
`; 

export const Text7 = styled.Text`
    position: absolute;
    width: 94px;
    height: 21px;
    left: 120px;
    top: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #1D1617;
`;

export const Text8 = styled.Text`
    position: absolute;
    width: 75px;
    height: 18px;
    left: 120px;
    top: 35.5px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Container6 = styled.View`
    position: absolute;
    width: 315px;
    height: 80px;
    left: 30px;
    top: 576px;
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
    border-radius: 16px;
`;

export const Text9 = styled.Text`
    position: absolute;
    width: 78px;
    height: 21px;
    left: 120px;
    top: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #1D1617;
`;

export const Text10 = styled.Text`
    position: absolute;
    width: 76px;
    height: 18px;
    left: 120px;
    top: 35.5px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Text11 = styled.Text`
    position: absolute;
    width: 178px;
    height: 24px;
    left: 30px;
    top: 686px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1D1617;
`;

export const Container7 = styled.View`
    position: absolute;
    width: 200px;
    height: 200px;
    left: 30px;
    top: 725px;
    opacity: 0.2;
    box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
`;

export const Text12 = styled.Text`
    position: absolute;
    width: 67px;
    height: 18px;
    left: 50px;
    top: 819px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #1D1617;
`;

export const Text13 = styled.Text`
    position: absolute;
    width: 66px;
    height: 18px;
    left: 50px;
    top: 842px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Container8 = styled.View`
    position: absolute;
    width: 98px;
    height: 30px;
    left: 50px;
    top: 875px;
    border-radius: 50px;
`;

export const Text14 = styled.Text`
    position: absolute;
    width: 38px;
    height: 18px;
    left: 80px;
    top: 881px;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
`;

export const Container9 = styled.View`
    position: absolute;
    width: 200px;
    height: 200px;
    left: 245px;
    top: 725px;
    opacity: 0.2;
    box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
`;

export const Text15 = styled.Text`
    position: absolute;
    width: 42px;
    height: 18px;
    left: 265px;
    top: 819px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #1D1617;
`;

export const Text16 = styled.Text`
    position: absolute;
    width: 66px;
    height: 18px;
    left: 265px;
    top: 842px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Container10 = styled.View`
    position: absolute;
    width: 98px;
    height: 30px;
    left: 265px;
    top: 875px;
    border-radius: 50px;
`;

export const Text17 = styled.Text`
    position: absolute;
    width: 38px;
    height: 18px;
    left: 295px;
    top: 881px;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
`;

export const Container11 = styled.View`
    position: absolute;
    width: 26px;
    height: 26px;
    left: 304px;
    top: 508px;
    opacity: 0.1;
`;

export const Container12 = styled.View`
    position: absolute;
    width: 26px;
    height: 26px;
    left: 304px;
    top: 603px;
    opacity: 0.1;
    border-radius: 8px;
`;