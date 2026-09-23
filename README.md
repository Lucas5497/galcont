# Galcont – Assessoria Pública e Privada
Site institucional estático (HTML5 + CSS3 + JavaScript puro), pronto para hospedagem em qualquer serviço estático (GitHub Pages, Netlify, Vercel, cPanel etc.).

## Estrutura

```
galcont/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── logo/       → logotipo oficial (não redesenhado), em várias resoluções e favicons
│   └── images/      → reservada para fotos corporativas reais (ainda não fornecidas)
└── README.md
```

## Como visualizar
Basta abrir `index.html` no navegador — não há build nem dependências para instalar.

## Como publicar no GitHub Pages
1. Suba esta pasta para um repositório no GitHub.
2. Em **Settings → Pages**, selecione a branch principal e a pasta raiz (`/`).
3. O site ficará disponível em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Identidade visual
As cores foram extraídas diretamente do arquivo do logotipo enviado (não foram inventadas):
- Verde-esmeralda profundo: `#0C2E22` (variações `#081F17` a `#1F5A42`)
- Dourado: `#C9A24C` (variações `#9C7C34` a `#E3C177`)
- Tipografia: títulos em **Playfair Display**, textos em **Manrope** (Google Fonts).

O logotipo original não foi alterado — apenas recortado/redimensionado para uso em header, footer e favicon (`assets/logo/`).

## O que ainda precisa ser confirmado pela Galcont
O briefing pediu para não inventar nenhuma informação. Os pontos abaixo ficaram como **espaço reservado**, claramente identificados no próprio site (texto em itálico com borda tracejada dourada):

- **Serviços** (seção "Soluções para diferentes necessidades"): 4 cards com título e descrição de cada área de atuação.
- **Diferenciais** (seção verde "Compromisso com um atendimento profissional"): o texto de cada um dos 4 diferenciais (Atendimento, Organização, Transparência, Proximidade).
- **Fotografia corporativa**: por ora o Hero usa um elemento gráfico original (curvas douradas inspiradas no símbolo da marca) no lugar de fotos, para não usar banco de imagens genérico. Instruções para substituir estão em `assets/images/LEIA-ME.txt`.
- **E-mail**: ainda não foi criado, por não ter sido informado. Assim que houver um endereço, é só adicionar o botão correspondente (mesmo padrão dos botões de telefone/WhatsApp já existentes).

## Menu mobile e botão flutuante
- Corrigido o bug em que o botão de abrir/fechar o menu ficava coberto pelo próprio painel do menu ao abrir (era um problema de empilhamento/z-index, não de cor).
- O ícone do Instagram, que estava aparecendo em branco/sem desenho, também foi corrigido (o CSS estava preenchendo o ícone de contorno como se fosse sólido).
- Adicionado um botão flutuante de WhatsApp fixo no canto inferior direito, visível em todas as seções do site (some automaticamente enquanto o menu mobile está aberto, já que o WhatsApp também aparece dentro do menu).

## Redes sociais
Já incluídos no site (header mobile, seção Contato, rodapé e dados estruturados):
- WhatsApp: https://api.whatsapp.com/send?phone=5587999615860
- Instagram: https://www.instagram.com/galcont_/
- Facebook: https://www.facebook.com/galcontcontabilidade

Não foi possível ler automaticamente a descrição/bio desses perfis para detalhar a seção de Serviços — Instagram e Facebook bloqueiam acesso automatizado (robots.txt). Os cards de Serviços já receberam um layout mais completo (ícone + numeração), mas o conteúdo de cada área de atuação continua como placeholder até a Galcont enviar a lista real de serviços (ex.: colando o texto da bio/destaques do Instagram ou do "Sobre" do Facebook).

## Formulário de contato
O formulário (`#contact-form` em `index.html`, lógica em `js/script.js`) tem validação completa no frontend (campos obrigatórios, formato de e-mail e telefone), mas **não simula o envio**, já que não há backend configurado — conforme pedido no briefing. Ao enviar, o usuário vê uma mensagem transparente informando que o envio automático ainda está em configuração e direcionando para o telefone. Quando houver um endpoint, serviço de e-mail transacional (ex. Formspree, EmailJS, backend próprio) ou automação definidos, basta substituir o bloco de `submit` em `js/script.js`.

## Dados já confirmados usados no site
- Endereço: R. Moreira, 41B – Centro, Moreilândia – PE, 56150-000
- Telefone: (87) 3891-1467
- Horário: atendimento até 12:00, reabre às 14:00

## SEO
- Title, meta description, Open Graph e dados estruturados (Schema.org, tipo `AccountingService`) já configurados apenas com informações confirmadas.
- Termos de SEO local (Galcont, assessoria/contabilidade em Moreilândia-PE) usados naturalmente no conteúdo, sem repetição forçada.
