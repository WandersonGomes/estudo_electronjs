<h1>Estudo Electron - CRUD<h1>

<h2>Introducao</h2>
  Estudo realizado com objetivo de conhecer o Electron e ao final realizar a construcao de um CRUD.<br>
  <br>
  O estudo foi baseado e inspirado por este video tutorial: <a href="https://www.youtube.com/watch?v=0h2LBY5M8y4&t=1694s"> Video Tutorial </a>

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

<h3>Framework - Front End</h3>
<a href="https://getbootstrap.com/">Bootstrap</h3>

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

<h3>Alterar o package.json</h3>
Alterar script para <i>startar</i> aplicacao:
<pre>
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "electron ."
}
</pre>

<h3>Rodar Aplicacao</h3>
<pre>
.../myApp$ npm start
</pre>

<h2>Links Para Estudos Extras</h2>
<h3> W3Schools - HTML/CSS/Javascript/SQL </h3>
(Ingles) Neste site voce podera aprender um pouco mais sobre HTML, CSS, Javascript e SQL.<br>
Acessar: <a href="https://www.w3schools.com/default.asp">W3Schools</a>

<h3>DEVMEDIA - Padrao MVC</h3>
Neste site voce vai aprender sobre o padrao de projeto MVC (Model - View - Controller).<br>
Acessar: <a href="https://www.devmedia.com.br/padrao-mvc-java-magazine/21995"> DevMedia </a>

<h3>HackerRank</h3>
(Ingles) Este site e voltado para testar seus conhecimentos e preparar quem deseja participar de competicoes de programacao.<br>
Acessar: <a href="https://www.hackerrank.com/domains/sql">HackerRank</a>

<h3> FreeCodeCamp.org - Javascript/CSS/Bootstrap/HTML </h3>
(Ingles) Este site vai lhe ajudar a estudar sobre as tecnologias usadas neste estudo.<br>
Acessar: <a href="https://www.freecodecamp.org/"> FreeCodeCamp </a>

<h2>Video Tutoriais e Canais no Youtube</h2>
Canal - FreeCodeCamp: <a href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ"> acessar </a><br>
Canal - Fazt Code: <a href="https://www.youtube.com/channel/UCMn28O1sQGochG94HdlthbA"> acessar </a><br>
Canal - Dev Aprender: <a href="https://www.youtube.com/channel/UCm63tB8wsKOVvxoU4iMpS2A"> acessar </a><br>
Canal - Programador a Bordo: <a href="https://www.youtube.com/channel/UC5fWvbBnaFAi2hJlHRmg5kw"> acessar </a><br>
Canal - Marco Bruno: <a href="https://www.youtube.com/channel/UCVheRLgrk7bOAByaQ0IVolg"> acessar </a><br>
Canal - Erick Wendel: <a href="https://www.youtube.com/channel/UCh84012dEUE076wM2CVFN9A"> acessar </a><br>
Canal - DevPleno: <a href="https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww"> acessar </a><br>
Canal - How To Code: <a href="https://www.youtube.com/channel/UCmPhge53FcctKWXps8gaiKA"> acessar </a><br>

<h2> Cursos Indicados </h2>
Udemy - Curso de Banco de Dados: <a href="https://www.udemy.com/course/bancos-de-dados-relacionais-basico-avancado/">Felipe Mafra</a><br>
