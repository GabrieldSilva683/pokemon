import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import { useFavoritos } from '../services/favoritos'

const favorito = () => {
  const { favoritos, remover } = useFavoritos()
  const { colors } = useTheme()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {favoritos.length === 0 && <Text style={{ color: colors.text }}>Nenhum favorito ainda.</Text>}

      {favoritos.map((pokemon: any) => (
        <View key={pokemon.id} style={styles.pokemon}>
          <Image source={{ uri: pokemon.sprites.front_default }} style={styles.imagem} />
          <Text style={styles.nome}>{pokemon.name}</Text>
          <Button title="Remover" onPress={() => remover(pokemon.id)} />
        </View>
      ))}
    </ScrollView>
  )
}

export default favorito

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 20 },
  pokemon: { alignItems: "center", width: 250, backgroundColor: "red", marginBottom: 20, paddingBottom: 10 },
  imagem: { marginTop: 20, width: 150, height: 150 },
  nome: { color: "white", fontSize: 20, fontWeight: "bold" }
})