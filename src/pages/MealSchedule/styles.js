import React from "react";
import { exp } from "react-native/Libraries/Animated/Easing";
import styled from "styled-components/native";

export const Title = styled.Text`
    position: absolute;
    font-style: normal;
    font-size: 16px;
    color: #1D1617;
    text-align: center;
    top: 11px;
    left: 140px;
`;

export const Container = styled.View`
   background: #FFFFFF;
`;

export const HeaderButtonLeft = styled.View`
    margin-left: 10px;
    left: 10px;
    border-radius: 10px;
    border: none;
    position: absolute;
    top: 18px;
`;

export const HeaderButtonRight = styled.View`
    margin-right: 10px;
    right: 10px;
    border-radius: 10px;
    border: none;
    position: absolute;
    top: 18px;
`;

export const Container1 = styled.View`
    position: absolute;
    width: 60px;
    height: 80px;
    left: 195px;
    top: 139px;
    border-radius: 10px;
`;

export const Container2 = styled.View`
    position: absolute;
    width: 60px;
    height: 80px;
    left: 270px;
    top: 139px;
    background: #F7F8F8;
    border-radius: 10px;
`;

export const Container3 = styled.View`
    position: absolute;
    width: 60px;
    height: 80px;
    left: 345px;
    top: 139px;
    background: #F7F8F8;
    border-radius: 10px;
`;

export const Container4 = styled.View`
    position: absolute;
    width: 60px;
    height: 80px;
    left: 120px;
    top: 139px;
    background: #F7F8F8;
    border-radius: 10px;
`;
export const Container5 = styled.View`
    position: absolute;
    width: 60px;
    height: 80px;
    left: 45px;
    top: 139px;
    background: #F7F8F8;
    border-radius: 10px;
`;

export const Container6 = styled.View`
    position: absolute;
    width: 60px;
    height: 80px;
    left: -30px;
    top: 139px;
    background: #F7F8F8;
    border-radius: 10px;
`;

export const Text1 = styled.Text`
    position: absolute;
    width: 15px;
    height: 21px;
    left: 218px;
    top: 154px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;
    color: #FFFFFF;
`;

export const Text2 = styled.Text`
    position: absolute;
    width: 16px;
    height: 18px;
    left: 217px;
    top: 185px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
`;

export const Text3 = styled.Text`
    position: absolute;
    width: 19px;
    height: 21px;
    left: 291px;
    top: 154px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;
    color: #7B6F72;
`;

export const Text4 = styled.Text`
    position: absolute;
    width: 16px;
    height: 18px;
    left: 293px;
    top: 185px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Text5 = styled.Text`
    position: absolute;
    width: 22px;
    height: 21px;
    left: 364px;
    top: 154px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;
    color: #7B6F72;
`;

export const Text6 = styled.Text`
    position: absolute;
    width: 16px;
    height: 18px;
    left: 367px;
    top: 185px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Text7 = styled.Text`
    position: absolute;
    width: 29px;
    height: 21px;
    left: 135px;
    top: 154px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;
    color: #7B6F72;
`;

export const Text8 = styled.Text`
    position: absolute;
    width: 16px;
    height: 18px;
    left: 141px;
    top: 185px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Text9 = styled.Text`
    position: absolute;
    width: 26px;
    height: 21px;
    left: 62px;
    top: 154px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;
    color: #7B6F72;
`;

export const Text10 = styled.Text`
    position: absolute;
    width: 16px;
    height: 18px;
    left: 67px;
    top: 185px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Text11 = styled.Text`
    position: absolute;
    width: 21px;
    height: 21px;
    left: -11px;
    top: 154px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;
    color: #7B6F72;
`;

export const Text12 = styled.Text`
    position: absolute;
    width: 14px;
    height: 18px;
    left: -8px;
    top: 185px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Text13 = styled.Text`
    position: absolute;
    width: 63px;
    height: 21px;
    left: 156px;
    top: 103px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #ADA4A5;
