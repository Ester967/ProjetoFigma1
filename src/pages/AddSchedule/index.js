import React from 'react';
import {  TouchableOpacity,Image} from 'react-native';
import {MaterialCommunityIcons, FontAwesome, SimpleLineIcons,Foundation, EvilIcons} from '@expo/vector-icons';
import { Container, ContainerButtonSave, ContainerChoose, ContainerDetails, ContainerDifficulity, ContainerFor, ContainerRepetitions, ContainerThu, ContainerTime, ContainerTree, ContainerTwo, ContainerWeights, HeaderArea, HeaderContainer1, HeaderContainer2, HeaderIcon1, HeaderIcon2, HeaderIcon3, HeaderTitle, IconArrow, Line1, Line2, TextContainerDetails, TextContainerDetails2, TextDetails, TextNumber, TextNumber2, TextNumber3, TextNumberBold1, TextNumberBold2, TextNumberBold3, TextSave, TextThu, TextTime} from './style';
import { IconDifficulity, IconDifficulity2, IconFullbody } from '../FullbodyWorkout/style';

export default function AddSchedule({navigation}){
    return(
        <Container>
            <HeaderArea>
                <HeaderTitle>Add Schedule</HeaderTitle>
            
    <TouchableOpacity onPress={ () => navigation.navigate('Schedule') }>
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

            
            <ContainerThu>
                <TextThu>Thu, 27 May 2021</TextThu>
                <IconFullbody>
                        <EvilIcons name='calendar' color={'#7B6F72'} size={25}/>
                </IconFullbody>
            </ContainerThu>

            
            <ContainerTime>
                <TextTime>Time</TextTime>
                
                <ContainerTwo>
                    <TextNumber>2</TextNumber>
                    <TextNumber2>29</TextNumber2>
                    <TextNumber3>AM</TextNumber3>
                    <Line1></Line1>
                </ContainerTwo>

                
                <ContainerTree>
                    <TextNumberBold1>3</TextNumberBold1>
                    <TextNumberBold2>30</TextNumberBold2>
                    <TextNumberBold3>PM</TextNumberBold3>
                    <Line2></Line2>
                </ContainerTree>

                <ContainerFor>
                    <TextNumber>4</TextNumber>
                    <TextNumber2>31</TextNumber2>
                </ContainerFor>
            </ContainerTime>

            <ContainerDetails>
                <TextDetails>Details Workout</TextDetails>

                <ContainerChoose>
                    <TextContainerDetails>Choose Workout</TextContainerDetails>
                    <TextContainerDetails2>Upperbody Workout</TextContainerDetails2>
                    <IconFullbody>
                        <MaterialCommunityIcons name='dumbbell' color={'#7B6F72'} size={18}/>
                    </IconFullbody>

                    <IconArrow>
                        <SimpleLineIcons name='arrow-right' color={'#ADA4A5'} size={13}/>
                    </IconArrow>
                </ContainerChoose>
                
                
                <ContainerDifficulity>
                    <TextContainerDetails>Difficulity</TextContainerDetails>
                    <TextContainerDetails2>Beginner</TextContainerDetails2>

                    <IconDifficulity><FontAwesome name='long-arrow-up' color={'#7B6F72'} size={18}/></IconDifficulity>
                    <IconDifficulity2><FontAwesome name='long-arrow-down' color={'#7B6F72'} size={18}/></IconDifficulity2>

                    <IconArrow>
                        <SimpleLineIcons name='arrow-right' color={'#ADA4A5'} size={13}/>
                    </IconArrow>
                </ContainerDifficulity>


                <ContainerRepetitions>
                    <TextContainerDetails>Custom Repetitions</TextContainerDetails>
                    <IconDifficulity>
                    <Foundation name='graph-trend' color={'#7B6F72'} size={22}/>
                    </IconDifficulity>

                    <IconArrow>
                        <SimpleLineIcons name='arrow-right' color={'#ADA4A5'} size={13}/>
                    </IconArrow>
                </ContainerRepetitions>
                
                
                <ContainerWeights>
                    <TextContainerDetails>Custom Weights</TextContainerDetails>
                    <IconDifficulity>
                    <Foundation name='graph-trend' color={'#7B6F72'} size={22}/>
                    </IconDifficulity>

                    <IconArrow>
                        <SimpleLineIcons name='arrow-right' color={'#ADA4A5'} size={13}/>
                    </IconArrow>
                </ContainerWeights>
            </ContainerDetails>


            <ContainerButtonSave>
                <TextSave>Save</TextSave>
            </ContainerButtonSave>
        </Container>
    );
}