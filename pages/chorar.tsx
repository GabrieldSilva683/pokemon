import { Text, View, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '@react-navigation/native'
import { buscarPokemon } from '../services/pokemon'

const detalhes = ({ route, navigation }: any) => {
  const [pokemon, setPokemon] = useState<any>(null)
  const { colors } = useTheme()

  useEffect(() => {
    buscarPokemon(route.params.id).then((dados) => setPokemon(dados))
  }, [])

  if (!pokemon) {
    return <Text style={{ color: colors.text }}>Carregando...</Text>
  }

  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Image source={{ uri: pokemon.sprites.front_default }} style={{ width: 200, height: 200 }} />
      <Text style={{ color: colors.text, fontSize: 24 }}>{pokemon.name}</Text>
      <Text style={{ color: colors.text }}>Tipo: {pokemon.types[0].type.name}</Text>
      <Text style={{ color: colors.text }}>Altura: {pokemon.height}</Text>
      <Text style={{ color: colors.text }}>Peso: {pokemon.weight}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default detalhes