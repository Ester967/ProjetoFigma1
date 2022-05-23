import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { ScrollView, Image, TouchableOpacity, Button} from 'react-native';
import { FontAwesome, SimpleLineIcons, EvilIcons,Entypo, MaterialIcons} from '@expo/vector-icons';
import { BarraInicial } from '../WorkoutTracker/style';
import {Scroller, Container, Background, ContainerPrincipal, HeaderContainer1,HeaderContainer2, HeaderIcon1, HeaderIcon2, HeaderIcon3,TitleText, SubTitleText, ContainerSchedule, ContainerDifficulity, TextSchedule, TextContainersScAndDiff, ContainerNeed, TextNeed, TextNeed2, ContainerBarbell, ContainerSkipping, ContainerBottle, TextBarbell, TextSkipping, TextBottle, ContainerExercises, ContainerSet1, TextSet, ContainerWarm, TextsExercises, Texts2Exercises, ContainerJumping, ContainerSkippin, ContainerSquats, ContainerArm, ContainerRest, ContainerSet2, TextSet2, ContainerIncline, ContainerPush, ButtonStart, TextStart, CircleBackground, CircleDet1, Img1, ImgBarbell, ImgSkipping, ImgBottle, ImgExercises, IconFullbody, IconDifficulity, IconDifficulity2, IconExercises, ContainerHeart, IconArrow} from './style'


