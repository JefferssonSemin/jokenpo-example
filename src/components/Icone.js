import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

const imgPedra=require('../../imgs/pedra.png');
const imgPapel=require('../../imgs/papel.png');
const imgTesoura=require('../../imgs/tesoura.png');


class Icone extends Component {
    render() {
        if (this.props.escolha === 'pedra') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.textJogador}>{this.props.jogador}</Text>
                    <Image source={imgPedra}></Image>
                </View>
            );
        } else if (this.props.escolha == 'papel') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.textJogador}>{this.props.jogador}</Text>
                    <Image source={imgPapel}></Image>
                </View>
            );
        } else if (this.props.escolha == 'tesoura') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.textJogador}>{this.props.jogador}</Text>
                    <Image source={imgPedra}></Image>
                </View>
            );
        } else {
            return false;
        }
    }
}

const styles = StyleSheet.create({
    icone: {
        alignItems: 'center',
        marginBottom: 20,
    },
    textJogador: {
        fontSize: 18
    }
});

export default Icone;
