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

        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text>Experiência Profissional</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_container_text}>
                Experiência Profissional
              </Text>
              <Text style={style.card_container_text}>
                Experiência Profissional
              </Text>
              <Text style={style.card_container_text}>
                Experiência Profissional
              </Text>
            </View>
          </View>
        </View>

        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text>Formação Acadêmica</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_container_text}>
                Experiência Profissional
              </Text>
              <Text style={style.card_container_text}>
                Experiência Profissional
              </Text>
              <Text style={style.card_container_text}>
                Experiência Profissional
              </Text>
            </View>
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
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#FFF',
  },
  card_content: {
    marginTop: 20,
  },
  card_container_text: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default App;