export default function FullbodyWorkout(){
    const navigation = useNavigation();

    function navegaSchedule(){
        navigation.navigate('Schedule')
    }

    function navegaJumpingJack(){
        navigation.navigate('JumpingJack')
    }

    return(
    <Scroller>
        <Container>
            <Background>
                <TouchableOpacity onPress={ () => navigation.navigate('WorkoutTracker') }>
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

                <CircleBackground>
                    <Img1>
                    <Image
                                source={require('../../components/Imagens/FullbodyWorkout/Layer1.png')}/>
                    </Img1>
                </CircleBackground>
                <ContainerPrincipal>
                    <BarraInicial></BarraInicial>
                    <TitleText>Fullbody Workout</TitleText>
                    <SubTitleText>11 Exercises | 32mins | 320 Calories Burn</SubTitleText>
                    <ContainerHeart>
                        <Image
                                source={require('../../components/Imagens/FullbodyWorkout/Heart.png')}/>
                    </ContainerHeart>
                   
                    <TouchableOpacity onPress={navegaSchedule}>
                    <ContainerSchedule>
                        
                            <TextSchedule>Schedule Workout</TextSchedule>
                            <TextContainersScAndDiff>5/27, 09:00 AM</TextContainersScAndDiff>
                            <IconArrow>
                                <SimpleLineIcons name='arrow-right' color={'#7B6F72'} size={13}/>
                            </IconArrow>
                            
                            <IconFullbody>
                                <EvilIcons name='calendar' color={'#7B6F72'} size={25}/>
                            </IconFullbody>
                        
                    </ContainerSchedule>
                    </TouchableOpacity>

                    <ContainerDifficulity>
                        <TextSchedule>Difficulity</TextSchedule>
                        <TextContainersScAndDiff>Beginner</TextContainersScAndDiff>
                        <IconArrow>
                            <SimpleLineIcons name='arrow-right' color={'#7B6F72'} size={13}/>
                        </IconArrow>
                        <IconDifficulity>
                            <FontAwesome name='long-arrow-up' color={'#7B6F72'} size={20}/>
                        </IconDifficulity>

                        <IconDifficulity2>
                            <FontAwesome name='long-arrow-down' color={'#7B6F72'} size={20}/>
                        </IconDifficulity2>
                        

                    </ContainerDifficulity>

                    <ContainerNeed>
                        <TextNeed>You’ll Need</TextNeed>
                        <TextNeed2>5 Items</TextNeed2>

                        <ContainerBarbell>
                            <TextBarbell>Barbell</TextBarbell>
                            <ImgBarbell>
                    <Image
                                source={require('../../components/Imagens/FullbodyWorkout/Layer12.png')}/>
                    </ImgBarbell>
                        </ContainerBarbell>
                            
                        <ContainerSkipping>
                             <TextBarbell>Skipping Rope</TextBarbell>
                             <ImgSkipping>
                    <Image
                                source={require('../../components/Imagens/FullbodyWorkout/Layer8.png')}/>
                    </ImgSkipping>
                        </ContainerSkipping>

                        <ContainerBottle>
                            <TextBarbell>Bottle 1 Liters </TextBarbell>
                            <ImgBottle>
                    <Image
                                source={require('../../components/Imagens/FullbodyWorkout/Layer5.png')}/>
                    </ImgBottle>
                        </ContainerBottle>
                    </ContainerNeed>

                    <ContainerExercises>
                        <TextNeed>Exercises</TextNeed>
                        <TextNeed2>3 Sets</TextNeed2>

                        <ContainerSet1>
                           <TextSet>Set 1</TextSet> 

                           <ContainerWarm>
                               <TextsExercises>Warm Up</TextsExercises>
                               <Texts2Exercises>05:00</Texts2Exercises>
                               <IconExercises>
                                   <Entypo name='chevron-with-circle-right' color={'#ADA4A5'} size={20}/>
                               </IconExercises>
                               
                               <ImgExercises>
                                   
                                    <Image
                                        source={require('../../components/Imagens/FullbodyWorkout/WarmUp.png')}/>
                               
                               </ImgExercises>
                           </ContainerWarm>

                            <TouchableOpacity onPress={navegaJumpingJack}>
                           <ContainerJumping>
                               
                               <TextsExercises>Jumping Jack</TextsExercises>
                               <Texts2Exercises>12x</Texts2Exercises>
                               <IconExercises>
                                   <Entypo name='chevron-with-circle-right' color={'#ADA4A5'} size={20}/>
                               </IconExercises>
                               <ImgExercises>
                                   
                                   <Image
                                       source={require('../../components/Imagens/FullbodyWorkout/JumpingJack.png')}/>
                              
                              </ImgExercises>
                           </ContainerJumping>
                           </TouchableOpacity>
                           
                           <ContainerSkippin>
                                <TextsExercises>Skipping</TextsExercises>
                                <Texts2Exercises>12x</Texts2Exercises>
                                <IconExercises>
                                   <Entypo name='chevron-with-circle-right' color={'#ADA4A5'} size={20}/>
                               </IconExercises>
                                <ImgExercises>
                                   
                                   <Image
                                       source={require('../../components/Imagens/FullbodyWorkout/Skipping.png')}/>
                              
                              </ImgExercises>


                           </ContainerSkippin>

                          
                           <ContainerSquats>
                                <TextsExercises>Squats</TextsExercises>
                                <Texts2Exercises>20x</Texts2Exercises>
                                <IconExercises>
                                   <Entypo name='chevron-with-circle-right' color={'#ADA4A5'} size={20}/>
                               </IconExercises>
                                <ImgExercises>
                                   
                                   <Image
                                       source={require('../../components/Imagens/FullbodyWorkout/Squats.png')}/>
                              
                              </ImgExercises>
                           </ContainerSquats>

                           
                           <ContainerArm>
                                <TextsExercises>Arm Raises</TextsExercises>
                                <Texts2Exercises>00:53</Texts2Exercises>
                                <IconExercises>
                                   <Entypo name='chevron-with-circle-right' color={'#ADA4A5'} size={20}/>
                               </IconExercises>
                                <ImgExercises>
                                   
                                   <Image
                                       source={require('../../components/Imagens/FullbodyWorkout/ArmRaises.png')}/>
                              
                              </ImgExercises>
                           </ContainerArm>

                           
                           <ContainerRest>
                                <TextsExercises>Rest and Drink</TextsExercises>
                                <Texts2Exercises>02:00</Texts2Exercises>
                                <IconExercises>
                                   <Entypo name='chevron-with-circle-right' color={'#ADA4A5'} size={20}/>
                               </IconExercises>
                                <ImgExercises>
                                   
                                   <Image
                                       source={require('../../components/Imagens/FullbodyWorkout/RestandDrink.png')}/>
                              
                              </ImgExercises>
                           </ContainerRest>
                        </ContainerSet1>

                        <ContainerSet2>
                            <TextSet2>Set 2</TextSet2>

                            <ContainerIncline>
                                <TextsExercises>Incline Push-Ups</TextsExercises>
                                <Texts2Exercises>12x</Texts2Exercises>
                                <IconExercises>
                                   <Entypo name='chevron-with-circle-right' color={'#ADA4A5'} size={20}/>
                               </IconExercises>
                                <ImgExercises>
                                   
                                   <Image
                                       source={require('../../components/Imagens/FullbodyWorkout/InclinePush-Ups.png')}/>
                              
                              </ImgExercises>
                            </ContainerIncline>

                            
                            <ContainerPush>
                                <TextsExercises>Push-Ups</TextsExercises>
                                <Texts2Exercises>15x</Texts2Exercises>
                                <IconExercises>
                                   <Entypo name='chevron-with-circle-right' color={'#ADA4A5'} size={20}/>
                               </IconExercises>
                                <ImgExercises>
                                   
                                   <Image
                                       source={require('../../components/Imagens/FullbodyWorkout/Push-Ups.png')}/>
                              
                              </ImgExercises>
                            </ContainerPush>
                        </ContainerSet2>

                        <ButtonStart>
                            <TextStart>Start Workout</TextStart>
                        </ButtonStart>
                    </ContainerExercises>

                  </ContainerPrincipal>
            </Background>
        </Container>
    </Scroller>
     

    
    );
}