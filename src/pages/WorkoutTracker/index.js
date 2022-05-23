import React from 'react';
import {Image, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { BarraInicial, ButtonDaly, ButtonTextDaly, Container, Container11, Container12, Container14, ContainerDaly, ContainerFullbody, ContainerPrincipal, ContainerTrain, ContainerUpcoming, ContainerUpperbody, Scroller, TextDaly, TextFullbody, TextFullbody2, TextTrain, TextUpcoming, TextUpcoming2, TextUpperbody, TextUpperbody2, Text1Container11, Text2Container11, ButtonView, TextButtonView, BackgroundFoto, Background, HeaderTitle, HeaderArea, HeaderContainer2,HeaderContainer1, HeaderIcon1, HeaderIcon2, HeaderIcon3, ContainerProgress, LineProgress, LineProgress2, LineProgress3, LineProgress4, LineProgress5, LineProgress6, Day1, Day2, Day3, Day4, Day5, Day6, Day7, Num1, Num2, Num3, Num4, Num5, Num6, Img, CashierProgress, TextCashierProgress, Text2CashierProgress, NumCashierProgress, ArrowCashierProgress, GraphicCachierProgress, ColorGraphicCachierProgress,GraphicPop, GraphicPopCircle, GraphicPop2, GraphicPopCircle2,ImgProgress, ImgFri} from './style';
import {Feather, FontAwesome, SimpleLineIcons} from '@expo/vector-icons';



export default function WorkoutTracker(){
    const navigation = useNavigation();

    function navegaFullbodyWorkout(){ 
        navigation.navigate('FullbodyWorkout')
    }
    return(
        
    <Container>
        <ScrollView>
        <Background>
           <HeaderArea>
                <HeaderTitle>Workout Tracker</HeaderTitle>
                
                <TouchableOpacity onPress={ () => navigation.navigate('Home') }>
                <HeaderContainer1>

                    <HeaderIcon1>
                    <SimpleLineIcons name='arrow-left'/>
                    </HeaderIcon1>
                    
                </HeaderContainer1>
                </TouchableOpacity>                

                <HeaderContainer2>
                    <HeaderIcon2>
                    <FontAwesome name='circle' size={5}/>
                    </HeaderIcon2>

                    <HeaderIcon3>
                    <FontAwesome name='circle' size={5}/>
                    </HeaderIcon3>
                </HeaderContainer2>
                </HeaderArea>
            <ContainerProgress>

                <LineProgress></LineProgress>
                <LineProgress2></LineProgress2>
                <LineProgress3></LineProgress3>
                <LineProgress4></LineProgress4>
                <LineProgress5></LineProgress5>
                <LineProgress6></LineProgress6>

                <Day1>Sun</Day1>
                <Day2>Mon</Day2>
                <Day3>Tue</Day3>
                <Day4>Wed</Day4>
                <Day5>Thu</Day5>
                <Day6>Fri</Day6>
                <Day7>Sat</Day7>

                <Num1>100%</Num1>
                <Num2>80%</Num2>
                <Num3>60%</Num3>
                <Num4>40%</Num4>
                <Num5>20%</Num5>
                <Num6>0%</Num6>

                <ImgProgress>
                    <Image
                                source={require('../../components/Imagens/WorkoutTracker/LineGraph1.png')}/>
                </ImgProgress>

                <ImgFri>
                    <Image
                                source={require('../../components/Imagens/WorkoutTracker/ActiveGraph1.png')}/>
                </ImgFri>
                
                <CashierProgress> 
                    <TextCashierProgress>Fri, 28 May </TextCashierProgress>  
                    <Text2CashierProgress>Upperbody Workout</Text2CashierProgress>
                    <NumCashierProgress>90%</NumCashierProgress>
                    <ArrowCashierProgress>
                        <Feather name= 'arrow-up' size={10} color="#42D742" />
                    </ArrowCashierProgress>
                    <GraphicCachierProgress></GraphicCachierProgress>
                    <ColorGraphicCachierProgress></ColorGraphicCachierProgress>
                    </CashierProgress> 
            </ContainerProgress>
        
        
        <ContainerPrincipal>
            <BarraInicial></BarraInicial>
            <ContainerDaly>
                <TextDaly>Daily Workout Schedule</TextDaly>
                <ButtonDaly>
                    <ButtonTextDaly>Check</ButtonTextDaly>
                </ButtonDaly>
            </ContainerDaly>

            <ContainerUpcoming>
                    <TextUpcoming>Upcoming Workout</TextUpcoming>
                    <TextUpcoming2>See more</TextUpcoming2>

                    <ContainerFullbody>
                        <Img>
                            <Image
                                source={require('../../components/Imagens/WorkoutTracker/Workout-Pic.png')}
                            />
                        </Img>

                        <TextFullbody>Fullbody Workout</TextFullbody>
                        <TextFullbody2>Today, 03:00pm</TextFullbody2>

                        <GraphicPop></GraphicPop>
                        <GraphicPopCircle></GraphicPopCircle>

                        
                    </ContainerFullbody>

                    <ContainerUpperbody>
                    <Img>
                            <Image
                                source={require('../../components/Imagens/WorkoutTracker/WorkoutPic1.png')}
                            />
                        </Img>


                        <TextUpperbody>Upperbody Workout</TextUpperbody>
                        <TextUpperbody2>June 05, 02:00pm</TextUpperbody2>

                        <GraphicPop2></GraphicPop2>
                        <GraphicPopCircle2></GraphicPopCircle2>
                    </ContainerUpperbody>
                </ContainerUpcoming>

                <ContainerTrain>
                    <TextTrain>What Do You Want to Train</TextTrain>

                    <Container11>
                        <Text1Container11>Fullbody Workout</Text1Container11>
                        <Text2Container11>11 Exercises | 32mins</Text2Container11>
                        <TouchableOpacity onPress={navegaFullbodyWorkout}>
                        <ButtonView>
                            
                            <TextButtonView>View more</TextButtonView>
                           
                        </ButtonView>
                        </TouchableOpacity>
                        <BackgroundFoto>
                        <Image
                                source={require('../../components/Imagens/WorkoutTracker/Vector-2.png')}
                            />
                        </BackgroundFoto>

                    </Container11>

                    <Container12>
                        <Text1Container11>Lowebody Workout</Text1Container11>
                        <Text2Container11>12 Exercises | 40mins</Text2Container11>
                        <ButtonView>
                            <TextButtonView>View more</TextButtonView>
                        </ButtonView>
                        <BackgroundFoto>
                        <Image
                                source={require('../../components/Imagens/WorkoutTracker/Character.png')}
                            />
                        </BackgroundFoto>

                    </Container12>

                    <Container14>
                        <Text1Container11>AB Workout</Text1Container11>
                        <Text2Container11>14 Exercises | 20mins</Text2Container11>
                        <ButtonView>
                            <TextButtonView>View more</TextButtonView>
                        </ButtonView>
                        <BackgroundFoto>
                        <Image
                                source={require('../../components/Imagens/WorkoutTracker/Character1.png')}
                            />
                        </BackgroundFoto>
                    </Container14>
                </ContainerTrain>

            

        </ContainerPrincipal>
        </Background>
        </ScrollView>
    </Container>
    
    );
}