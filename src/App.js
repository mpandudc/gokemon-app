//libraries
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Route, Routes } from 'react-router-dom';

//components
import { Navbar } from './components/Navbar';

//pages
import Pokedex from './pages/Pokedex';
import MyPokemon from './pages/MyPokemon';
import Detail from './pages/DetailPokemon';
import NotFound from './pages/NotFound';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.graphcdn.app',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/gokemon-app" end element={<Pokedex />} />
        <Route path="/gokemon-app/detail/:name" element={<Detail />} />
        <Route path="/gokemon-app/mypokemon" element={<MyPokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Navbar />
    </ApolloProvider>
  );
}

export default App;
