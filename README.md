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

### 🪟 Windows

```bash
# Etapa 0: Corrige problema de política de execução do PowerShell para permitir a ativação (temporário)
Set-ExecutionPolicy RemoteSigned -Scope Process

# Etapa 1: Cria o ambiente virtual chamado .venv usando especificamente o Python
python -m venv .venv

# Etapa 2: Ativa o ambiente virtual para que os comandos 'pip' instalem APENAS nele
.\.venv\Scripts\Activate.ps1
# *** Verifique se o seu prompt mudou para (.venv) PS C:\... ***

# Etapa 3: Atualiza o pip dentro do ambiente (Comum para todos os sistemas)
python -m pip install --upgrade pip

# Etapa 4: Instala/Atualiza as ferramentas de construção
pip install --upgrade setuptools wheel

# Etapa 5: Instala os pacotes desejados
pip install ipykernel jupyter
```

### 🪟 Linux/macOS

```bash
# 1. Cria o ambiente virtual chamado .venv usando especificamente o Python
python -m venv .venv

# 2. Ativa o ambiente virtual (usa 'source' no Linux/macOS)
source .venv/bin/activate
# *** Verifique se o seu prompt mudou para (.venv) ***

# 3. Atualiza o pip dentro do ambiente
python -m pip install --upgrade pip

# 4. Instala/Atualiza as ferramentas de construção
pip install --upgrade setuptools wheel

# 5. Instala os pacotes desejados
pip install ipykernel jupyter
```

### 💀 Como desativas o ambiente virtual no terminal?

```bash
deactivate
```