import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import { CaloriesTimes, Container,HeaderContainer1, HeaderIcon1, HeaderIcon2, HeaderIcon3,HeaderContainer2,HeaderArea, ContainerAdjust, ContainerButtonSave, ContainerClapping, ContainerCustom, ContainerDescriptions, ContainerHTDI, ContainerImg, ContainerRest, ContainerSpread, ImgCircle, ImgFire, ImgFire30, ImgFire31, ImgLine, Line1, Line2, Num, Number30, Number31, NumberCalories, Scroller, Text30Calories, TextCalories, TextDescriptions, TextDescriptions2, TextHow, TextImg, TextImg2, TextRD, TextSave, TituloHow} from './style'
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import { TextNeed, TextNeed2 } from '../FullbodyWorkout/style';


export default function JumpingJack({navigation}){
    return(
        <Scroller>
            <Container>
                
                <TouchableOpacity onPress={ () => navigation.navigate('FullbodyWorkout') }>
                    <HeaderContainer1>
                        <HeaderIcon1>
                            <Ionicons name='close'/>
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
                        
                

                <ContainerImg>
                             <Image
                                source={require('../../components/Imagens/JumpingJack/VideoSection.png')}/>

                            <TextImg>Jumping Jack</TextImg>
                            <TextImg2>Easy | 390 Calories Burn</TextImg2>
                    </ContainerImg>

                <ContainerDescriptions>
                    <TextDescriptions>Descriptions</TextDescriptions>
                    <TextDescriptions2>A jumping jack, also known as a star jump and called a side-straddle hop in the US military, is a physical jumping exercise performed by jumping to a position with the legs spread wide</TextDescriptions2>
                    <TextRD>Read More...</TextRD>
                </ContainerDescriptions>

                <ContainerHTDI>
                <TextNeed>How To Do It</TextNeed>
                <TextNeed2>4 Steps</TextNeed2>
                    
                    <ContainerSpread>
                        <TituloHow>Spread Your Arms</TituloHow>
                        <TextHow>To make the gestures feel more relaxed, stretch your arms as you start this movement. No bending of hands.</TextHow>
                        <ImgCircle>
                            <Image
                                source={require('../../components/Imagens/JumpingJack/Circle1.png')}/>

                        </ImgCircle>
                        <ImgLine>
                            <Image
                                source={require('../../components/Imagens/JumpingJack/Line32.png')}/>

                        </ImgLine>

                        <Num>01</Num>
                    </ContainerSpread>

                    <ContainerRest>
                    <TituloHow>Rest at The Toe</TituloHow>
                        <TextHow>The basis of this movement is jumping. Now, what needs to be considered is that you have to use the tips of your feet</TextHow>
                        <ImgCircle>
                            <Image
                                source={require('../../components/Imagens/JumpingJack/Circle1.png')}/>

                        </ImgCircle>
                        <ImgLine>
                            <Image
                                source={require('../../components/Imagens/JumpingJack/Line32.png')}/>

                        </ImgLine>
                        <Num>02</Num>
                    </ContainerRest>

                    <ContainerAdjust>
                    <TituloHow>Adjust Foot Movement</TituloHow>
                        <TextHow>Jumping Jack is not just an ordinary jump. But, you also have to pay close attention to leg movements.</TextHow>

                        <ImgCircle>
                            <Image
                                source={require('../../components/Imagens/JumpingJack/Circle1.png')}/>

                        </ImgCircle>
                        <ImgLine>
                            <Image
                                source={require('../../components/Imagens/JumpingJack/Line32.png')}/>

                        </ImgLine>
                        <Num>03</Num>
                    </ContainerAdjust>

                    <ContainerClapping>
                    <TituloHow>Clapping Both Hands</TituloHow>
                        <TextHow>This cannot be taken lightly. You see, without realizing it, the clapping of your hands helps you to keep your rhythm while doing the Jumping Jack</TextHow>
                        <ImgCircle>
                            <Image
                                source={require('../../components/Imagens/JumpingJack/Circle1.png')}/>

                        </ImgCircle>
                        <Num>04</Num>
                    </ContainerClapping>
                </ContainerHTDI>

                <ContainerCustom>

                    <TextNeed>Custom Repetitions</TextNeed>

                    <TextCalories>450 Calories Burn</TextCalories>
                    <NumberCalories>29</NumberCalories>
                    <ImgFire>
                        <Image
                                source={require('../../components/Imagens/JumpingJack/calories.png')}/>
                    </ImgFire>
                    <Line1></Line1>

                    <Text30Calories>450 Calories Burn</Text30Calories>
                    <Number30>30</Number30>
                    <CaloriesTimes>times</CaloriesTimes>
                    <ImgFire30>
                        <Image
                                source={require('../../components/Imagens/JumpingJack/calories.png')}/>
                    </ImgFire30>
                    <Line2></Line2>

                    <TextCalories>450 Calories Burn</TextCalories>
                    <Number31>31</Number31>
                    <ImgFire31>
                        <Image
                                source={require('../../components/Imagens/JumpingJack/calories.png')}/>
                    </ImgFire31>
                </ContainerCustom>

                <ContainerButtonSave>
                    <TextSave>Save</TextSave>
                </ContainerButtonSave>




            </Container>
        </Scroller>
    

       
    );
}