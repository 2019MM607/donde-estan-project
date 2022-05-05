import { useFormik } from 'formik';
import { Button, Center, FormControl, HStack, Icon, Input, SearchIcon, Stack, Text } from 'native-base';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useQuery } from 'react-query';
import { getOne } from '../services/api_services';

export const DesaparecidoByName = () => {
    const [desaparecido, setDesaparecido] = useState(null);

    const formik = useFormik({
        initialValues: {
            nombre: '',

        },
    })

    const filter = () =>{
        const data = getOne(formik.values.nombre)
        console.log(data)
        setDesaparecido(data)
    }
    return (
        <View>

            <Center>
                <Text m={8}>Encuentra un desaparecido por su nombre</Text>
            </Center>

            <View>
                <FormControl my='4'>
                    <HStack  justifyContent='center'>
                        
                        <Input type='text'
                            placeholder='Nombre'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('nombre', text)}
                            value={formik.values.nombre}
                            name='nombre'
                            id='nombre'
                            w={300} />
                        <Button bgColor='#0B1F3B' onPress={filter}><SearchIcon size='sm' color ='white'/></Button>
                    </HStack>
                </FormControl>
            </View>

            <TargetaDesaparecido desaparecido={desaparecido}  />
        </View>
    );
}

const styles = StyleSheet.create({})

