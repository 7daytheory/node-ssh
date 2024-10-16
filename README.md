# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Required libraries

<h3>TailwindCSS</h3>
```bash 
npm install tailwindcss postcss autoprefix

<h3>Setting up Template/Layouts</h3>
<p>To use Router, Routes, and Route you are required to install :</p>
```bash
npm install react-router-dom


## Setting up Node Server

Install NVM (Node Version Manager)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

<p>After running the installation script, you should close and reopen your terminal, or you can run the following command to use NVM immediately:</p>
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion

### Install Node
```bash
nvm install node  # installs latest Node.js version
nvm use node      # use installed node

<p>You can verify if this worked by checking version with -v (node -v or nvm -v)</p>

### Install PM2 
<p>With Node.js and npm installed, you can now install PM2, which is used to manage and keep your Node.js applications running - you can just use node but PM2 has many helpful features:</p>
```bash
npm install pm2@latest -g  # Installs PM2 globally

<p>Start the application with PM2</p>
```bash
pm2 start index.js --name "app name"  # I used index.js but it might be server.js or app.js - and insert your app name from package

### Set up application to auto-start
```bash
pm2 startup  # Run as superuser

```bash
pm2 save # Savecurrent list of processes
