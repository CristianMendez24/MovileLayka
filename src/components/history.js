import * as React from 'react';
import { View, Text,  StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const Historial = () => {
    const navigation = useNavigation();
    const orders = useSelector(state=>state.orders)
    const [activo, setActivo] = React.useState(true)
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
            <View style={styles.container}>
                <Pressable style={[activo ? styles.button : styles.buttonInactive]} onPress={() => { setActivo(true) }}>
                    <Text style={[activo ? styles.text : styles.textInactive]}>{"Pedidos"}</Text>
                </Pressable>

                <Pressable style={[activo ? styles.buttonInactive : styles.button]} onPress={() => { setActivo(false) }}>
                    <Text style={[activo ? styles.textInactive : styles.text]}>{"Servicios"}</Text>
                </Pressable>
            </View>
            {activo && (
                orders.map((element) => {
                    return (
                        <View style={styles.box}>
                            <View style={styles.boxUno}>
                                <Text style={styles.idTitle}>
                                    ID
                                </Text>

                                <Text style={styles.idText}>
                                    {element.id}
                                </Text>
                                <View style={element.estado==="En camino"?styles.camino:
                                    element.estado==="Entregado"?styles.entregado:
                                    element.estado==="Cancelado"?styles.cancelado:null}>
                                    <Text style={styles.estadoText}>
                                        {element.estado}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.boxDos}>
                                <Text style={styles.title}>
                                    Fecha:</Text><Text style={styles.dato}>{element.fecha}</Text>

                            </View>
                            <View style={styles.boxTres}>
                                <Text style={styles.title}>
                                    Total:</Text><Text style={styles.dato}>{element.total}</Text>
                                
                                <Pressable style={styles.calificar}>
                                <Text style={styles.title}>
                                    Calificar 
                                </Text>
                                </Pressable>     
                            </View>
                            <View style={styles.boxCuatro}>
                                <Pressable style={styles.buttonResumen} onPress={() => navigation.navigate('Details',
                                   {element}
                             )}>
                                    <Text style={styles.letraResumen}>Ver resumen</Text>
                                </Pressable>
                                <Pressable style={styles.buttonPedir}>
                                    <Text style={styles.letraPedir}>Volver a pedir</Text>
                                </Pressable>
                            </View>
                        </View>
                    )
                })

            )}
        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        elevation: 0,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'purple'
    },
    buttonInactive: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        elevation: 0,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    buttonResumen: {
        alignItems: 'center',
        backgroundColor: 'purple',
        borderRadius: 5,
    },
    buttonPedir: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        marginLeft: 20,
        borderColor: 'grey'
    },
    calificar: {
        alignItems: 'center',
        backgroundColor: '#F7F7F6',
        borderRadius: 5,
        marginLeft: 180
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        fontWeight: 'bold',
        color: 'purple',
    },
    textInactive: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'purple',
    },
    box: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#F7F7F6',
        marginHorizontal: 20,
        borderRadius: 8,
        paddingBottom: 40,
        marginBottom: 30
    },
    boxUno: {
       paddingBottom:4,
        flexDirection: 'row',
        margin: 1,
    },
    boxDos: {
        marginTop: 10,
        flexDirection: 'row',
        margin: 1,
    },
    boxTres: {
      
        flexDirection: 'row',
        margin: 1,
    },
    boxCuatro: {
        marginTop: 15,
        flexDirection: 'row',
        margin: 1,
    },
    estadoText: {
        fontSize: 10,
        color: 'white',
        justifyContent: 'flex-start',
        padding: 2,
    },
    idText: {
        fontWeight: 'bold',
        paddingHorizontal: 2,
        paddingRight: 210
    },
    idTitle: {
        fontWeight: 'bold',
        margingHorizontal: 1,
    },
    title: {
        fontWeight: 'bold',
        paddingHorizontal: 2,
        fontSize: 12,
        color: 'purple'
    },
    dato: {
        paddingHorizontal: 2,
        fontSize: 12,
        color: 'purple'
    },
    camino: {
        backgroundColor: '#7FBCFC',
        paddingLeft: 10,
        alignItems: 'flex-end',
        borderRadius: 3,
    },
    entregado: {
        backgroundColor: '#88EF41',
        paddingLeft: 10,
        alignItems: 'flex-end',
        borderRadius: 3,
    },
    cancelado: {
        backgroundColor: '#F5806D',
        paddingLeft: 10,
        alignItems: 'flex-end',
        borderRadius: 3,
    },
    letraResumen: {
        fontSize: 12,
        color: 'white',
        justifyContent: 'flex-start',
        padding: 5,
        fontWeight: 'bold',
        paddingHorizontal: 35
    },
    letraPedir: {
        fontSize: 12,
        color: 'purple',
        justifyContent: 'flex-start',
        padding: 5,
        fontWeight: 'bold',
        paddingHorizontal: 35
    },
})

export default Historial