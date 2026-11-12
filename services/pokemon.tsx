export async function buscarPokemon(id: number) {
  const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return await resposta.json();
}