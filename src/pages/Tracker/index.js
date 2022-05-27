import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {Feather, FontAwesome, SimpleLineIcons, MaterialIcons} from '@expo/vector-icons';
import { Container, HeaderArea, Scroller, HeaderTitle, HeaderContainer1, HeaderIcon1, HeaderContainer2, HeaderIcon2, HeaderIcon3, ContainerTarget, TextTarget, ContainerWater, ContainerFood, TextWater1, TextWater2, TextFood1, TextFood2, ContainerPlus, ContainerProgress, ContainerSun, ContainerMon, ContainerTue, ContainerWed, ContainerThu, ContainerSat, ContainerFri, ContainerColorSun, ContainerColorMon, ContainerColorTue, ContainerColorWed, ContainerColorThu, ContainerColorFri, ContainerColorSat, TextSun, TextMon, TextTue, TextWed, TextThu, TextFri, TextSat, TextProgress, ContainerWeekly, TextWeekly, TextActivity, TextMore, Container1, Container1Text1, Container1Text2, Container2, Container2Text1, Container2Text2, Imagem1, Imagem, Line1, Line2, ImgWeekly, ImgLatest, CircleColor, CircleColor2, ImgLatest2, Ball1Latest1, Ball2Latest1, Ball3Latest1, Ball1Latest2, Ball2Latest2, Ball3Latest2, } from "./style";


export default function Tracker({navigation}) {
    return(
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle>Activity Tracker</HeaderTitle>
               

                <HeaderContainer1>
                <HeaderIcon1>
                    <TouchableOpacity onPress={ () => navigation.navigate('Home') }>
                    <SimpleLineIcons name='arrow-left'/>
                    </TouchableOpacity>
                </HeaderIcon1>
            </HeaderContainer1>

                <HeaderContainer2>
                    <HeaderIcon2>
                    <FontAwesome name='circle' size={5}/>
                    </HeaderIcon2>

                    <HeaderIcon3>
                    <FontAwesome name='circle' size={5}/>
                    </HeaderIcon3>
                </HeaderContainer2>
                </HeaderArea>
                <ContainerTarget>
                <TextTarget>Today Target</TextTarget>
                    <ContainerWater>
                        <TextWater1>8L</TextWater1>
                        <TextWater2>Water Intake</TextWater2>
                        <Imagem>
                        <Image
                        source={require("../../components/Imagens/Tracker/object.png")}
                    />

                        </Imagem>

                    </ContainerWater>
                    <ContainerFood>
                        <TextFood1>2400</TextFood1>
                        <TextFood2>Foot Steps</TextFood2>

                        <Imagem1>
                        <Image
                        source={require("../../components/Imagens/Tracker/Group.png")}
                    />
                        </Imagem1>

                    </ContainerFood>

                    <ContainerPlus>
                        <Line1></Line1>
                        <Line2></Line2>
                    </ContainerPlus>
                </ContainerTarget>

                


                <ContainerProgress>
                <TextProgress>Activity Progress</TextProgress>
                <ContainerWeekly>
                    <ImgWeekly>
                        <MaterialIcons name='keyboard-arrow-down' color={'#FFFFFF'} size={17}/>
                    </ImgWeekly>
                    <TextWeekly>Weekly</TextWeekly>
                </ContainerWeekly>
                    <ContainerSun></ContainerSun>
                    <ContainerColorSun></ContainerColorSun>
                    <TextSun>Sun</TextSun>

                    <ContainerMon></ContainerMon>
                    <ContainerColorMon></ContainerColorMon>
                    <TextMon>Mon</TextMon>

                    <ContainerTue></ContainerTue>
                    <ContainerColorTue></ContainerColorTue>
                    <TextTue>Tue</TextTue>

                    <ContainerWed></ContainerWed>
                    <ContainerColorWed></ContainerColorWed>
                    <TextWed>Wed</TextWed>

                    <ContainerThu></ContainerThu>
                    <ContainerColorThu></ContainerColorThu>
                    <TextThu>Thu</TextThu>

                    <ContainerFri></ContainerFri>
                    <ContainerColorFri></ContainerColorFri>
                    <TextFri>Fri</TextFri>

                    <ContainerSat></ContainerSat>
                    <ContainerColorSat></ContainerColorSat>
                    <TextSat>Sat</TextSat>
                </ContainerProgress>


                <Container1>
                <TextActivity>Latest Activity</TextActivity>
                <TextMore>See more</TextMore>
                    <Container1Text1>Drinking 300ml Water</Container1Text1>
                    <Container1Text2>About 3 minutes ago</Container1Text2>
                    <CircleColor>
                    <ImgLatest>
                    <Image
                        source={require("../../components/Imagens/Tracker/Vector.png")}
                    />
                    </ImgLatest>
                    </CircleColor>
                    <Ball1Latest1></Ball1Latest1>
                    <Ball2Latest1></Ball2Latest1>
                    <Ball3Latest1></Ball3Latest1>
                </Container1>

                <Container2>
                    <Container2Text1>Eat Snack (Fitbar)</Container2Text1>
                    <Container2Text2>About 10 minutes ago</Container2Text2>
                    <CircleColor2>
                        <ImgLatest2>
                        <Image
                        source={require("../../components/Imagens/Tracker/OBJECTS.png")}
                    />
                        </ImgLatest2>
                    </CircleColor2>
                    <Ball1Latest2></Ball1Latest2>
                    <Ball2Latest2></Ball2Latest2>
                    <Ball3Latest2></Ball3Latest2>
                </Container2>
                
            </Scroller>
        </Container>

    );
}