`;

export const Text14 = styled.Text`
    position: absolute;
    width: 79px;
    height: 24px;
    left: 30px;
    top: 249px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1D1617;
`;

export const Text15 = styled.Text`
    position: absolute;
    width: 131px;
    height: 18px;
    left: 214px;
    top: 252px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    color: #ADA4A5;
`;

export const Container7 = styled.View`
    position: absolute;
    width: 60px;
    height: 60px;
    left: 30px;
    top: 288px;
    opacity: 0.2;
    border-radius: 12px;
`;

export const Text16 = styled.Text`
    position: absolute;
    width: 110px;
    height: 21px;
    left: 100px;
    top: 297px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #1D1617;
`;

export const Text17 = styled.Text`
    position: absolute;
    width: 53px;
    height: 18px;
    left: 100px;
    top: 321px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Container8 = styled.View`
    position: absolute;
    width: 60px;
    height: 60px;
    left: 30px;
    top: 358px;
    opacity: 0.2;
    border-radius: 12px;
`;

export const Text18 = styled.Text`
    position: absolute;
    width: 47px;
    height: 21px;
    left: 100px;
    top: 367px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #1D1617;
`;

export const Text19 = styled.Text`
    position: absolute;
    width: 52px;
    height: 18px;
    left: 100px;
    top: 391px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Text20 = styled.Text`
    position: absolute;
    width: 49px;
    height: 24px;
    left: 30px;
    top: 438px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1D1617;
`;

export const Text21 = styled.Text`
    position: absolute;
    width: 132px;
    height: 18px;
    left: 213px;
    top: 441px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    color: #ADA4A5;
`;

export const Container9 = styled.View`
    position: absolute;
    width: 60px;
    height: 60px;
    left: 30px;
    top: 477px;
    opacity: 0.2;
    border-radius: 12px;
`;

export const Text22 = styled.Text`
    position: absolute;
    width: 101px;
    height: 21px;
    left: 100px;
    top: 486px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #1D1617;
`;

export const Text23 = styled.Text`
    position: absolute;
    width: 50px;
    height: 18px;
    left: 100px;
    top: 510px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Container10 = styled.View`
    position: absolute;
    width: 60px;
    height: 60px;
    left: 30px;
    top: 547px;
    
    opacity: 0.2;
    border-radius: 12px;
`;

export const Text24 = styled.Text`
    position: absolute;
    width: 28px;
    height: 21px;
    left: 100px;
    top: 556px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #1D1617;
`;

export const Text25 = styled.Text`
    position: absolute;
    width: 49px;
    height: 18px;
    left: 100px;
    top: 580px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Text26 = styled.Text`
    position: absolute;
    width: 59px;
    height: 24px;
    left: 30px;
    top: 627px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1D1617;
`;

export const Text27 = styled.Text`
    position: absolute;
    width: 129px;
    height: 18px;
    left: 216px;
    top: 630px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    color: #ADA4A5;
`;

export const Container11 = styled.View`
    position: absolute;
    width: 60px;
    height: 60px;
    left: 30px;
    top: 666px;
    opacity: 0.2;
    border-radius: 12px;
`;

export const Text28 = styled.Text`
    position: absolute;
    width: 54px;
    height: 21px;
    left: 100px;
    top: 675px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #1D1617;
`;

export const Text29 = styled.Text`
    position: absolute;
    width: 53px;
    height: 18px;
    left: 100px;
    top: 699px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Container12 = styled.View`
    position: absolute;
    width: 60px;
    height: 60px;
    left: 30px;
    top: 736px;
    
    opacity: 0.2;
    border-radius: 12px;
`;

export const Text30 = styled.Text`
    position: absolute;
    width: 66px;
    height: 21px;
    left: 100px;
    top: 745px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #1D1617;
`;

export const Text31 = styled.Text`
    position: absolute;
    width: 54px;
    height: 18px;
    left: 100px;
    top: 769px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Text32 = styled.Text`
    position: absolute;
    width: 54px;
    height: 24px;
    left: 30px;
    top: 816px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1D1617;
