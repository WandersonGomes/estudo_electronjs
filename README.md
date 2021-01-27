<h1>Estudo Electron - CRUD<h1>

<h2>Introducao</h2>
  Estudo realizado com objetivo de conhecer o Electron e ao final realizar a construcao de um CRUD.

<h2>Configuracoes Iniciais</h2>
Para desenvolver este estudo sera necessario que voce instale alguns softwares e faca algumas configuracoes iniciais.

<h3>Softwares:</h3>
<a href="https://nodejs.org/en/">NodeJS</a> - version: 12.18.0<br>
NPM - version: 6.14.11 <br>
<a href="https://www.apachefriends.org/pt_br/index.html">XAMPP</a> - version: 8.0.1

<h3>Modulos NodeJS</h3>
<a href="https://www.electronjs.org/">Electron</a><br>
<a href="https://www.npmjs.com/package/electron-reload">Electron Reload</a><br>
<a href="https://www.npmjs.com/package/promise-mysql">Promise-MySQL</a>

<h3>Estrutura de Diretorios e Arquivos Iniciais</h3>
<pre>
myApp/
├── view/
|   ├── css/
|   |   └── custom.css    
|   ├── mainWindow.html
|   └── view.js
├── model/
|   └── model.js
├── controller/
|   └── controller.js
├── package.json
└── app.js
</pre>

<h3>Comandos no Console</h3>
<p>
Inicializar o projeto:
</p>
<pre>
.../myApp$ npm init -y
</pre>

ou

<pre>
.../myApp$ npm init
</pre>

<p>
Instalar os modulos:
</p>
<pre>
.../myApp$ npm install electron electron-reload promise-mysql
</pre>
