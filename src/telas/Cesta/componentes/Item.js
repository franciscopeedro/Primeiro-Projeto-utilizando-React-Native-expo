import React from 'react';
import {Image, StyleSheet, View, Dimensions, FlatList} from 'react-native';

import Texto from '../../../componentes/Texto';

const width = Dimensions.get("screen").width;

export default function item({ item:{nome, imagem}  }){
    return <View style={estilos.item}>   
    <Image style={estilos.imagem} source={ imagem }/>
    <Texto style={estilos.nome}>{ nome } </Texto>
    </View>
}

const estilos = StyleSheet.create({
    item:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical:16,
        alignItems:"center",
        marginHorizontal:16,
    },
    imagem:{
        width:46,
        height:46,
    },
    nome:{
        fontSize:16,
        lineHeight:26,
        marginLeft:11,
        color: "#464646",
    }
})