import React from 'react';
import { Container, Graphic, HeaderArea, Imagem, Text1, Text2, Text3, TextGraphic } from "./style"
import {Image, Button} from "react-native"

export default function Congratulations({navigation}) {
    return(
        <Container>
            <HeaderArea>
                <Imagem>
                <Image
                source={require('../../components/Imagens/Congratulations/Frame.png')}
                
                />
                </Imagem>
                <Text1>Congratulations, You Have Finished Your Workout</Text1>
                <Text2>Exercises is king and nutrition is queen. Combine the two and you will have a kingdom</Text2>
                <Text3>-Jack Lalanne</Text3>
                <Graphic>

                <Button
                title=''
                onPress={ () => navigation.navigate('Home') }
                 />
                 <TextGraphic>Back To Home</TextGraphic>
                </Graphic>
            </HeaderArea>
        </Container>

    );
}