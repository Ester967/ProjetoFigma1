import React from 'react';
import {FontAwesome, SimpleLineIcons,Entypo} from '@expo/vector-icons';
import { Image, TouchableOpacity } from 'react-native';
import { Text2Line1, TextLine1, Line1, Scroller, TextLine2, Text2Line2, Line2, TextLine3, Text2Line3, Line3, TextLine4, Text2Line4, Line4, TextLine5, Text2Line5, Line5, TextLine6, Text2Line6, Img1, Img2, Img3, Img4, Img5, Img6, Container,
    HeaderArea,
    HeaderTitle,
    HeaderContainer1,
    HeaderContainer2,
    HeaderIcon1,
    HeaderIcon2,
    HeaderIcon3,
    BallNotif1,
    BallNotif2,
    BallNotif3,
    BallNotif4,
    BallNotif5,
    BallNotif6 } from './style'

 export default function Notification({navigation}){
     return(
        <Container>
        
            <HeaderArea>
            <HeaderTitle>Notification</HeaderTitle>
            
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

                <TextLine1>Hey, it’s time for lunch</TextLine1>
                <Text2Line1>About 1 minutes ago</Text2Line1>

                <Img1>
                    <Image
                        source={require("../../components/Imagens/Notification/Ellipse1.png")}/>
                </Img1>
                <BallNotif1>
                    <Entypo name='dots-three-vertical' size={15} color={'#ADA4A5'}/>
                </BallNotif1>
                <Line1></Line1>


                <TextLine2>Don’t miss your lowerbody workout</TextLine2>
                <Text2Line2>About 3 hours ago</Text2Line2>

                <Img2>
                    <Image
                        source={require("../../components/Imagens/Notification/Ellipse2.png")}
                    />
                </Img2>
                <BallNotif2>
                    <Entypo name='dots-three-vertical' size={15} color={'#ADA4A5'}/>
                </BallNotif2>
                <Line2></Line2>



                <TextLine3>Hey, let’s add some meals for your b..</TextLine3>
                <Text2Line3>About 3 hours ago</Text2Line3>

                <Img3>
                    <Image
                        source={require("../../components/Imagens/Notification/Ellipse3.png")}
                        />
                </Img3>
                <BallNotif3>
                    <Entypo name='dots-three-vertical' size={15} color={'#ADA4A5'}/>
                </BallNotif3>
                <Line3></Line3>

                <TextLine4>Congratulations, You have finished A..</TextLine4>
                <Text2Line4>29 May</Text2Line4>

                <Img4>
                <Image
                        source={require("../../components/Imagens/Notification/Ellipse4.png")}
                        />
                </Img4>
                <BallNotif4>
                    <Entypo name='dots-three-vertical' size={15} color={'#ADA4A5'}/>
                </BallNotif4>
                <Line4></Line4>

                <TextLine5>Hey, it’s time for lunch</TextLine5>
                <Text2Line5>8 April</Text2Line5>

                <Img5>
                <Image
                        source={require("../../components/Imagens/Notification/Ellipse5.png")}
                        />
                </Img5>
                <BallNotif5>
                    <Entypo name='dots-three-vertical' size={15} color={'#ADA4A5'}/>
                </BallNotif5>
                <Line5></Line5>

                <TextLine6>Ups, You have missed your Lowerbo...</TextLine6>
                <Text2Line6>3 April</Text2Line6>

                <Img6>
                <Image
                        source={require("../../components/Imagens/Notification/Ellipse6.png")}
                        />
                </Img6>
                <BallNotif6>
                    <Entypo name='dots-three-vertical' size={15} color={'#ADA4A5'}/>
                </BallNotif6>
                </Container>

     )
 }