`;

export const Text33 = styled.Text`
    position: absolute;
    width: 128px;
    height: 18px;
    left: 217px;
    top: 819px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    color: #ADA4A5;
`;

export const Container13 = styled.View`
    position: absolute;
    width: 60px;
    height: 60px;
    left: 30px;
    top: 855px;
    opacity: 0.2;
    border-radius: 12px;
`;

export const Text34 = styled.Text`
    position: absolute;
    width: 41px;
    height: 21px;
    left: 100px;
    top: 864px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #1D1617;
`;

export const Text35 = styled.Text`
    position: absolute;
    width: 49px;
    height: 18px;
    left: 100px;
    top: 888px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Container14 = styled.View`
    position: absolute;
    width: 60px;
    height: 60px;
    left: 30px;
    top: 925px;
    
    opacity: 0.2;
    border-radius: 12px;
`;

export const Text36 = styled.Text`
    position: absolute;
    width: 63px;
    height: 21px;
    left: 100px;
    top: 934px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #1D1617;
`;

export const Text37 = styled.Text`
    position: absolute;
    width: 50px;
    height: 18px;
    left: 100px;
    top: 958px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7B6F72;
`;

export const Text38 = styled.Text`
    position: absolute;
    width: 178px;
    height: 24px;
    left: 30px;
    top: 1015px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1D1617;
`;

export const Container15 = styled.View`
    position: absolute;
    width: 315px;
    height: 63px;
    left: 30px;
    top: 1054px;
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
    border-radius: 16px;
`;

export const Text39 = styled.Text`
    position: absolute;
    width: 50px;
    height: 18px;
    left: 45px;
    top: 1069px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #1D1617;
`;

export const Text40 = styled.Text`
    position: absolute;
    width: 43px;
    height: 15px;
    left: 287px;
    top: 1071px;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    text-align: right;
    color: #7B6F72;
`;

export const Container16 = styled.View`
    position: absolute;
    width: 285px;
    height: 10px;
    left: 45px;
    top: 1092px;
    background: #F7F8F8;
    border-radius: 99px;
`;

export const Container17 = styled.View`
    position: absolute;
    width: 217px;
    height: 10px;
    left: 45px;
    top: 1092px;
`;

export const Container18 = styled.View`
    position: absolute;
    width: 315px;
    height: 63px;
    left: 30px;
    top: 1132px;
    background: #FFFFFF;
    border-radius: 16px;
`;

export const Container19 = styled.View`
    position: absolute;
    width: 285px;
    height: 10px;
    left: 45px;
    top: 1170px;
    background: #F7F8F8;
    border-radius: 99px;
`;

export const Container20 = styled.View`
    position: absolute;
    width: 134px;
    height: 10px;
    left: 45px;
    top: 1170px;
`;

export const Text41 = styled.Text`
    position: absolute;
    width: 49px;
    height: 18px;
    left: 45px;
    top: 1147px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #000000;
`;

export const Text42 = styled.Text`
    position: absolute;
    width: 26px;
    height: 15px;
    left: 304px;
    top: 1149px;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    text-align: right;
    color: #7B6F72;
`;

export const Container21 = styled.View`
    position: absolute;
    width: 315px;
    height: 63px;
    left: 30px;
    top: 1210px;
    background: #FFFFFF;
    border-radius: 16px;
`;

export const Container22 = styled.View`
    position: absolute;
    width: 285px;
    height: 10px;
    left: 45px;
    top: 1248px;
    background: #F7F8F8;
    border-radius: 99px;
`;

export const Container23 = styled.View`
    position: absolute;
    width: 102px;
    height: 10px;
    left: 45px;
    top: 1248px;
`;

export const Text43 = styled.Text`
    position: absolute;
    width: 26px;
    height: 18px;
    left: 45px;
    top: 1225px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #000000;
`;

export const Container24 = styled.View`
    position: absolute;
    width: 60px;
    height: 60px;
    left: 285px;
    right: 30px;
    top: 1213px;
    bottom: 40px;
    border-radius: 50px;
    
`;

