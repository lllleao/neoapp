# 🦸‍♂️ [Neo App - SPA de Quadrinhos da Marvel](https://neoapp-one.vercel.app/)

Uma Single Page Application (SPA) que consome dados da API da Marvel para exibir quadrinhos, permitindo que o usuário veja detalhes de cada um e gerencie um carrinho de compras.  
Desenvolvido com **React + TypeScript + Vite** e testado com **Cypress**.

Inicialmente, imaginei o site com um design repleto de referências aos quadrinhos antigos: onomatopeias coloridas, fontes extravagantes e muitos elementos visuais competindo pela atenção. Porém, conforme o desenvolvimento avançou, percebi que o resultado precisava de mais equilíbrio e minimalismo.

Depois de muita pesquisa, encontrei a imagem perfeita — a mesma que hoje está na página inicial. A partir dela, simplifiquei o layout, reduzi os excessos e cheguei a um resultado que me agradou muito.

---

## ✨ Funcionalidades

- **Home**: Lista de quadrinhos da Marvel com imagem, título e preço.
- **Detalhes**: Página individual para cada quadrinho com mais informações.
- **Carrinho de compras**:
  - Adicionar quadrinhos ao carrinho
  - Remover quadrinhos do carrinho
  - Atualização automática do total
- **Navegação SPA** com **React Router**
- **Testes end-to-end** com **Cypress**

---

## 🛠️ Tecnologias Utilizadas

- **Frontend**:
  - [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
  - [Vite](https://vitejs.dev/) para build e desenvolvimento rápido
  - [Redux Toolkit](https://redux-toolkit.js.org/) para gerenciamento de estado
  - [Styled Components](https://styled-components.com/) para estilização
  - [React Router](https://reactrouter.com/) para navegação
- **Testes**:
  - [Cypress](https://www.cypress.io/) para testes end-to-end
- **Outros**:
  - [Blueimp MD5](https://www.npmjs.com/package/blueimp-md5) para autenticação na API da Marvel

---

## 📦 Instalação e uso

```bash
git clone https://github.com/lllleao/neoapp
cd neo-app
npm install
npm run dev

