# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# 1. 创建你的项目(React + Vite)

如果你还没有设置，请先创建一个新的 Vite 项目。最常见的方法是使用 Create Vite。
```
npm create vite@latest react-music -- --template react
cd react-music 
yarn
yarn dev
```

# 2. 安装 Tailwind CSS

安装 tailwindcss 及其对等依赖项，然后生成你的 tailwind.config.js 和 postcss.config.js 文件。
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

# 3. 配置你的模板路径

在你的 tailwind.config.js 文件中添加所有模板文件的路径。
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

# 4. 在你的 CSS 中添加 Tailwind 指令

将 @tailwind 指令添加到你的 ./src/index.css 文件中，用于 Tailwind 的每个层。

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```