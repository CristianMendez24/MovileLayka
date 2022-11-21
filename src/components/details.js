import * as React from 'react';
import { View, Text, Image, StyleSheet, Modal, ScrollView,TouchableOpacity,SafeAreaView } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import {showmodal} from '../../Store/action'


const Details = ({route}) => {
const {element}=route.params;
const show = useSelector(state=>state.statusModal)
const Dispatch = useDispatch();
const StatusIcon = ({status}) =>{
    if(status==="En camino") {
        return(<Image source={require("../../Icons/icons8-enviado-64.png")} style={{tintColor:'blue',alignSelf:'center',width: 30, height: 30, marginTop:10}}/>)
   }else if(status==="Entregado"){
        return(<Image source={require("../../Icons/icons8-marca-doble-100.png")} style={{tintColor:'green',alignSelf:'center',width: 30, height: 30, marginTop:10}}/>)
   }else if(status==="Cancelado"){
    return(<Image source={require("../../Icons/icons8-atención-64.png")} style={{tintColor:'red',alignSelf:'center',width: 30, height: 30, marginTop:10}}/>)
}
}
const modal = (status)=>{
    Dispatch(showmodal(status))
}
    return (
        <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <ScrollView>
                    <View style={styles.containerIcono}>
                        <StatusIcon status={element.estado}/>                                
                        <Text style={{alignSelf:'center'}}>{element.estado}</Text>
                    </View>
                        <View style={{marginTop: 10}}></View>
                        <Text>¿Requieres ayuda o tienes alguna inquietud?</Text>
                        <View style={styles.containercontentrow}>
                            <Text style={{margin: 10, fontWeight: 'bold'}}>Escribenos Al WhatsApp</Text>
                            <Image source={require("../../Icons/icons8-whatsapp-48.png")} style={{alignSelf:'flex-end',width: 30, height: 30, marginTop:10, marginLeft: 90}}/>
                        </View>
                        <View style={styles.containercontentrow}>
                            <Text style={{margin: 10, fontWeight: 'bold'}}>Llámanos</Text>
                            <Image source={require("../../Icons/icons8-teléfono-16.png")} style={{alignSelf:'flex-end',width: 20, height: 20, margin:10, marginLeft: 187}}/>
                        </View>
                        <Text style={{}}>Informacion de Entrega</Text>
                        <View style={styles.containercontent}>
                            <Text style={{margin: 10, fontWeight: "bold"}}>Direccion:</Text>
                            <Text style={{margin: 10}}>{element.direccion}</Text>
                            <Text style={{margin: 10, fontWeight: "bold"}}>Telefono:</Text>
                            <Text style={{margin: 10}}>{element.telefono}</Text>
                            <View style={{flexDirection: "row"}}>
                                
                    
                            </View>
                            <Text style={{margin: 10, fontWeight: "bold"}}>Entrega: aqui llego</Text>
                            <Text style={{margin: 10}}>Valor domicilio: {element.domicilio}</Text>
                            <View style={{flexDirection: "row"}}>
                        
                            </View>
                            <TouchableOpacity style={styles.button} onPress={()=>modal(true)}>
                                <Text style={{fontWeight:'bold'}}>Productos</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{}}>Resumen</Text>
                        <View style={styles.containercontent}>
                            <Text style={{margin: 5, fontWeight: "bold"}}>Total:</Text>
                            <Text style={{margin: 5}}>{element.valor}</Text>
                            <Text style={{margin: 5}}>Subtotal:</Text>
                            <Text style={{margin: 5}}>{element.subtotal}</Text>
                            <Text style={{margin: 5}}>Descuento:</Text>
                            <Text style={{margin: 5}}>{element.descuento}</Text>
                        </View>
                    </ScrollView>
                </View>
                <Modal
                animationType="slide"
                transparent={true}
                visible={show}
                >
                   <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <SafeAreaView>
                    <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                        <Image style={{width: 100, height: 100, margin: 5}} source={{uri: 'data:image/webp;base64,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'}}/>
                        <View style={{flexDirection: "column"}}>
                            <Text>Nombre: Reeld´s Galletas Blandas Swesi Bombonera(Brownies)</Text>
                            <Text>Peso: 1.3 kg</Text>
                            <Text>Valor Total: $152.208</Text>
                        </View>
                    </View>
                </SafeAreaView>
                <TouchableOpacity
                style={styles.buttonvolver}
                onPress={()=>modal(false)}
                >
                    <Text>Cerrar</Text>
                </TouchableOpacity>
            </View>
        </View>
                </Modal>
                </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: "center"
    },
    subcontainer:{
        width: "80%",
        height: "80%"
    },  
    submenu:{
        flexDirection: "row",
        marginTop: 10
    }, 
    buttonsub:{
        margin: 7,
    },
    menusinactive:{
        margin: 7,
    },
    menusactive:{
        width: "100%",
        height: 3,
        backgroundColor: "#f199"
    },
    tabs: {
        flexDirection: "row",
        margin: "auto",
        padding: 20,
        backgroundColor: '#c4bbbb',
        borderRadius: 10,
        margin: 10
    },
    button:{
        padding: 5,
        margin: 5,
        backgroundColor: "#F7F7F6",
        borderRadius: 10
    },
    buttonvolver:{
        padding: 5,
        margin: 5,
        borderColor: "#F7F7F6",
        borderWidth: 1,
        borderRadius: 10
    },
    stateencamino:{
        padding: 5,
        backgroundColor: "#243bad",
        borderRadius: 10
    },
    statecancelado:{
        padding: 5,
        backgroundColor: "#bd1919",
        borderRadius: 10
    },
    statedevuelto:{
        padding: 5,
        backgroundColor: "#fce303",
        borderRadius: 10
    },
    stateentregado:{
        padding: 5,
        backgroundColor: "#20fc03",
        borderRadius: 10
    },
    containerstate: {
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", 
        bbackgroundColor: '#F7F7F6',
        borderRadius: 10
    },
    containercontent:{
        justifyContent: "flex-start", 
        alignItems: "flex-start", 
        backgroundColor: '#F7F7F6',
        borderRadius: 10
    },
    containerIcono:{
        justifyContent: "flex-start", 
        alignItems: "flex-start", 
        height: "10%",
        backgroundColor: '#F7F7F6',
        borderRadius: 10
    },
    containercontentrow:{
        flexDirection: "row", 
        justifyContent: "flex-start", 
        alignItems: "center", 
        backgroundColor: '#F7F7F6',
        borderRadius: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 40,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 1
      },
      input: {
        flexDirection: 'row',
        height: "10%",
        width: "70%",
        padding: 4,
        marginBottom: 20, 
        alignItems: 'center' 
      },

})
export default Details