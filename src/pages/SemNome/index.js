import React from 'react';
import { ScrollView, Image, TouchableOpacity, Button} from 'react-native';
import { Container,  Scroller, HeaderContainer, ContainerTitle, ContainerText,  MoreButton, ButtonText, Circle, Bolha, Bolha2, Bolha3, Bolha4, Bolha5, Bolha6, ContainerMore} from './style'
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import PizzaHome from '../../components/Graphics/PizzaHome';


export default function SemNome(){
    return(
        <Scroller>
            <Container>
  <HeaderContainer>
      <Circle>
      <PizzaHome/>
      </Circle>
  </HeaderContainer>
 
            </Container>
        </Scroller>
    

       
    );
}