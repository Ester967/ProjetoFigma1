import React from "react";
import { exp } from "react-native/Libraries/Animated/Easing";
import styled from "styled-components/native";


export const Header = styled.View`
    height: 64px;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const Container = styled.View`
    position: absolute;
    width: 375px;
    height: 436px;
    left: 0px;
    top: 0px;
`;

export const HeaderButtonLeft = styled.View`
    margin-left: 10px;
    left: 10px;
    border-radius: 10px;
    border: none;
    position: absolute;
`;

export const HeaderButtonRight = styled.View`
    margin-right: 10px;
    right: 10px;
    border-radius: 10px;
    border: none;
    position: absolute;
`;

export const Container1 = styled.View`
    position: absolute;
    width: 375px;
    height: 967px;
    left: 0px;
    top: 346px;
    background: #FFFFFF;
    border-radius: 40px;
`;

export const Text1 = styled.Text`
    position: absolute;
    width: 156px;
    height: 24px;
    left: 30px;
    top: 386px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #1D1617;
`;

export const Text2 = styled.Text`
    position: absolute;
    width: 89px;
    height: 18px;
    left: 30px;
    top: 415px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Text3 = styled.Text`
    position: absolute;
    width: 71px;
    height: 24px;
    left: 30px;
    top: 463px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1D1617;
`;

export const Container2 = styled.View`
    position: absolute;
    width: 81px;
    height: 38px;
    left: 30px;
    top: 502px;
    opacity: 0.2;
    border-radius: 12px;
`;

export const Text4 = styled.Text`
    position: absolute;
    width: 38px;
    height: 15px;
    left: 63px;
    top: 514px;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    color: #1D1617;
`;

export const Container3 = styled.View`
    position: absolute;
    width: 84px;
    height: 38px;
    left: 126px;
    top: 502px;
    opacity: 0.2;
    border-radius: 12px;
`;
export const Text5 = styled.Text`
    position: absolute;
    width: 41px;
    height: 15px;
    left: 159px;
    top: 514px;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    color: #1D1617;
`;

export const Container4 = styled.View`
    position: absolute;
    width: 106px;
    height: 38px;
    left: 225px;
    top: 502px;
    opacity: 0.2;
    border-radius: 12px;
`;

export const Text6 = styled.Text`
    position: absolute;
    width: 63px;
    height: 15px;
    left: 258px;
    top: 514px;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    color: #1D1617;
`;

export const Container5 = styled.View`
    position: absolute;
    width: 95px;
    height: 38px;
    left: 346px;
    top: 502px;
    opacity: 0.2;
    border-radius: 12px;
`;

export const Text7 = styled.Text`
    position: absolute;
    width: 102px;
    height: 24px;
    left: 30px;
    top: 570px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1D1617;
`;

export const Text8 = styled.Text`
    position: absolute;
    width: 315px;
    height: 72px;
    left: 30px;
    top: 609px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Text9 = styled.Text`
    position: absolute;
    width: 170px;
    height: 48px;
    left: 30px;
    top: 711px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1D1617;
`;

export const Text10 = styled.Text`
    position: absolute;
    width: 45px;
    height: 18px;
    left: 300px;
    top: 726px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Container6 = styled.View`
    position: absolute;
    width: 80px;
    height: 80px;
    left: 30px;
    top: 774px;
    background: #F7F8F8;
    border-radius: 12px;
`;

export const Text11 = styled.Text`
    position: absolute;
    width: 72px;
    height: 18px;
    left: 30px;
    top: 859px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #1D1617;
`;

export const Text12 = styled.Text`
    position: absolute;
    width: 27px;
    height: 15px;
    left: 30px;
    top: 880px;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    color: #7B6F72;
`;

export const Container7 = styled.View`
    position: absolute;
    width: 80px;
    height: 80px;
    left: 125px;
    top: 774px;
    background: #F7F8F8;
    border-radius: 12px;
`;
export const Text13 = styled.Text`
    position: absolute;
    width: 36px;
    height: 18px;
    left: 125px;
    top: 859px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #1D1617;
`;

