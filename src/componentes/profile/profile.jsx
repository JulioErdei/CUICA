// Profile.js
import React, { useState, useEffect } from 'react';
import { useUser } from '../../axios/userContext'; // Acessa o estado do usuário
import api from '../../axios/config'; // Acesso à API para atualizar os dados
import { useNavigate } from 'react-router-dom'; // Para navegação
import Header from '../header/header';

const Profile = () => {
  const { user, setUser } = useUser(); // Obtém o usuário do contexto
  const navigate = useNavigate(); // Função de navegação
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthDate: '',
    password: '',
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Carregar os dados do usuário na primeira renderização
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.username || '',
        email: user.email || '',
        birthDate: user.birthDate || '',
        password: '',
        image: user.image || null,
      });
    } else {
      navigate('/login'); // Se não houver usuário, redireciona para o login
    }
  }, [user, navigate]);

  // Função para tratar a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Função para enviar os dados atualizados
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Preparar o form data para envio (incluindo a imagem)
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('birthDate', formData.birthDate);
      if (formData.password) data.append('password', formData.password);
      if (formData.image) data.append('image', formData.image);

      // Enviar os dados para a API
      const response = await api.put(`/user/${user.id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Atualizar o estado do usuário
      setUser(response.data);
      setLoading(false);
      alert('Perfil atualizado com sucesso!');
    } catch (err) {
      setLoading(false);
      setError('Erro ao atualizar o perfil');
      console.error(err);
    }
  };

  return (
    <div className="profile-container">
    <Header />
      <h2>Editar Perfil</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}

        <div>
          <label>Imagem</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
          {formData.image && <img src={URL.createObjectURL(formData.image)} alt="Imagem" width="100" />}
        </div>

        <div>
          <label>Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Data de Nascimento</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Nova Senha</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Atualizando...' : 'Atualizar Perfil'}
        </button>
      </form>
    </div>
  );
};

export default Profile;
