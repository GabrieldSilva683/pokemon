import { StyleSheet, Text, Image, TouchableOpacity, ScrollView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { buscarPokemon } from '../services/pokemon'
import { useFavoritos } from '../services/favoritos'

const home = ({ navigation }: any) => {
  const [pokemons, setPokemons] = useState<any[]>([])
  const { adicionar } = useFavoritos()

  useEffect(() => {
    async function carregar() {
      const p1 = await buscarPokemon(1)
      const p2 = await buscarPokemon(4)
      const p3 = await buscarPokemon(7)
      setPokemons([p1, p2, p3])
    }
    carregar()
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {pokemons.map((pokemon) => (
        <TouchableOpacity
          key={pokemon.id}
          style={styles.pokemon}
          onPress={() => {
            adicionar(pokemon)
            navigation.navigate('favorito')
          }}
        >
          <Image source={{ uri: pokemon.sprites.front_default }} style={styles.imagem} />
          <Text style={styles.nome}>{pokemon.name}</Text>
          <Button
            title="Detalhes"
            onPress={() => navigation.navigate('Detalhes', { id: pokemon.id })}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default home

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20
  },
  pokemon: {
    alignItems: "center",
    width: 250,
    backgroundColor: "red",
    marginBottom: 20,
    paddingBottom: 10
  },

  imagem: {
    marginTop: 20,
    width: 150,
    height: 150
  },
  nome: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
})