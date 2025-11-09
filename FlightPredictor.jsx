import React, { useState } from 'react';
import axios from 'axios';

const FlightPredictor = () => {
  const [formData, setFormData] = useState({
    empresa: '',
    origem: '',
    destino: '',
    mes: '',
    ano: '',
    tarifa: ''
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post('http://localhost:5000/predict', formData);
      
      if (response.data.success) {
        setPrediction(response.data.predicted_seats);
      } else {
        setError('Erro ao fazer a predição');
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Preditor de Melhor Momento para Compra</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Empresa:</label>
          <input
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Origem:</label>
          <input
            type="text"
            name="origem"
            value={formData.origem}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Destino:</label>
          <input
            type="text"
            name="destino"
            value={formData.destino}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mês:</label>
          <input
            type="number"
            name="mes"
            min="1"
            max="12"
            value={formData.mes}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Ano:</label>
          <input
            type="number"
            name="ano"
            value={formData.ano}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Tarifa:</label>
          <input
            type="number"
            name="tarifa"
            step="0.01"
            value={formData.tarifa}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Calculando...' : 'Prever'}
        </button>
      </form>

      {error && <div className="error">{error}</div>}
      
      {prediction !== null && (
        <div className="prediction">
          <h2>Resultado da Predição</h2>
          <p>Número previsto de assentos disponíveis: {prediction}</p>
          <p>
            {prediction > 50 
              ? 'Momento favorável para compra! Há muitos assentos disponíveis.'
              : 'Recomendamos comprar logo! Poucos assentos disponíveis.'}
          </p>
        </div>
      )}

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .form-group {
          margin-bottom: 15px;
        }
        
        label {
          display: block;
          margin-bottom: 5px;
        }
        
        input {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
        }
        
        button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        button:disabled {
          background-color: #ccc;
        }
        
        .error {
          color: red;
          margin-top: 10px;
        }
        
        .prediction {
          margin-top: 20px;
          padding: 15px;
          background-color: #f8f9fa;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default FlightPredictor;