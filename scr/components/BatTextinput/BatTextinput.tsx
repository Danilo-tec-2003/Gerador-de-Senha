import React from 'react';
import {TextInput } from 'react-native';

import { styles } from './BatTextinputStyles';

interface BatTextinputProps{
  senha:string
}




export function BatTextinput(Props : BatTextinputProps) {
  return (
   
     <TextInput
     style={styles.inputer}
     placeholder='Senha'
     value={Props.senha}
     >
     </TextInput>
    
  );
}