import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Conta from './componentes/conta/Conta.jsx';
import Home from './componentes/home/Home.jsx';
import HomeLog from './componentes/homeLog/HomeLog.jsx';
import Login from './componentes/login/Login2.jsx';
import Novasenha from './componentes/Novasenha/novasenha.jsx';
import LojaMoeda from './componentes/loja/moedas/LojaMoeda.jsx';
import Tutorial from './componentes/regras/regras.jsx';
import Tabuleiro from './componentes/tabuleiro/Tabuleiro.jsx';
import GlobalProvider from './providers/GlobalProvider.jsx';
import Cadastro from './componentes/Cadastro/Cadastro.jsx';
import useAuthConta from '/src/hooks/AuthConta';
import Credito from './componentes/credito/credito.jsx';
import Logout from './componentes/logout/Logout.jsx';
import Loading from './componentes/Loading/Loading.jsx';
import { UserProvider, useUser } from './axios/userContext.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';

const App = () => {
  
  const username = localStorage.getItem('username');
  var logged = false;
  try {
  if(!username){
   logged = true; 
  }}catch{
    logged=false;
  }


  return (
    <>
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
        <GlobalProvider>
          <Routes>
              <Route path='/' element={ logged ? <Navigate to={'/menu'} /> : <Navigate to={'/menuLogado'} /> } />

              <Route path='/menu' element={<Home />} />
              <Route path='/Loading' element={<Loading />} />
              <Route path='/Logout' element={<Logout />} />
              <Route path='/menuLogado' element={<HomeLog />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cadastro' element={<Cadastro />} />
              <Route path='/novasenha' element={<Novasenha/>} />
              <Route path='/loja/moedas' element={<LojaMoeda />} />
              <Route path='/conta' element={<Conta />} />
              <Route path='/tabuleiro' element={<Tabuleiro />} />
              <Route path='/tutorial' element={<Tutorial />} />
              <Route path='/credito' element={<Credito />} />
            </Routes>
          </GlobalProvider>
        </BrowserRouter>
      </UserProvider>
      </AuthProvider>
    </>
  )
}

export default App
