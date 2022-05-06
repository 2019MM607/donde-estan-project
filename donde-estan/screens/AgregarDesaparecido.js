
import { useNavigation } from '@react-navigation/native';
import { Formik, useFormik } from 'formik';
import { Button, CheckIcon, FormControl, Input, ScrollView, Select, Stack, TextArea, useToast, View, VStack } from 'native-base';
import React from 'react';
import { Image, Input as Entrada } from 'react-native-elements';

import { useMutation } from 'react-query';
import { postOne } from '../services/api_services';


export default function AgregarDesaparecido() {
    const toast = useToast();
    const mutation = useMutation(postOne,{
        onSuccess: () => {
            toast.show({description: 'Desaparecido agregado', duration: 2000, type: 'success'});
        }
    })

    const navigation = useNavigation()
    const formik = useFormik({
        initialValues: {
            nombre: '',
            residencia: '',
            fechaDesaparicion: '',
            descripcion: '',
            edad: '',
            sexo: '',
        },
    })


    const handlePress = () => {
        console.log(formik.values)
        mutation.mutate(formik.values)
        formik.resetForm()
        navigation.navigate('Desaparecidos')
    }
    return (
        <View>
            <ScrollView mx='5' my='10'>

                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='hairline' >Nombre</FormControl.Label>
                        <Input type='text'
                            isRequired={true}
                            placeholder='Nombre'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('nombre', text)}
                            value={formik.values.nombre}
                            name='nombre'
                            id='nombre'

                        />
                    </Stack>
                </FormControl>


                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='hairline'>Residencia</FormControl.Label>
                        <Input type='text'
                            isRequired={true}
                            placeholder='Residencia'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('residencia', text)}
                            value={formik.values.residencia}
                            name='residencia'
                            id='residencia'

                        />
                    </Stack>
                </FormControl>

                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='hairline'>Fecha de Desaparición</FormControl.Label>
                        <Input type='text'
                            isRequired={true}
                            placeholder='dia/mes/año'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('fechaDesaparicion', text)}
                            value={formik.values.fechaDesaparicion}
                            name='fechaDesaparicion'
                            id='fechaDesaparicion'

                        />
                    </Stack>
                </FormControl>

                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='extrabold' >Descripción</FormControl.Label>
                        <TextArea type='text'
                            isRequired={true}
                            placeholder='Descripción'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('descripcion', text)}
                            value={formik.values.descripcion}
                            name='descripcion'
                            id='descripcion'

                        />
                    </Stack>
                </FormControl>

                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='hairline'>Edad</FormControl.Label>
                        <Input type='number'
                            isRequired={true}
                            placeholder='Edad'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('edad', text)}
                            value={formik.values.edad}
                            name='edad'
                            id='edad'

                        />
                    </Stack>
                </FormControl>

                <FormControl my='4'>
                    <Stack>
                        <Select
                            name='sexo'
                            isRequired={true}
                            id='sexo'
                            accessibilityLabel="Sexo"
                            selectedValue={formik.values.sexo}
                            placeholder="Sexo"
                            _selectedItem={{
                              
                                endIcon: <CheckIcon size="5" />
                            }}
                            mt={1}
                            onValueChange={itemValue => formik.setFieldValue('sexo', itemValue)}>
                            <Select.Item label="Masculino" value="Masculino" />
                            <Select.Item label="Femenino" value="Femenino" />

                        </Select>
                    </Stack>
                </FormControl>

                <FormControl my='4'>
                    <Button bg='#0B1F3B' type='submit' onPress={handlePress} >Enviar</Button>
                </FormControl>


            </ScrollView>
        </View>
    );
}
