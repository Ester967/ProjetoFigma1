import React, {useState} from 'react';
import ModalNewRoom from '../../components/ModalNewRoom';
import FabButton from '../../components/FabButton';
import {useNavigation} from '@react-navigation/native'
import { Image, TouchableOpacity, Modal, Button } from 'react-native';
import {Feather, FontAwesome, SimpleLineIcons,Entypo} from '@expo/vector-icons';
import { Container, Scroller, HeaderTitle, ContainerMonth, TextMay, ContainerMay, ContainerWed, ContainerTue, ContainerThus, ContainerFri, ContainerSat, ContainerSun, TextWeek, NumberWeek, ContainerTL, Line, Time, Container1, Container2, Container3, Container4, Container5, Container6, Container7, Container8, Container9, Container10, Container11, Container12, Container13, Container14, Container15, ContainerAB, TextAB, ContainerUpperbody, TextUpperbody, ContainerButtonPlus, TextFri, NumberFri, HeaderArea, HeaderContainer1, HeaderContainer2, HeaderIcon1, HeaderIcon2, HeaderIcon3, IconMay, IconMay2, LineBlue, ContainerLineBlue, TextSat } from './style'

export default function Schedule(){
    const navigation = useNavigation();
    function navegaAddSchedule(){ 
        navigation.navigate('AddSchedule')
    }

    const[modalVisible, setModalVisible] = useState(false);
        return(
            <Scroller>
            <Container>
            
       
            
                <HeaderArea>
                    <HeaderTitle>Workout Schedule</HeaderTitle>
                

                <TouchableOpacity onPress={ () => navigation.navigate('FullbodyWorkout') }>
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

                <ContainerMonth>
                    <ContainerMay>
                        <TextMay>May 2021</TextMay>
                        <IconMay>
                            <Entypo name='chevron-thin-left' color={'#ADA4A5'} size={15}/>
                        </IconMay>
                        <IconMay2>
                            <Entypo name='chevron-thin-right' color={'#ADA4A5'} size={15}/>
                        </IconMay2>
                    </ContainerMay>

                    <ContainerTue>
                        <TextWeek>Tue</TextWeek>
                        <NumberWeek>11</NumberWeek>
                    </ContainerTue>

                    <ContainerWed>
                        <TextWeek>Wed</TextWeek>
                        <NumberWeek>12</NumberWeek>
                    </ContainerWed>

                    <ContainerThus>
                        <TextWeek>Thus</TextWeek>
                        <NumberWeek>13</NumberWeek>
                    </ContainerThus>

                    <ContainerFri>
                        <TextFri>Fri</TextFri>
                        <NumberFri>14</NumberFri>
                    </ContainerFri>

                    <ContainerSat>
                        <TextSat>Sat</TextSat>
                        <NumberWeek>15</NumberWeek>
                    </ContainerSat>

                    <ContainerSun>
                        <TextWeek>Sun</TextWeek>
                        <NumberWeek>16</NumberWeek>
                    </ContainerSun>
                </ContainerMonth>

                <ContainerTL>
                    <Container1>
                        <Time>06:00 AM</Time>
                        <Line></Line>
                    </Container1>

                    <Container2>
                        <Time>07:00 AM</Time>
                        <Line></Line>
                        <ContainerAB>
                            <TextAB>Ab Workout, 7:30am</TextAB>
                        </ContainerAB>
                    </Container2>

                    <Container3>
                        <Time>08:00 AM</Time>
                        <Line></Line>
                        <ContainerUpperbody>
                            <TextUpperbody>Upperbody Workout, 9am</TextUpperbody>
                        </ContainerUpperbody>
                    </Container3>
                    
                    <Container4>
                        <Time>09:00 AM</Time>
                        
                        <ContainerLineBlue>
                            <LineBlue></LineBlue>
                        </ContainerLineBlue>
                        
                        <Line></Line>

                    </Container4>
                    
                    <Container5>
                        <Time>10:00 AM</Time>
                        <Line></Line>
                    </Container5>

                    <Container6>
                        <Time>11:00 AM</Time>
                        <Line></Line>
                    </Container6>
                    
                    <Container7>
                        <Time>12:00 AM</Time>
                        <Line></Line>
                    </Container7>
                    
                    <Container8>
                        <Time>01:00 PM</Time>
                        <Line></Line>
                    </Container8>
                    
                    <Container9>
                        <Time>02:00 PM</Time>
                        <Line></Line>
                    </Container9>
                   
                    <Container10>
                        <Time>03:00 PM</Time>
                        <Line></Line>
                    </Container10>
                    
                    <Container11>
                        <Time>04:00 PM</Time>
                        <Line></Line>
                    </Container11>
                   
                    <Container12>
                        <Time>05:00 PM</Time>
                        <Line></Line>
                    </Container12>
                    
                    <Container13>
                        <Time>06:00 PM</Time>
                        <Line></Line>
                    </Container13>
                    
                    <Container14>
                        <Time>07:00 PM</Time>
                        <Line></Line>
                    </Container14>
                    
                    <Container15>
                        <Time>08:00 PM</Time>
                    </Container15>

                </ContainerTL>
                
                
                <TouchableOpacity onPress={navegaAddSchedule}>
                    
                    <ContainerButtonPlus>
                        <Entypo name='plus' color={'#FFFFFF'} size={20}/>
                    </ContainerButtonPlus>
               
                </TouchableOpacity>

            <FabButton setVisible={() => setModalVisible(true)}/>

            <Modal visible={modalVisible} animationType="fade" transparent={true}>
            <ModalNewRoom setVisible={() => setModalVisible(false)}/>

            </Modal>

                    
            

        
        
        </Container>
        </Scroller>
    );
}