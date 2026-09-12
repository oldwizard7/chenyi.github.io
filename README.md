# Chenyi Tong — Academic Website

Personal research website for [Chenyi Tong](https://oldwizard7.github.io/chenyi.github.io/), designed as a concise landing page for LLM agents, agentic reinforcement learning, reliable AI, and AI for Science.

## Structure

- `index.html` — single-page research landing page
- `assets/css/home.css` — responsive homepage styling
- `assets/js/home.js` — mobile navigation and publication filtering
- `images/publications/` — original decorative publication artwork
- `_pages/`, `_publications/`, `_teaching/` — legacy Jekyll collections retained for compatibility

## Local preview

Because the new homepage uses relative asset paths, it can be previewed directly:

```bash
python3 -m http.server 4000
```

Then open `http://localhost:4000/`.

## Credits

The page's information architecture is inspired by [Zeqing Yuan's website](https://zqyuan.com/) and [He Xiang's website](https://www.hexianghu.com/). The implementation and publication illustrations in this repository are original. The retained Academic Pages code is available under the MIT License in `LICENSE`.
