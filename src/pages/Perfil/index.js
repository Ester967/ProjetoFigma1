import React from 'react';
import {Feather, FontAwesome, SimpleLineIcons, Foundation, Ionicons, MaterialIcons} from '@expo/vector-icons';
import { ScrollView, Image } from 'react-native';
import {AgeContainer, AgeText, ButtonEdit, CmText, Container,
        ContainerAccount,
        ContainerNotification,
        ContainerOther,
        GraphicPop,
        GraphicPopCircle,
        HeaderArea,
        HeaderContainer1,
        HeaderContainer2,
        HeaderIcon1,
        HeaderIcon2,
        HeaderIcon3,
        HeaderTitle,
        HeightContainer,
        HeightText,
        Img,
        ImgChart,
        ImgDocument,
        ImgGraphic,
        ImgMessage,
        ImgNotification,
        ImgProfile,
        ImgSetting,
        ImgShieldDone,
        KgText,
        TextAccount,
        TextAchievement,
        TextActivy,
        TextButtonEdit,
        TextContact,
        TextHead1,
        TextHead2,
        TextNotification,
        TextOther,
        TextPersonal,
        TextPop,
        TextPrivacy,
        TextSettings,
        TextWorkout,
        WeightContainer,
        WeightText,
        YoText,
        ImgArrow,
        ImgArrow2,
        ImgArrow3,
        ImgArrow4,
        ImgArrow5,
        ImgArrow6,
        ImgArrow7,


} from './style'


export default () => {
    return(
        <Container>
         <ScrollView>
                <HeaderArea>
                <HeaderTitle>Profile</HeaderTitle>
                <Img>
                    <Image
                        source={require("../../components/Imagens/Perfil/Vector.png")}
                    />
                </Img>
                <HeaderContainer1>
                    <HeaderIcon1>
                        <SimpleLineIcons name='arrow-left'/>
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

                    <TextHead1>Stefani Wong</TextHead1>
                    <TextHead2>Lose a Fat Program</TextHead2>

                    <ButtonEdit>
                        <TextButtonEdit>Edit</TextButtonEdit>
                    </ButtonEdit>
                    

                 
                    <HeightContainer>
                        <CmText>180cm</CmText>
                        <HeightText>Height</HeightText>
                    </HeightContainer>

                    <WeightContainer>
                        <KgText>65kg</KgText>
                        <WeightText>Weight</WeightText>
                    </WeightContainer>

                    <AgeContainer>
                        <YoText>22yo</YoText>
                        <AgeText>Age</AgeText>
                    </AgeContainer>
                  

                    <ContainerAccount>

                    <TextPersonal>Personal Data</TextPersonal>
                    <ImgProfile>
                        <FontAwesome name='user-o' color={'#92A3FD'} size={15}/>
                    </ImgProfile>

                    <ImgArrow>
                        <SimpleLineIcons name='arrow-right' color={'#7B6F72'}/>
                    
                    </ImgArrow>


                      <TextAchievement>Achievement</TextAchievement>
                      <ImgDocument>
                      <Feather name='file-text' color={'#92A3FD'} size={17}/>
                      </ImgDocument>

                      <ImgArrow2>
                        <SimpleLineIcons name='arrow-right' color={'#7B6F72'}/>   
                      </ImgArrow2>


                        <TextActivy>Activity History</TextActivy>
                        <ImgGraphic>
                           <Foundation name='graph-pie' color={'#92A3FD'} size={20}/>
                        </ImgGraphic>

                        <ImgArrow3>
                            <SimpleLineIcons name='arrow-right' color={'#7B6F72'}/>
                        </ImgArrow3>

                        <TextWorkout>Workout Progress</TextWorkout>
                        <ImgChart>
                            <Foundation name='graph-trend' color={'#92A3FD'} size={20}/>
                        </ImgChart>

                        <ImgArrow4>
                            <SimpleLineIcons name='arrow-right' color={'#7B6F72'}/>
                        </ImgArrow4>

                        <TextAccount>Account</TextAccount>
                    </ContainerAccount>

                    <ContainerNotification>
                        <ImgNotification>
                            <Feather name='bell'size={17} color={'#92A3FD'}/>
                        </ImgNotification>
                        <TextNotification>Notification</TextNotification>
                        <TextPop>Pop-up Notification</TextPop>

                        <GraphicPop></GraphicPop>
                        <GraphicPopCircle></GraphicPopCircle>
                    </ContainerNotification>

                    <ContainerOther>
                        <TextOther>Other</TextOther>
                        <TextContact>Contact Us</TextContact>

                        <ImgMessage>
                            <FontAwesome name='envelope-open-o'size={15} color={'#92A3FD'}/>
                        </ImgMessage>

                        <ImgArrow5>
                            <SimpleLineIcons name='arrow-right' color={'#7B6F72'}/>
                        </ImgArrow5>

                        <TextPrivacy>Privacy Policy</TextPrivacy>
                        <ImgShieldDone>
                            <Ionicons name='shield-checkmark-outline'size={15} color={'#92A3FD'}/>
                        </ImgShieldDone>

                        <ImgArrow6>
                            <SimpleLineIcons name='arrow-right' color={'#7B6F72'}/>
                        </ImgArrow6>

                        <TextSettings>Settings</TextSettings>
                        <ImgSetting>
                            <Feather name='settings' color={'#92A3FD'} size={17}/>
                        </ImgSetting>

                        <ImgArrow7>
                            <SimpleLineIcons name='arrow-right' color={'#7B6F72'}/>
                        </ImgArrow7>
                    </ContainerOther>

                    </ScrollView>

        </Container>

    );
}

        