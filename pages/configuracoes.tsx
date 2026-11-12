import { Text, View, Switch } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import { useFavoritos } from '../services/favoritos'

const configuracoes = () => {
  const { escuro, setEscuro } = useFavoritos()
  const { colors } = useTheme()

  return (
    <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ color: colors.text, fontSize: 18 }}>Tema escuro</Text>
      <Switch value={escuro} onValueChange={setEscuro} />
    </View>
  )
}

export default configuracoes