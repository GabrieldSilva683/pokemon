import React, { createContext, useContext, useState } from 'react'

const FavoritosContext = createContext<any>(null)

export function FavoritosProvider({ children }: any) {
  const [favoritos, setFavoritos] = useState<any[]>([])
  const [escuro, setEscuro] = useState(false)

  function adicionar(pokemon: any) {
    if (!favoritos.some((p) => p.id === pokemon.id)) {
      setFavoritos([...favoritos, pokemon])
    }
  }

  function remover(id: number) {
    setFavoritos(favoritos.filter((p) => p.id !== id))
  }

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionar, remover, escuro, setEscuro }}>
      {children}
    </FavoritosContext.Provider>
  )
}

export function useFavoritos() {
  return useContext(FavoritosContext)
}