export const Text14 = styled.Text`
    position: absolute;
    width: 31px;
    height: 15px;
    left: 125px;
    top: 880px;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    color: #7B6F72;
`;

export const Container8 = styled.View`
    position: absolute;
    width: 80px;
    height: 80px;
    left: 220px;
    top: 774px;
    background: #F7F8F8;
    border-radius: 12px;
`;
export const Text15 = styled.Text`
    position: absolute;
    width: 75px;
    height: 18px;
    left: 220px;
    top: 859px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #1D1617;
`;

export const Text16 = styled.Text`
    position: absolute;
    width: 25px;
    height: 15px;
    left: 220px;
    top: 880px;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    color: #7B6F72;
`;

export const Container9 = styled.View`
    position: absolute;
    width: 80px;
    height: 80px;
    left: 315px;
    top: 774px;
    background: #F7F8F8;
    border-radius: 12px;
`;

export const Text17 = styled.Text`
    position: absolute;
    width: 29px;
    height: 18px;
    left: 315px;
    top: 859px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #1D1617;
`;

export const Text18 = styled.Text`
    position: absolute;
    width: 37px;
    height: 15px;
    left: 315px;
    top: 880px;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    color: #7B6F72;
`;

export const Text19 = styled.Text`
    position: absolute;
    width: 102px;
    height: 24px;
    left: 30px;
    top: 925px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1D1617;
`;

export const Text20 = styled.Text`
    position: absolute;
    width: 45px;
    height: 18px;
    left: 300px;
    top: 928px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Text21 = styled.Text`
    position: absolute;
    width: 44px;
    height: 21px;
    left: 92px;
    top: 964px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #1D1617;
`;

export const Text22 = styled.Text`
    position: absolute;
    width: 253px;
    height: 18px;
    left: 92px;
    top: 990px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Text23 = styled.Text`
    position: absolute;
    width: 14px;
    height: 21px;
    left: 30px;
    top: 964px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
`;

export const Text24 = styled.Text`
    position: absolute;
    width: 44px;
    height: 21px;
    left: 92px;
    top: 1038px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #1D1617;
`;

export const Text25 = styled.Text`
    position: absolute;
    width: 253px;
    height: 18px;
    left: 92px;
    top: 1064px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Text26 = styled.Text`
    position: absolute;
    width: 17px;
    height: 21px;
    left: 30px;
    top: 1038px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #ADA4A5;
`;

export const Text27 = styled.Text`
    position: absolute;
    width: 44px;
    height: 21px;
    left: 92px;
    top: 1112px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #1D1617;
`;

export const Text28 = styled.Text`
    position: absolute;
    width: 253px;
    height: 36px;
    left: 92px;
    top: 1138px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Text29 = styled.Text`
    position: absolute;
    width: 18px;
    height: 21px;
    left: 30px;
    top: 1112px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #ADA4A5;
`;

export const Text30 = styled.Text`
    position: absolute;
    width: 44px;
    height: 21px;
    left: 92px;
    top: 1204px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #1D1617;
`;

export const Text31 = styled.Text`
    position: absolute;
    width: 18px;
    height: 21px;
    left: 30px;
    top: 1204px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #ADA4A5;
`;

export const Text32 = styled.Text`
    position: absolute;
    width: 44px;
    height: 21px;
    left: 92px;
    top: 1296px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #1D1617;
`;

export const Text33 = styled.Text`
    position: absolute;
    width: 18px;
    height: 21px;
    left: 30px;
    top: 1296px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #ADA4A5;
`;

export const Button1 = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 18px 129px;
    position: absolute;
    width: 315px;
    height: 60px;
    left: 30px;
    top: 1213px;
    box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
    border-radius: 99px;
    border: none;
`;

export const Title1 = styled.Text`
    position: absolute;
    width: 181px;
    height: 24px;
    left: 60px;
    top: 18px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    flex: none;
    flex-grow: 0;
    margin: 0px 10px;
`;
