import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Feather, FontAwesome, SimpleLineIcons,MaterialIcons} from '@expo/vector-icons';
import {Container, HeaderArea, HeaderTitle, HeaderText, HeaderContainer, ContainerTitle, ContainerText, AreaButton, MoreButton, ButtonText,     Circle, HalfCircle, Bolha, Bolha2, Bolha3, Bolha4, Bolha5, Bolha6, NotificationButton, Container2, TextContainer2, CheckButton, TextButtonCheck,
Text2, ContainerStatistics, TitleStatistics, TextStatistics, TimeButton, TextTimeButton, ContainerWater, ContainerSleep, ContainerCalories,
MeterWater, ColorMeterWater, TextWater, TextWater2, TextWater3, Ball, Ball2,Ball3,Ball4,Ball5,Straight,Straight2,Straight3,Straight1,TextBall,TextBall2,TextStraight,TextStraight1,TextBall3,TextStraight2,TextBall4,TextStraight3,TextBall5,TextStraight4,TextSleep,TextTimeSleep,TextCalories,Textkg,CircleCalories,TextCircleCalories,CircleCircle, ContainerProgress,TextProgress,ButtonWeekly,LineProgress,LineProgress2,LineProgress3,LineProgress4,LineProgress5,LineProgress6, Day1, Day2, Day3, Day4, Day5, Day6, Day7, Num1, Num2, Num3, Num4, Num5, Num6, CashierProgress, TextCashierProgress, Text2CashierProgress, NumCashierProgress, ArrowCashierProgress, GraphicCachierProgress, ColorGraphicCachierProgress, ColorGraphicProgress, TextWorkout, Text2Workout, TextPerfil1, Text2Perfil1, GraphicPerfil1, GraphicColorPerfil1, TextPerfil2, Text2Perfil2, GraphicPerfil2, GraphicColorPerfil2, CirclePerfil1, ArrowPerfil1, CirclePerfil2, ArrowPerfil2, Scroller, Img1, Img2, TextWeekly, ImgWeekly, DetButton, ImgStatistics, ImgSleep, ImgProgress, ContainerMore, ContainerWorkout, ImgFri, ContainerLine} from './style';
import PizzaHome from '../../components/Graphics/PizzaHome';
import CircleHome from '../../components/Graphics/CircleHome';

