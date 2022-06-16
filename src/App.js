import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.png';

import Card from './components/Card'

const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert('Meu linkedin', 'link do linkedin');
        break;
      case 'github':
        Alert.alert('Meu github', 'link do github');
        break;
      case 'telegram':
        Alert.alert('Meu telegram', 'link do telegram');
        break;
    }
  }
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />

          <Text style={style.nome}> AMANDA DE SOUZA</Text>
          <Text style={style.funcao}> Desenvolvedora Mobile</Text>

          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('telegram')}>
              <Icon name="telegram" size={30} />
            </TouchableOpacity>
          </View>
        </View>  

        <Card titulo='Formação Acadêmica'>

          <Text style={style.card_container_text}>formação 1</Text>
          <Text style={style.card_container_text}>formação 2</Text>
          <Text style={style.card_container_text}>formação 3</Text>

        </Card>
        <Card titulo='Experiencias Profissionais'>

          <Text style={style.card_container_text}>trabalho 1</Text>
          <Text style={style.card_container_text}>trabalho 2</Text>
          <Text style={style.card_container_text}>trabalho 3</Text>

        </Card>

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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
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
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  card_container_text: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default App;
