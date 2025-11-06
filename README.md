# ✈️ Análise de Previsibilidade de Voos Aéreos

Um projeto de análise de dados e machine learning desenvolvido em Python para prever atrasos e analisar a pontualidade de voos aéreos, proporcionando insights valiosos para companhias aéreas e passageiros.

## 📋 Sobre o Projeto

Este projeto utiliza técnicas de análise exploratória de dados e algoritmos de machine learning para prever atrasos em voos aéreos e identificar os principais fatores que impactam a pontualidade. O sistema é capaz de analisar dados históricos de voos e gerar previsões com base em diversas variáveis operacionais.

## ✨ Funcionalidades

- Análise exploratória de dados de voos históricos;
- Previsão de atrasos na decolagem e chegada;
- Identificação de fatores críticos que impactam a pontualidade;
- Análise de desempenho por companhia aérea, aeroporto e rota;
- Modelos de machine learning para classificação e regressão;
- Dashboard interativo com métricas e visualizações;
- Relatórios automáticos de performance operacional.

## 🛠️ Tecnologias Utilizadas

- **Python** - Linguagem principal
- **Pandas & NumPy** - Processamento e análise de dados
- **Scikit-learn** - Algoritmos de machine learning
- **XGBoost, LightGBM, CatBoost** - Modelos avançados de ML
- **Matplotlib & Seaborn** - Visualização de dados
- **Jupyter Notebook** - Experimentação e desenvolvimento

## 📊 Modelos de Machine Learning Implementados

- **Regressão Linear** - Para previsão de tempo de atraso
- **XGBoost** - Para classificação de voos com atraso
- **LightGBM** - Para análise de importância de features
- **CatBoost** - Para dados categóricos (companhias, aeroportos)
- **Gradient Boosting & AdaBoost** - Ensemble methods

## ⚙️ Como rodar?

```bash
# Criar ambiente virtual
python3 -m venv venv

# Ativar no Linux/Mac
source venv/bin/activate

# Ativar no Windows
.\venv\Scripts\Activate.ps1

# Atualizar pip
python.exe -m pip install --upgrade pip

# Instalar dependências básicas
pip install ipykernel jupyter

# Instalar bibliotecas do projeto
pip install pandas scikit-learn numpy xgboost lightgbm catboost matplotlib seaborn
```