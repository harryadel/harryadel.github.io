<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
          <a class="navbar-brand hvr-trim" href="#">Harry Adel</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a data-scroll href="#portfolio" class="hvr-underline-from-center">Portfolio</a>
            </li>
            <li>
              <a data-scroll href="#about" class="hvr-underline-from-center">About</a>
            </li>
            <li>
              <a data-scroll href="#contact" class="hvr-underline-from-center">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!--Intro-->
    <div class="container-fluid text-center">
      <div id="intro">
        <h1>Web Development</h1>
        <ul>
          <li>JS</li>
          <li>PHP</li>
          <li>SQL</li>
        </ul>
        <a href="#portfolio">
          <p class="hvr-icon-down hvr-wobble-vertical">VIEW PORTFOLIO</p>
        </a>
      </div>
      <!--Portfolio-->
      <div id="portfolio">
        <!--jQuery-->
        <div class="row">
          <h3>jQuery</h3>
          <div class="col-xs-12 col-sm-4 image">
            <a href="https://codepen.io/Hadouken/full/VePRzQ/" class="thumbnail">
              <img src="./assets/calculator.png">
              <span>Basic Calculator</span>
            </a>
          </div>
          <div class="col-xs-12 col-sm-4 image">
            <a href="https://codepen.io/Hadouken/full/bEmymd/" class="thumbnail">
              <img src="./assets/pomodoro.png">
              <span>Pomodoro Timer</span>
            </a>
          </div>
          <div class="col-xs-12 col-sm-4 image">
            <a href="https://codepen.io/Hadouken/full/PGPpNL/" class="thumbnail">
              <img src="./assets/tictac.png">
              <span>Tic Tac Toe</span>
            </a>
          </div>
        </div>
        <!--API-->
        <h3>API</h3>
        <div class="row">
          <div class="col-xs-12 col-sm-4 image">
            <a href="https://codepen.io/Hadouken/full/akwEvo/" class="thumbnail">
              <img src="./assets/wikipedia.png">
              <span>Wikipedia Viewer</span>
            </a>
          </div>
          <div class="col-xs-12 col-sm-4 image">
            <a href="https://codepen.io/Hadouken/full/ozXVkk/" class="thumbnail">
              <img src="./assets/twitch.png">
              <span>Twitct.tv Streamers</span>
            </a>
          </div>
          <div class="col-xs-12 col-sm-4 image">
            <a href="https://codepen.io/Hadouken/full/YwpbRr/" class="thumbnail">
              <img src="./assets/randomquote.png">
              <span>Quote Generator</span>
            </a>
          </div>
        </div>
        <!--Vue-->
        <div class="row">
          <h3>Vue.js</h3>
          <div class="col-xs-12 col-sm-4 image">
            <a href="https://codepen.io/Hadouken/full/KNWeON/" class="thumbnail">
              <img src="./assets/markdowneditor.png">
              <span>Markdown Editor</span>
            </a>
          </div>
          <div class="col-xs-12 col-sm-4 image">
            <a href="https://codepen.io/Hadouken/full/ENXGJB/" class="thumbnail">
              <img src="./assets/recipebox.png">
              <span>A Todo App</span>
            </a>
          </div>
          <div class="col-xs-12 col-sm-4 image">
            <a href="https://codepen.io/Hadouken/full/gLmQvP/" class="thumbnail">
              <img src="./assets/leaderboard.png">
              <span>Camper Leaderboard</span>
            </a>
          </div>
        </div>
      </div>
      <!--About-->
      <div id="about">
        <div class="row">
          <div class="col-xs-8 col-xs-offset-2">
            <img src="https://i3.imgpile.com/i/mH6sL.jpg" class="center-block img-responsive img-circle">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu orci tortor. Praesent lectus leo, condimentum
              gravida augue in, pharetra iaculis ipsum. Pellentesque sagittis, odio non accumsan semper, lorem libero finibus
              est, tristique consequat metus ex et urna. Pellentesque habitant morbi tristique senectus et netus et malesuada
              fames ac turpis egestas. Suspendisse et enim hendrerit, aliquet metus ut, porttitor justo. Nullam in finibus
              felis. Pellentesque vitae pretium mi, non hendrerit metus. Fusce augue ligula, gravida nec fermentum eu, convallis
              quis mauris. </p>
          </div>
        </div>
      </div>
      <!--contact-->
      <div id="contact">
        <h3>Contact</h3>
        <hr width="200">
        <a href="https://github.com/Harry97" target="_blank"><i class="fa fa-github hvr-grow" aria-hidden="true"></i></a>
        <a href="https://codepen.io/Hadouken" target="_blank"><i class="fa fa-codepen hvr-grow" aria-hidden="true"></i></a>
        <p>Please get in touch via email:</p>
        <p>hadoukenn97@gmail.com</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  $font: 'Roboto',
  sans-serif;
  $fontColor: white;
  $backColor: #2F7C98;
  body {
    font-family: $font;
    font-color: $fontColor;
    overflow-x: hidden;
  }
  
  .container-fluid {
    padding: 0;
  }
  
  .navbar {
    padding: 15px 0;
    background: rgba(0, 0, 0, .1);
    border: none;
    background-color: $backColor;
    .navbar-collapse {
      border: none;
      box-shadow: none;
    }
    .navbar-nav>li>a,
    .navbar-brand {
      color: $fontColor;
      &:hover {
        color: $fontColor;
      }
    }
  }
  
  #intro {
    background-color: $backColor;
    color: $fontColor;
    height: 350px;
    margin-top: -45px;
    h1 {
      padding-top: 60px;
    }
    li {
      display: inline;
      padding: 30px;
    }
    p {
      margin-top: 40px;
    }
    a {
      color: inherit;
    }
  }
  
  #portfolio {
    background-color: #F6F6F6;
    padding-bottom: 30px;
    .image {
      padding-bottom: 40px;
    }
    a {
      text-decoration: none;
      color: #353434;
      font-weight:bold;

    }
    h3 {
      font-weight:bold;

      display: block;
      padding: 30px;
    }
  }
  
  #about {
    background-color: $backColor;
    p {
      padding-top: 90px;
      font-size: 20px;
      padding-bottom: 45px;
      color: $fontColor;
    }
    img {
      margin-top: 55px;
    }
  }
  
  #contact {
    background-color: $backColor;
    height: 300px;
    color: $fontColor;
    p {
      font-size: 15px;
    }
    h3 {
      margin-top: 0;
    }
  }
  
  hr {
    padding: 0;
    border: none;
    border-top: medium double #FFFFFF;
    color: $fontColor;
    text-align: center;
    &:after {
      display: inline-block;
      position: relative;
      top: -0.7em;
      font-size: 1.5em;
      padding: 0 0.25em;
      background: $backColor;
    }
  }
  
  .fa {
    color: $fontColor;
    font-size: 35px;
    padding: 30px;
  }
</style>