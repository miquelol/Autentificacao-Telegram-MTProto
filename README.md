# Como Fazer Login:

1. Defina `api_id` no arquivo `api.js` com base no aplicativo Telegram.

2. Defina `api_hash` no arquivo `api.js`.

3. Faça login na conta executando o arquivo `auth.js`.

4. Informe o número de telefone e o código de autenticação fornecido pelo canal oficial do Telegram.

5. Observe as atualizações. Login bem-sucedido.



# Projeto Telegram MTProto

Este projeto utiliza a biblioteca @mtproto/core para interagir com a API do Telegram através do protocolo MTProto.

## Configuração

1. **Credenciais de API:**
   - Substitua `YOUR_API_ID` e `YOUR_API_HASH` no arquivo `API.js` pelas suas próprias credenciais de API do Telegram.

2. **Instalação de Dependências:**
   Execute o seguinte comando para instalar as dependências do projeto:
   ```bash
   npm install


# Uso
# API.js
O arquivo API.js contém a classe API que encapsula a interação com a API do Telegram.

Exemplo de Uso

const api = require('./API');

// Exemplo de chamada de método
api.call('nomeDoMetodo', { parametro: 'valor' })
  .then(result => {
    console.log('Resultado:', result);
  })
  .catch(error => {
    console.error('Erro:', error);
  });




# AUTH.js

O arquivo AUTH.js lida com a autenticação no Telegram. Ele inclui funções para obter informações do usuário, enviar códigos de autenticação e realizar o login.

Exemplo de Uso

const { getUser, signIn, sendCode } = require('./AUTH');

(async () => {
  const user = await getUser();

  // ... código adicional ...
})();



# UPDATES.js

O arquivo UPDATES.js contém funções relacionadas a atualizações e envio de mensagens no Telegram.


const { sendMessage } = require('./UPDATES');

// ... código adicional ...

// Exemplo de chamada da função sendMessage
sendMessage();



# Documentação
Para obter informações detalhadas sobre os métodos da API do Telegram e como usá-los com a biblioteca @mtproto/core, consulte a [documentação oficial](https://mtproto-core.js.org/docs/call-the-telegram-methods/)



Lembre-se de ajustar conforme necessário para atender às suas preferências específicas.

## Problemas Conhecidos

- [Erro de Autenticação (#177)](https://github.com/alik0211/mtproto-core/issues/177): Este problema está sendo acompanhado de perto. Certifique-se de verificar para obter as últimas atualizações e soluções possíveis.

