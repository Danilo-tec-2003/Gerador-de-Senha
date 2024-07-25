import React, { useState } from 'react';
import { Pressable, Text} from 'react-native';
import { BatTextinput } from '../BatTextinput/BatTextinput';
import geradorSenha from '../../components/services/passwordService'
import { styles } from './BatButtonStyles';
import * as Clipboard from 'expo-clipboard';

export function BatButtom() {
  const [senha, definirSenha] = useState('')

function manipularBotaoGerador () {
  let gerarToken = geradorSenha ()
  definirSenha(gerarToken)
}

function maniuplarBotaoCopiador () {
  Clipboard.setStringAsync(senha)
}                                      //função exportada do expo para captura de texto

  return (
    <>
      <BatTextinput senha = {senha} />
      <Pressable
        onPress={manipularBotaoGerador}
        style={styles.button}
      >
        <Text style={styles.text}>GERAR</Text>
      </Pressable>

      <Pressable
        onPress={maniuplarBotaoCopiador}
        style={styles.button}
      >
        <Text style={styles.text}>📃 COPIAR</Text>
      </Pressable>

    </>
  );
}