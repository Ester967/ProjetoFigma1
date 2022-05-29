import * as React from 'react';
import {Image,ScrollView,TouchableOpacity} from 'react-native';
import {Container,
        HeaderButtonLeft,
        HeaderButtonRight,
        Title,
        Container1,
        Text1,
        Text2,
        Container2,
        Text3,
        Container3,
        Text4,
        Container4,
        Text5,
        Container5,
        Text6,
        Text7,
        Text8,
        Text9,
        Text10
    } 
from './style';
import { Entypo,Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'


function Camera ({route}) {
    const item = route.params;
    const navigation = useNavigation();
    function navegaComparison(){ 
        navigation.navigate('Comparison')
    }
    return(
        <ScrollView style={{background: '#FFFFFF'}}>
            <Container>
                <HeaderButtonLeft>
                    <Ionicons name="chevron-back" size={20} color={"black"} onPress={navigation.goBack} />
                </HeaderButtonLeft>
                <HeaderButtonRight>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Comparison')}>
                        <Entypo name="dots-two-horizontal" size={20} color="#1D1617" />
                    </TouchableOpacity>
                </HeaderButtonRight>
                <Title>Progress Photo</Title>
                <Container1></Container1>
                <Text1>Reminder!</Text1>
                <Text2>Next Photos Fall On July 08</Text2>
                <Image source={require('../../components/Imagens/Camera/Vector18.png')}
                    style={{position: 'absolute',
                        width: 60,
                        height: 60,
                        left: 45,
                        top: 117
                    }}
                />
                <Image source={require('../../components/Imagens/Camera/x-icon.png')}
                    style={{position: 'absolute',
                        width: 16,
                        height: 16,
                        left: 314,
                        top: 117
                    }}
                />
                <Container2></Container2>
                <Text3>Track Your Progress Each Month With Photo</Text3>
                <Container3></Container3>
                <Text4>Learn More</Text4>
                <Image source={require('../../components/Imagens/Camera/Frame1.png')}
                    style={{position: 'absolute',
                        width: 116,
                        height: 76,
                        left: 210,
                        top: 242
                    }}
                />
                <Container4></Container4>
                <Text5>Compare my Photo</Text5>
                <Container5></Container5>
                <Text6>Compare</Text6>
                <Text7>Gallery</Text7>
                <TouchableOpacity onPress={navegaComparison}>
                <Text8>See more</Text8>
                </TouchableOpacity>
                <Text9>2 June</Text9>
                <Image source={require('../../components/Imagens/Camera/Rectangle5834.png')}
                    style={{position: 'absolute',
                        width: 100,
                        height: 100,
                        left: 30,
                        top: 533
                    }}
                />
                <Image source={require('../../components/Imagens/Camera/Rectangle5836.png')}
                    style={{position: 'absolute',
                        width: 100,
                        height: 100,
                        left: 140,
                        top: 533
                    }}
                />
                <Image source={require('../../components/Imagens/Camera/Rectangle5835.png')}
                    style={{position: 'absolute',
                        width: 100,
                        height: 100,
                        left: 250,
                        top: 533
                    }}
                />
                <Image source={require('../../components/Imagens/Camera/Rectangle5837.png')}
                    style={{position: 'absolute',
                        width: 10,
                        height: 100,
                        left: 360,
                        top: 533,
                        borderRadius: 14
                    }}
                />
                <Text10>5 May</Text10>
                <Image source={require('../../components/Imagens/Camera/Rectangle5838.png')}
                    style={{position: 'absolute',
                        width: 100,
                        height: 100,
                        left: 30,
                        top: 676
                    }}
                />
                <Image source={require('../../components/Imagens/Camera/Rectangle5841.png')}
                    style={{position: 'absolute',
                        width: 100,
                        height: 100,
                        left: 140,
                        top: 676
                    }}
                />
                <Image source={require('../../components/Imagens/Camera/Rectangle5839.png')}
                    style={{position: 'absolute',
                        width: 100,
                        height: 100,
                        left: 250,
                        top: 676
                    }}
                />
                <Image source={require('../../components/Imagens/Camera/Rectangle5840.png')}
                    style={{position: 'absolute',
                        width: 15,
                        height: 100,
                        left: 360,
                        top: 676,
                        borderRadius: 14
                    }}
                />
                <Image source={require('../../components/Imagens/Camera/Navbar-Bg.png')}
                    style={{position: 'absolute',
                        width: 375,
                        height: 80,
                        top: 816
                    }}
                />
                <Image source={require('../../components/Imagens/Camera/Navbar-Search.png')}
                    style={{position: 'absolute',
                        width: 90,
                        height: 90,
                        left: 150,
                        top: 806,
                        right: 157
                    }}
                />
                <Image source={require('../../components/Imagens/Camera/Camera-Active.png')}
                    style={{position: 'absolute',
                        width: 24,
                        height: 31,
                        left: 259,
                        top: 844
                    }}
                />
                <Image source={require('../../components/Imagens/Camera/Home.png')}
                    style={{position: 'absolute',
                        width: 24,
                        height: 24,
                        left: 30,
                        top: 844
                    }}
                />
                <Image source={require('../../components/Imagens/Camera/Activity.png')}
                    style={{position: 'absolute',
                        width: 24,
                        height: 24,
                        left: 93,
                        top: 844
                    }}
                />
                <Image source={require('../../components/Imagens/Camera/Profile.png')}
                    style={{position: 'absolute',
                        width: 24,
                        height: 24,
                        left: 321,
                        top: 844
                    }}
                />
                <Image source={require('../../components/Imagens/Camera/Button.png')}
                    style={{position: 'absolute',
                        width: 100,
                        height: 100,
                        left: 285,
                        top: 726
                    }}
                />
            </Container>
        </ScrollView>
    );
}
export default Camera;