---
sidebar_position: 2
---

# Utilização e faturamento

Um dos beneficios do Firebase é em relação as cotas de uso que são generosas no plano gratuito (Spark), entretanto, dependendo do tamanho da aplicação os serviços param de funcionar e então é necessario o upgrade para um novo plano que cobra de acordo com o uso (Blaze).  
Dentre os serviços do firebase, existem aqueles que são gratuitos, sendo alguns desses:

- **Firebase Cloud Messaging** - envio de notificações Android e IOS
- **Crashlytics** - monitoramento de quedas em tempo real
- **In app Messaging** - envio de noticações dentro de um aplicativo
- **Monitoramento de desempenho** - analise de dados coletados de um aplicativo para monitoramento
- **Remote Config** - alterar aparência e comportamento de um aplicativo remotamente

Em relação aos serviços que possuem custo as condições que definem este custo são, quantidade de dados armazenados, invocações, quantidade de usuários, isto tanto por mês ou por dia, variando por serviço. Os custos para alguns dos serviços encontrados na seção de [Planos de Preços](https://firebase.google.com/pricing?hl=pt-br) do firebase são:

## Authentication

O limite é de 10 mil autenticações no mês e são cobrados US$0,01 por verificação a mais nas regiões do EUA, Canada e Índia e US$0,06 por verificação a mais nas outras regiões.

| Plano | Cota gratuita por mês | Preço alem da cota gratuita por verificação              |
| ----- | ----------------------| -------------------------------------------------------- |
| Spark | 10 mil verificações   | N/A Deve fazer upgrade para plano blaze                  |
| Blaze | 10 mil verificações   | US$0,01 (EUA, Canada, Índia) ou U$0,06 (demais regiões) |

## Firestore

Para o serviço do firestore as cotas são divididas em dados armazenados, saida da rede, leitura, escrita e remoção. Neste caso os valores de custo variam de acordo com a região em que o banco esta localizado (pode ser configurado na criação). A seguir pode ser visto  os detalhes de custo para cada operação.

### Dados armazenados

Considerando um banco localizado na região dos EUA (multi-region), os custos de armazenamento são:

| Plano | Cota gratuita | Preço alem da cota gratuita (GB/Mês)    |
| ----- | ------------- | --------------------------------------- |
| Spark | 1GB           | N/A Deve fazer upgrade para plano blaze |
| Blaze | 1GB           | US$0,18                                 |

### Saida da rede

Alem do custo de armazenamento, deve ser considerado também o custo de saida de dados, isto é, operações de solicitação realizada entre regiões e operações de solicitação de dispositivos moveis.  
Considerando um banco localizado na região dos EUA, os custos de saída de rede são:

| Plano | Cota gratuita  | Preço alem da cota gratuita (GiB)        |
| ----- | -------------  | ---------------------------------------- |
| Spark | 10GiB          | N/A Deve fazer upgrade para plano blaze  |
| Blaze | 10GiB          | US$0,01                                  |

Os valores para saida entre regiões diferentes dos EUA podem ser encontrados nas [Taxas de saída da internet](https://cloud.google.com/firestore/pricing?hl=pt-br#internet-egress) do Google Cloud.

### Leitura

Considerando um banco localizado na região dos EUA (multi-region), os custos de leitura são:

| Plano | Cota gratuita por dia  | Preço alem da cota gratuita (cada 100.000 documentos) |
| ----- | ---------------------  | ----------------------------------------------------- |
| Spark | 50.000                 | N/A Deve fazer upgrade para plano blaze               |
| Blaze | 50.000                 | US$0,06                                               |

### Gravação

Considerando um banco localizado na região dos EUA (multi-region), os custos de gravação são:

| Plano | Cota gratuita por dia  | Preço alem da cota gratuita (cada 100.000 documentos) |
| ----- | ---------------------  | ----------------------------------------------------- |
| Spark | 20.000                 | N/A Deve fazer upgrade para plano blaze               |
| Blaze | 20.000                 | US$0,18                                               |

### Remoção

Considerando um banco localizado na região dos EUA (multi-region), os custos de remoção são:

| Plano | Cota gratuita por dia  | Preço alem da cota gratuita (cada 100.000 documentos) |
| ----- | ---------------------  | ----------------------------------------------------- |
| Spark | 20.000                 | N/A Deve fazer upgrade para plano blaze               |
| Blaze | 20.000                 | US$0,02                                               |

Para custos de leitura, escrita e gravação em bancos localizados em regiões diferentes dos EUA e para custos em moedas diferentes dos dolar americano consulte os [Preços do Firestore](https://cloud.google.com/firestore/pricing?hl=pt-br#firestore-pricing) e [Google Cloud Platform SKUs](https://cloud.google.com/skus/?hl=pt-br&currency=BRL&filter=)