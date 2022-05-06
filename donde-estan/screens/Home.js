
import React, { useEffect, useState } from 'react';
import { AddIcon, Box, Button, Center, Fab, Flex, Heading, HStack, Icon, ScrollView, Skeleton, Spinner, Text, View, VStack } from 'native-base';
import { TarjetaDesaparecido } from '../components/TarjetaDesaparecido';

import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from 'react-query';
import { getAll } from '../services/api_services';

export default function Home() {

    const navigation = useNavigation()
    const [desaparecidos, setDesaparecidos] = useState(null)
    //const {data : desaparecidos, isError, isLoading, refetch} = useQuery('desaparecidos', getAll)

    const loadData = async () => {
        const data = await getAll();
        setDesaparecidos(data)
    }

    useEffect(() => {
       loadData()
       
    }, [desaparecidos]);
    return (
        <View w='full' h='full' bg='#0B1F3B'>
            <StatusBar backgroundColor="#0B1F3B" />
            <Box h='1/6'
                justifyContent='flex-start'
                alignItems='flex-start'>

                <Text ml='2' color='gray.400' fontSize='sm' letterSpacing='lg'>Listado de desaparecidos</Text>
            </Box>


         
                   
            {
                desaparecidos?.ok ?
                        <ScrollView horizontal={true}
                            w="full"
                            h='full'
                            bg='white'
                            borderTopLeftRadius='3xl'
                            borderTopRightRadius='3xl'
                            zIndex='1'
                            position='absolute'
                            top='70' >
     
     
     
                            <Flex justifyContent='center' direction='row' >
                                {
                                    desaparecidos?.ok && desaparecidos?.desaparecidos.map((desaparecido, index) =>
                                    (
                                        <TarjetaDesaparecido desaparecido={desaparecido} key={index} />
                                    )
                                    )
                                }
                            </Flex>
     
     
                        </ScrollView>

                        :

                    <HStack space={2} justifyContent="center">
                        <Spinner accessibilityLabel="Loading posts" />
                        <Heading color="#0B1F3B" fontSize="md">
                            Loading
                        </Heading>
                    </HStack> 
                }
                   

            



        </View >
    );
}
