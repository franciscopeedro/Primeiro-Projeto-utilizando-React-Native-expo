import React from "react";
import { TouchableOpacity, StyleSheet } from 'react-native';
import Texto from './Texto';

export default function Botao({ texto }) {
    return <>
        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.nomeBotao}>{texto}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    nomeBotao: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 26
    }
})