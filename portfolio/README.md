# Setup Completo da Landing Page de Portfólio Premium

Bem-vindo ao projeto da nova Landing Page de Portfólio Profissional! Este projeto foi desenvolvido visando proporcionar uma experiência premium aos usuários através de técnicas modernas de front-end, focado em alta performance visual sem depender de bibliotecas pesadas.

## Estrutura do Projeto

O projeto foi dividido da seguinte forma para garantir manutenção e escalabilidade:

```
portfolio/
├── index.html       (Estrutura semântica HTML5)
├── css/
│   └── style.css    (Reset, Variáveis UI, Responsividade via Grid/Flex)
├── img/             (Imagens geradas por IA para demonstração final)
│   ├── foto-perfil.jpg
│   ├── projeto-1.jpg
│   ├── projeto-2.jpg
│   └── projeto-3.jpg
└── README.md
```

## Ferramentas & Tecnologias
- **HTML5:** Foco total em SEO e Acessibilidade implementando apenas tags semânticas (como `header`, `section`, `article`, `footer`, `nav`). Tratamento de inputs e labels acessíveis no formulário.
- **CSS3 Vanilla:** Criação do ambiente *Dark Theme* nativo utilizando CSS Variables (`:root`).
- **Animações e Efeitos:** Incorporação de transições suaves (`0.3s ease`), *Glassmorphism* no navbar e animação `fadeIn` via Keyframes para recebimento de alto impacto do usuário na primeira vista (*Hero Section*).
- **Modelagem Responsiva:** Construído com abordagem *Mobile-First*, subindo resouluções gradativamente utilizando Flexbox na Navbar e Contact form, e CSS Grid nos cards de projeto para adaptabilidade automática.

## Checklist de Requisitos Atendidos:
- [x] Estrutura organizada e CSS isolado.
- [x] Tags semânticas configuradas no HTML.
- [x] Viewport configurada corretamente.
- [x] Contato formulário com labels apropriadas.
- [x] Atribuições de `alt text` em todas as imagens (aqui geradas visões por IA).
- [x] Âncoras testadas no navbar.
- [x] Variáveis globais CSS e Reset unificado com `box-sizing: border-box`.
- [x] Estilização utilizando Flexbox e CSS Grid combinados.
- [x] Mobile-first implementado (media queries testados).
- [x] Elementos de UI extras: Efeitos hover, glassmorphism e sombras adaptativas do Dark Mode.
- [x] `max-width: 100%` nas imagens para total responsividade.

## Instruções de uso local
1. Navegue até a pasta local do projeto.
2. Não são necessários comandos `npm`. Basta abrir o arquivo `index.html` em qualquer navegador atualizado ou utilizar a extensão *Live Server* do seu VSCode!
