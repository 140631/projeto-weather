# 🌤️ Clima & Relógio Global

Aplicação web feita com **React + TypeScript + Vite** que exibe a temperatura e o horário de várias cidades do mundo, com layout moderno, responsivo e estilização glassmorphism.

## Demonstração

![screenshot](public/sky.png)

## Funcionalidades

- Lista de 9 cidades do mundo, cada uma com temperatura e relógio local (dados mockados)
- Cards clicáveis com efeito de transparência (glassmorphism)
- Página de detalhes para cada cidade
- Navegação com React Router DOM
- Layout responsivo (3x3 no desktop, 2xN no tablet, 1xN no mobile)
- Visual moderno com background de céu

## Estrutura de Pastas

```
src/
  components/
    CityCard/
    Header/
  interfaces/
  pages/
    Home/
    CityDetail/
  utils/
    mockCities.ts
  App.tsx
  main.tsx
  index.css
public/
  sky.png
```

## Como rodar o projeto

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Rode o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Acesse `http://localhost:5173` no navegador.

## Tecnologias e libs usadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)

## Customização

- Para adicionar/remover cidades, edite o arquivo `src/utils/mockCities.ts`.
- Para alterar o background, troque a imagem `public/sky.png`.
- Para mudar estilos, edite os arquivos `.css` em cada pasta de componente/página.

## Autor

Vinicius Marcili
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
