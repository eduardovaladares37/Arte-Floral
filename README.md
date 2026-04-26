# Arte Floral — Workshop Sarah Deck

Landing page do workshop *Arte Floral* conduzido por Sarah Deck — uma vivência sensorial com flores, técnica e autocuidado.

**Edição:** 09 de maio · 8h às 12h · Belém/PA
**Vagas:** 8

## Stack

Site estático puro — HTML + CSS + JavaScript vanilla. Sem build step.

```
.
├── index.html      # estrutura da landing
├── style.css       # identidade visual Sarah Deck
├── script.js       # nav, scroll animations, carrossel
├── images/         # fotos do workshop, prints e logo
└── vercel.json     # configuração de deploy
```

## Desenvolvimento local

```bash
# qualquer servidor estático serve
python3 -m http.server 8000
# ou
npx serve .
```

Abrir em `http://localhost:8000`.

## Deploy

Hospedado no Vercel — qualquer push em `main` dispara redeploy automático.

## Identidade visual

- **Paleta:** creme `#F2EADB` · carmim `#A8121E` · rosa pálido `#F2C8C8` · pervinca `#8E9BD4` · carvão `#3A322D`
- **Tipografia:** Cormorant Garamond (corpo), DM Serif Display (títulos), Pinyon Script (assinatura)
- **Tom:** editorial, contemplativo, feminino-artesanal

---

© 2026 Sarah Deck · @sarahdeck.co
