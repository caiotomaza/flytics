from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import os

app = Flask(__name__)
CORS(app)  # Habilitar CORS para todas as rotas

# Carregar o modelo e os encoders
model_dir = './model_export'
model = joblib.load(os.path.join(model_dir, 'lightgbm_model.pkl'))
encoders = joblib.load(os.path.join(model_dir, 'encoders.pkl'))

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        
        # Criar DataFrame com os dados recebidos
        input_data = pd.DataFrame({
            'TARIFA': [float(data['tarifa'])],
            'MES': [int(data['mes'])],
            'ANO': [int(data['ano'])],
            'EMPRESA': [data['empresa']],
            'ORIGEM': [data['origem']],
            'DESTINO': [data['destino']]
        })

        # Preparar os dados usando os mesmos encoders do treinamento
        for col in ['EMPRESA', 'ORIGEM', 'DESTINO']:
            input_data[col] = encoders[col].transform(input_data[col])

        # Fazer a predição
        prediction = model.predict(input_data)

        return jsonify({
            'predicted_seats': int(prediction[0]),
            'success': True
        })

    except Exception as e:
        return jsonify({
            'error': str(e),
            'success': False
        })

if __name__ == '__main__':
    app.run(port=5000)