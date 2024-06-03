<template>
  <router-view></router-view>
</template>

<script></script>

<style>
  /*----------  Import for subfonts  ----------*/
  @import url("https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Shadows+Into+Light&family=Shizuru&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
  /*----------  Main font import  ----------*/
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,200;0,300;0,400;0,600;0,900;1,200;1,400;1,600;1,900&display=swap");


  /*=============================================
  =            Basic Settings            =
  =============================================*/
  :root {
    --blackColor: #212121;
    --purpleColor: #5800ff;
    --yellowColor: #ffc600;
    --blueColor: #00e8fc;
    --whiteColor: #fafafa;
    --grayColor: #EAEAEA;
  }

  body {
    position: relative;
    font-family: "Roboto Condensed", sans-serif;
    /* font-family: "Roboto Mono", monospace; */
    /* font-family: "Major Mono Display", monospace; */
    /* font-family: 'Gloria Hallelujah'; */
    color: var(--blackColor);
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-image: url('./assets/concreto-branco-ou-material-de-cimento-em-textura-de-fundo-de-parede-abstrata_43029-1642.avif');
    background-position: center;
    background-size: cover;
    backdrop-filter: blur(3px);
  }

  #app {
    margin: 0;
    padding: 0;
  }

  *{
    box-sizing: border-box;
  }

  .logo {
    background-image: url("@/assets/Abstract_Logo_Black.jpg");
    background-position: center; 
  }

  .abstract{
    font-family: "Major Mono Display", monospace;
    background: radial-gradient(circle, rgba(89, 0, 255, 1) 0%, var(--grayColor) 120%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  /*=====  End of Basic Settings  ======*/
</style>
