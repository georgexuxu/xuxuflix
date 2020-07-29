import React from 'react';
import Menu from './components/Menu/'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import footer from './components/Footer';
import { FooterBase } from './components/Footer/styles';

function App() {
  return (
    <div style = {{background:'#141414'}}>
      <Menu/>

      <BannerMain
      videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription= {'O que é Front-end? Trabalhando na Área'}
      />

      <Carousel
      ignoreFirstVideo
      category = {dadosIniciais.categorias[0]}
      />

      <Carousel
      
      category = {dadosIniciais.categorias[1]}
      />
      <Carousel
      
      category = {dadosIniciais.categorias[2]}
      />
      <Carousel
      
      category = {dadosIniciais.categorias[3]}
      />
      <Carousel
      
      category = {dadosIniciais.categorias[4]}
      />
      <Carousel
      
      category = {dadosIniciais.categorias[5]}
      />

      <FooterBase/>

    </div>
  );
}

export default App;
