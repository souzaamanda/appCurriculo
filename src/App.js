import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

import foto from './assets/foto.png';

const App = () => {
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />

          <Text style={style.nome}> AMANDA DE SOUZA</Text>
          <Text style={StyleSheet.funcao}> Desenvolvedora Mobile</Text>

          <View>
            <Text>Github</Text>
            <Text>Linkedin</Text>
            <Text>Telegram</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#e7e7e7',
    flex: 1,
  },
  container_cabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default App;
