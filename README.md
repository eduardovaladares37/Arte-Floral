# Casa Jardim · Web

Site institucional da **Casa Jardim** (Belém/PA — flores, café e ateliê) e landing
do workshop **Arte Floral** com Sarah Deck — ambos hospedados em [casajardim.co](https://casajardim.co).

## Estrutura

```
.
├── index.html          # Site institucional Casa Jardim (raiz)
├── style.css           # CSS institucional (paleta sage/terra)
├── script.js           # JS institucional (nav, scroll, mobile)
├── artefloral/         # Workshop Sarah Deck (subsite)
│   ├── index.html
│   ├── style.css       # CSS workshop (paleta carmim/pervinca)
│   ├── script.js
│   ├── images/         # Fotos workshop, prints, IMG_*, casajardim*
│   └── logo-arte-floral*.png
├── vercel.json         # Cache headers + clean URLs
└── README.md
```

## Rotas em produção

| URL                         | Conteúdo                                      |
|-----------------------------|-----------------------------------------------|
| `casajardim.co/`            | Site institucional Casa Jardim                |
| `casajardim.co/artefloral`  | Landing do workshop Arte Floral · Sarah Deck  |

## Desenvolvimento local

Site estático puro — qualquer servidor estático serve.

```bash
python3 -m http.server 8000
# → http://localhost:8000          (Casa Jardim)
# → http://localhost:8000/artefloral/  (Arte Floral)
```

## Deploy

Vercel detecta push em `main` e redeploya automaticamente.
Subdiretórios são servidos como rotas — `/artefloral/index.html` é exibido em
`casajardim.co/artefloral` sem configuração adicional.

## Identidades visuais

**Casa Jardim** (raiz)
- Cream `#F5EFE2` · sage `#5C6E4D` · terracota `#C29577` · charcoal `#2D2A26`
- Cormorant Garamond · DM Sans · Pinyon Script

**Arte Floral** (`/artefloral`)
- Cream `#F2EADB` · carmim `#A8121E` · rosa pálido `#F2C8C8` · pervinca `#8E9BD4`
- Cormorant Garamond · DM Sans · Pinyon Script

---

© 2026 Casa Jardim · @casajardim.co
