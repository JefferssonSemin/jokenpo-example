/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import Topo from './src/components/Topo'
import Icone from './src/components/Icone'



class reactApp3 extends Component {

  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' }
  }

  jokenpo(escolhaUsuario) {
    const numeroAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = '';

    switch (numeroAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      default: escolhaComputador = '';
    }

    let resultado = '';

    switch (escolhaComputador) {
      case 'pedra':
        if (escolhaUsuario === "pedra")
          resultado = 'Empate';
        else if (escolhaUsuario === 'papel')
          resultado = 'Você ganhou';
        else
          resultado = 'Você perdeu'
        break; case 'papel':
        if (escolhaUsuario === "papel")
          resultado = 'Empate';
        else if (escolhaUsuario === 'tesoura')
          resultado = 'Você ganhou';
        else
          resultado = 'Você perdeu'

        break; case 'tesoura':
        if (escolhaUsuario === "tesoura")
          resultado = 'Empate';
        else if (escolhaUsuario === 'pedra')
          resultado = 'Você anhou';
        else
          resultado = 'Você perdeu'
        break;

      default: resultado = '';

    }

    this.setState({ escolhaUsuario, escolhaComputador, resultado });
  }


  render() {
    return (
      <View >
        <Topo />
        <View style={styles.painelAcess}>
          <View style={styles.btnEscolha}>
            <Button title='pedra' onPress={() => { this.jokenpo('pedra') }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='papel' onPress={() => { this.jokenpo('papel') }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='tesoura' onPress={() => { this.jokenpo('tesoura') }} />
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResult}>Resultado {this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='Você' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcess: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResult: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});

AppRegistry.registerComponent('reactApp3', () => reactApp3);