export default function Home() {
    const navigation = useNavigation();

    function navegaNotification(){ 
        navigation.navigate('Notification')
    }

    function navegaCongratulations(){
        navigation.navigate('Congratulations')
    }

    function navegaTracker(){
        navigation.navigate('Tracker')
    }

    function navegaWorkoutTracker(){
        navigation.navigate('WorkoutTracker')
    }

    return(
        <Scroller>
        <Container>
            <HeaderArea>
                <HeaderTitle>Stefani Wong</HeaderTitle>
                <HeaderText>Welcome Back,</HeaderText>
                    
                    <AreaButton>
                        <NotificationButton>
                            <TouchableOpacity  onPress={navegaNotification}>
                                <Feather name='bell'size={20}/>
                            </TouchableOpacity>
                        </NotificationButton>
                    </AreaButton>
                </HeaderArea>

                
                <HeaderContainer>
                    <ContainerTitle>BMI (Body Mass Index)</ContainerTitle>
                    <ContainerText>You have a normal weight</ContainerText>
                   
                   
                        <TouchableOpacity onPress={navegaCongratulations}>
                            <MoreButton>
                            <ButtonText>View More</ButtonText>
                            </MoreButton>

                    </TouchableOpacity>
                       
                    
                    <Circle>
                   <PizzaHome/>
                   <HalfCircle>20,1</HalfCircle>
                    </Circle>
                    
                    <Bolha></Bolha>
                    <Bolha2></Bolha2>
                    <Bolha3></Bolha3>
                    <Bolha4></Bolha4>
                    <Bolha5></Bolha5>
                    <Bolha6></Bolha6>
                    
                   
                </HeaderContainer>
                
                <Container2>
                    <TextContainer2>Today Target</TextContainer2>
                   
    
                    <TouchableOpacity onPress={navegaTracker}>
                    <CheckButton>
                        <TextButtonCheck>Check</TextButtonCheck>
                    </CheckButton>
                    </TouchableOpacity>
              
                </Container2>

                <Text2>Activity Status</Text2>
                <ContainerStatistics>
                    <TitleStatistics>Heart Rate</TitleStatistics>
                    <TextStatistics>78 BPM</TextStatistics>
                    <TimeButton>
                        <TextTimeButton>3mins ago</TextTimeButton>
                    </TimeButton>
                    <DetButton></DetButton>
                    <ImgStatistics>
                    <Image
                                source={require('../../components/Imagens/Home/HeartGraph.png')}/>
                    </ImgStatistics>


                </ContainerStatistics>

                <ContainerWater>
                    <MeterWater></MeterWater>
                    <ColorMeterWater></ColorMeterWater>
                    
                    <TextWater>Water Intake</TextWater>
                    <TextWater2>4 Liters</TextWater2>
                    <TextWater3>Real time updates</TextWater3>
                    
                    <Ball></Ball>
                    <TextBall>6am - 8am</TextBall>
                    <Straight>
                        <Image
                                source={require('../../components/Imagens/Home/Line27.png')}/>
                    </Straight>
                    <TextStraight>600ml</TextStraight>

                    <Ball2></Ball2>
                    <TextBall2>9am - 11am</TextBall2>
                    <Straight1>
                        <Image
                                source={require('../../components/Imagens/Home/Line27.png')}/>
                    </Straight1>
                    <TextStraight1>500ml</TextStraight1>

                    <Ball3></Ball3>
                    <TextBall3>11am - 2pm</TextBall3>
                    <Straight2>
                        <Image
                                source={require('../../components/Imagens/Home/Line27.png')}/>
                    </Straight2>
                    <TextStraight2>1000ml</TextStraight2>

                    <Ball4></Ball4>
                    <TextBall4>2pm - 4pm</TextBall4>
                    <Straight3>
                        <Image
                                source={require('../../components/Imagens/Home/Line27.png')}/>
                    </Straight3>
                    <TextStraight3>700ml</TextStraight3>
                    
                    <Ball5></Ball5>
                    <TextBall5>4pm - now</TextBall5>
                    <TextStraight4>900ml</TextStraight4>


                </ContainerWater>
               
                <ContainerSleep>
                   
                    <TextSleep>Sleep</TextSleep>
                    <TextTimeSleep>8h 20m</TextTimeSleep>
                    <ImgSleep>
                    <Image
                                source={require('../../components/Imagens/Home/SleepGraph.png')}/>
                    </ImgSleep>
    

                </ContainerSleep>
              
                <ContainerCalories>
                    <TextCalories>Calories</TextCalories>
                    <Textkg>760 kCal</Textkg>
                    
                    <CircleCalories>
                        <TextCircleCalories>230kCal left</TextCircleCalories>
                    </CircleCalories>
                    
                    <CircleCircle>
                        <CircleHome/>
                    </CircleCircle>
                
                </ContainerCalories>

                <ContainerProgress>
                    <TextProgress>Workout Progress</TextProgress>
                    
                    <TouchableOpacity onPress={navegaWorkoutTracker}>
                    <ButtonWeekly>
                        <TextWeekly>Weekly</TextWeekly>
                        <ImgWeekly>
                             <MaterialIcons name='keyboard-arrow-down' color={'#FFFFFF'} size={17}/>
                        </ImgWeekly>
                </ButtonWeekly>
                </TouchableOpacity>
                    
                    <ContainerLine>
                    <LineProgress></LineProgress>
                    <LineProgress2></LineProgress2>
                    <LineProgress3></LineProgress3>
                    <LineProgress4></LineProgress4>
                    <LineProgress5></LineProgress5>
                    <LineProgress6></LineProgress6>

                    <ImgProgress source={require('../../components/Imagens/Home/LineGraph.png')}/>
                                
                    </ContainerLine>

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

                    <ImgFri>
                        <Image
                                source={require('../../components/Imagens/Home/Active-Graph.png')}/>
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
                    <ColorGraphicProgress></ColorGraphicProgress>
                    </CashierProgress>  
                </ContainerProgress>

                

                <ContainerWorkout>
                <TextWorkout>Latest Workout</TextWorkout>
                <Text2Workout>See more</Text2Workout>

                <TextPerfil1>Fullbody Workout</TextPerfil1>
                    <Text2Perfil1>180 Calories Burn | 20minutes</Text2Perfil1>
 
                    <Img1>
                        <Image
                            source={require("../../components/Imagens/Home/Vector1.png")}
                        />
                    </Img1>
 
                    <GraphicPerfil1></GraphicPerfil1>
                    <GraphicColorPerfil1></GraphicColorPerfil1>
 
                    <TextPerfil2>Lowerbody Workout</TextPerfil2>
                    <Text2Perfil2>200 Calories Burn | 30minutes</Text2Perfil2>
 
                    <Img2>
                        <Image
                            source={require("../../components/Imagens/Home/Vector2.png")}
                        />
                    </Img2>
 
                    <GraphicPerfil2></GraphicPerfil2>
                    <GraphicColorPerfil2></GraphicColorPerfil2>
 
                    <CirclePerfil1>
                        <FontAwesome name='circle-thin' size={27} color = "#C58BF2"/>
                    </CirclePerfil1>
 
                    <ArrowPerfil1>
                         <SimpleLineIcons name='arrow-right' size={10} color = "#C58BF2" />
                    </ArrowPerfil1>
 
                    <CirclePerfil2>
                        <FontAwesome name='circle-thin' size={27} color = "#C58BF2"/>
                    </CirclePerfil2>
 
                    <ArrowPerfil2>
                         <SimpleLineIcons name='arrow-right' size={10} color = "#C58BF2" />
                    </ArrowPerfil2>



                    </ContainerWorkout>
        
                    </Container>
                    </Scroller>      
        
        
        
        
    );
}