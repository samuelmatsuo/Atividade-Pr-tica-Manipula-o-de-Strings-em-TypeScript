# Atividade Prática Manipulação de Strings em TypeScript

Este projeto foi desenvolvido com o objetivo de praticar a manipulação de strings utilizando TypeScript e Express. Ele fornece uma API com diversas rotas para realizar operações comuns em strings, como obter o comprimento, converter para maiúsculas ou minúsculas, substituir partes do texto, entre outras.

## Como executar o projeto

1. Clone o repositório:

   ```sh
   git clone https://github.com/samuelmatsuo/Atividade-Pr-tica-Manipula-o-de-Strings-em-TypeScript.git
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd Atividade-Pr-tica-Manipula-o-de-Strings-em-TypeScript
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

4. Inicie o servidor em modo de desenvolvimento:

   ```sh
   npm run dev
   ```

   Ou inicie o servidor em modo de produção:

   ```sh
   npm start
   ```

5. O servidor estará rodando na porta definida no arquivo `.env` (padrão é 3000). Acesse `http://localhost:3000` para utilizar a API.

## Rotas disponíveis

- `GET /length/:text` - Retorna o comprimento da string.
- `GET /uppercase/:text` - Converte a string para maiúsculas.
- `GET /lowercase/:text` - Converte a string para minúsculas.
- `GET /substring/:text/:start/:end` - Retorna uma substring da string.
- `GET /replace/:text/:old/:new` - Substitui parte da string por outra.
- `GET /split/:text/:separator` - Divide a string com base em um separador.
- `GET /trim/:text` - Remove espaços em branco do início e do fim da string.
- `GET /charAt/:text/:index` - Retorna o caractere na posição especificada.
- `GET /includes/:text/:search` - Verifica se a string contém outra string.
- `GET /concat/:text1/:text2` - Concatena duas strings.
- `GET /startswith/:text/:prefix` - Verifica se a string começa com um prefixo.
- `GET /endswith/:text/:suffix` - Verifica se a string termina com um sufixo.
- `GET /repeat/:text/:times` - Repete a string um número especificado de vezes.
- `GET /reverse/:text` - Inverte a string.
- `GET /count-a/:text` - Conta o número de ocorrências da letra 'a' na string.

