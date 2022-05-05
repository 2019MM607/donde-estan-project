
import { useNavigation } from '@react-navigation/native';
import { ArrowForwardIcon, Box, Center, Heading, Image, Pressable, Text, VStack, Fab, Icon } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import img from '../assets/logo.png';
;


export const TarjetaDesaparecido = ({desaparecido}) => {
    
    const navigation = useNavigation()

    const styles = StyleSheet.create({
        root: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.00,

            elevation: 3,
        },
        seeMore: {
            marginRight: 5

        },

        text: {
            fontSize: 17,
            textAlign: 'center',
        }


    })


    return (
        <Box w='sm'
            h='auto'
            mx='5'
            my='5'
            bg='white'
            borderRadius='xl'
           
            style={styles.root}>

            <Center mt='2'>
                <Heading size="sm">{desaparecido?.nombre}</Heading>
            </Center>

            <Center h='1/2'>

                <Image alt='desaparecido'
                    source={img}
                    width='2/6'
                    resizeMode='contain'
                    borderRadius='full' />
            </Center>

            <VStack space={3} mx='2' alignItems='center' justifyContent='center'>
                <Text  style={styles.text} ><Heading size="sm" >Descripción:</Heading> {desaparecido?.descripcion}</Text>
                <Text style={styles.text} ><Heading size="sm" >Residencia:</Heading>  {desaparecido?.residencia}</Text>
                <Text style={styles.text} ><Heading size="sm" >Fecha de desaparición:</Heading>  {desaparecido?.fechaDesaparicion}</Text>
                <Text style={styles.text} ><Heading size="sm" >Edad:</Heading>  {desaparecido?.edad}</Text>
                <Text style={styles.text} ><Heading size="sm" >Sexo:</Heading>  {desaparecido?.sexo}</Text>
            </VStack>

        </Box >
    );

}
