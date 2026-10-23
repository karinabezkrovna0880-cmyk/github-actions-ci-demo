# Базовий пайплайн GitHub Actions

Навчальний Node.js-проєкт для практичної роботи з CI.

## Файли проєкту

- `index.js` — виводить `Hello world`.
- `package.json` — опис проєкту та команда `npm run build`.
- `build.js` — створює папку `dist` і копіює туди `index.js`.
- `.github/workflows/ci.yml` — автоматичний CI-пайплайн GitHub Actions.

## Як перевірити локально

Потрібен встановлений Node.js і npm. У папці проєкту виконайте:

```bash
npm install
npm run build
node dist/index.js
```

Очікуваний вивід останньої команди: `Hello world`.

## Як завантажити на GitHub

1. Створіть **публічний** репозиторій на GitHub. Назва, наприклад: `github-actions-ci-demo`.
2. Розпакуйте ZIP і відкрийте термінал у кореневій папці проєкту.
3. Виконайте команди, замінивши `YOUR-USERNAME` на свій GitHub-логін:

```bash
git init
git branch -M main
git add .
git commit -m "Add Node.js CI workflow"
git remote add origin https://github.com/YOUR-USERNAME/github-actions-ci-demo.git
git push -u origin main
```

Якщо Git повідомляє, що `origin` уже існує, використайте `git remote set-url origin https://github.com/YOUR-USERNAME/github-actions-ci-demo.git`.

## Як перевірити CI

Відкрийте репозиторій на GitHub → **Actions** → запуск `Node.js CI`. Успішний запуск позначається зеленою галочкою. Крок `Upload build artifact` зберігає артефакт `node-build`; його можна завантажити зі сторінки запуску workflow.

> Важливо: ZIP містить готовий проєкт і конфігурацію CI, але для появи посилання на ваш публічний репозиторій та зеленого статусу Actions потрібно завантажити його у ваш GitHub-акаунт. Я не можу опублікувати репозиторій у вашому акаунті без доступу до нього.
