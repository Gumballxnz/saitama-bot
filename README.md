# 👊 Saitama Bot

![Saitama Bot](./assets/images/saitama-bot.png)

> O melhor bot de WhatsApp, agora 100% atualizado e controlado por **Gumball**.

[![Node.js](https://img.shields.io/badge/Node.js-22.19-green?logo=node.js)](https://nodejs.org/en)
[![Axios](https://img.shields.io/badge/Axios-1.13-blue?logo=axios)](https://axios-http.com/ptbr/docs/intro)
[![Baileys](https://img.shields.io/badge/Baileys-7.0.0.9-purple?logo=whatsapp)](https://github.com/Gumballxnz/saitama-bot-)
[![FFMPEG](https://img.shields.io/badge/FFMPEG-Latest-orange?logo=ffmpeg)](https://ffmpeg.org/)

## 📋 Sumário

1. [⚠️ Atenção](#-atenção)
2. [📖 Sobre o Projeto](#sobre-este-projeto)
3. [🚀 Instalação](#instalação-no-termux)
    - [No Termux](#instalação-no-termux)
    - [Em VPS (Debian/Ubuntu)](#instalação-em-vps-debianubuntu)
4. [⚙️ Configuração de API](#alguns-comandos-necessitam-de-api)
5. [🛠️ Funcionalidades](#funcionalidades-gerais)
6. [🤖 Auto responder](#auto-responder)
7. [📁 Estrutura de pastas](#estrutura-de-pastas)
8. [🔄 Atualizar o bot](#atualizar-o-bot)
9. [❓ Erros comuns](#erros-comuns)

## ⚠ Atenção

Este projeto não possui qualquer vínculo oficial com o WhatsApp. Ele foi desenvolvido de forma independente para interações automatizadas.

## Sobre este projeto

Este projeto foi personalizado para uso privado por **Gumball**.

Não nos responsabilizamos por qualquer uso indevido deste bot. É de responsabilidade exclusiva do usuário garantir que sua utilização esteja em conformidade com os termos de uso do WhatsApp e a legislação vigente.

## Instalação no Termux

1 - Abra o Termux e execute os comandos abaixo.

```sh
pkg upgrade -y && pkg update -y && pkg install git -y && pkg install nodejs-lts -y && pkg install ffmpeg -y
```

2 - Habilite o acesso da pasta storage, no termux.

```sh
termux-setup-storage
```

3 - Escolha uma pasta de sua preferência pra colocar os arquivos do bot.

No nosso exemplo, vamos para a `/sdcard`

```sh
cd /sdcard
```

4 - Clone o repositório.

```sh
git clone https://github.com/Gumballxnz/saitama-bot-.git
```

5 - Entre na pasta que foi clonada.

```sh
cd saitama-bot-
```

6 - Habilite permissões de leitura e escrita (faça apenas 1x esse passo).

```sh
chmod -R 755 ./*
```

7 - Execute o bot.

```sh
npm start
```

8 - Insira o número de telefone e pressione `enter`.

9 - Informe o código que aparece no termux, no seu WhatsApp.

10 - Aguarde 10 segundos, depois digite `CTRL + C` para parar o bot.

Depois, Configure o arquivo `config.js` que está dentro da pasta `src`.

```js
// Prefixo padrão dos comandos.
export const PREFIX = "/";

// Emoji do bot (mude se preferir).
export const BOT_EMOJI = "👊";

// Nome do bot (mude se preferir).
export const BOT_NAME = "Saitama Bot";

// LID do bot.
export const BOT_LID = "12345678901234567890@lid";

// LID do dono do bot.
export const OWNER_LID = "12345678901234567890@lid";
```

11 - Inicie o bot novamente.

```sh
npm start
```

## Instalação em VPS (Debian/Ubuntu)

1 - Abra um novo terminal e execute os seguintes comandos.

```sh
sudo apt update && sudo apt upgrade && sudo apt-get update && sudo apt-get upgrade && sudo apt install ffmpeg
```

2 - Instale dependências essenciais:

```sh
sudo apt install curl git -y
```

3 - Instale o NVM.

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

4 - Atualize o source do seu ambiente

```sh
source ~/.bashrc
```

5 - Instale a versão 22 mais recente do node.js.

```sh
nvm install 22
```

6 - Instale o PM2 (recomendado).

```sh
npm install pm2 -g
```

7 - Clone o repositório do bot.

```sh
git clone https://github.com/Gumballxnz/saitama-bot-.git
```

8 - Entre na pasta clonada.

```sh
cd saitama-bot-
```

9 - Instale as dependências.

```sh
npm install
```

10 - Inicie o bot.

```sh
npm start
```

11 - O bot vai solicitar que você digite seu número de telefone. Digite **exatamente** como está no WhatsApp e apenas números.

12 - Conecte o bot no PM2 para rodar 24/7.

```sh
pm2 start src/index.js --name "saitama-bot"
pm2 save
pm2 startup
```

## Alguns comandos necessitam de API

Edite o arquivo `config.js` que está dentro da pasta `src` e configure suas chaves de API.

```js
export const SPIDER_API_TOKEN = "seu_token_aqui";
export const LINKER_BASE_URL = "https://linker.devgui.dev/api";
export const LINKER_API_KEY = "seu_token_aqui";
```

## Funcionalidades gerais

| Função | Contexto | 
| ------------ | --- |
| Alterar imagem do bot | Dono |
| Desligar o bot no grupo | Dono |
| Executar comandos de infra | Dono |
| Ligar o bot no grupo | Dono |
| Modificar o prefixo por grupo | Dono |
| Obter o ID do grupo | Dono |
| Abrir grupo | Admin |
| Agendar mensagem | Admin |
| Anti audio | Admin |
| Anti documento | Admin |
| Anti evento | Admin |
| Anti imagem | Admin |
| Anti link | Admin |
| Anti produto | Admin |
| Anti sticker | Admin |
| Anti video | Admin |
| Banir membros | Admin |
| Excluir mensagens | Admin |
| Fechar grupo | Admin |
| Ligar/desligar auto responder | Admin |
| Ligar/desligar boas vindas | Admin |
| Limpar chat | Admin |
| Marcar todos | Admin |
| Mudar nome do grupo | Admin |
| Mute/unmute | Admin |
| Revelar | Admin |
| Somente admins | Admin |
| Borrar imagem | Membro |
| Busca CEP | Membro |
| Canvas cadeia | Membro |
| Figurinha animada para GIF | Membro |
| Geração de imagens com IA | Membro |
| Google Gemini | Membro |
| Play música/vídeo | Membro |
| Sticker | Membro |
| TikTok video download | Membro |

## Auto responder

O Saitama Bot possui um auto-responder embutido, edite o arquivo em `./database/auto-responder.json`.

## Estrutura de pastas

- 📁 assets ➔ _arquivos de mídia e sistema de autenticação_
- 📁 database ➔ _banco de dados local_
- 📁 src ➔ _código fonte do bot_
  - 📁 commands ➔ _todos os comandos_
  - 📝 config.js ➔ _configurações principais_
  - 📝 index.js ➔ _ponto de entrada_

## Atualizar o bot

Execute `bash update.sh`

## Erros comuns

### 📁 Operação negada ao extrair a pasta

O erro acontece quando é feito o download do arquivo ZIP direto no celular. Recomendamos usar `git clone`.

### 🔄 Remoção dos arquivos de sessão

Caso dê algum erro na conexão, digite:

```sh
bash reset-qr-auth.sh
```

Depois tente conectar novamente.

---

### © 2026 Saitama Bot
Desenvolvido por **Gumball**.
