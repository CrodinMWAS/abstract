<template>
  <router-view></router-view>
</template>

<script></script>

<style>
  /*----------  Import for subfonts  ----------*/
  @import url("https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Shadows+Into+Light&family=Shizuru&display=swap");
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
    --blackColor: #212121;
  }

  body {
    font-family: "Roboto Condensed", sans-serif;
    color: #fafafa;
    margin: 0;
    padding: 0;
    background-color: black;
  }

  #app {
    margin: 0;
    padding: 0;
  }

  *{
    box-sizing: border-box;
  }

  #logo {
    background-image: url("@/assets/Abstract_Logo_Black.jpg");
    background-position: center; 
  }
  /*=====  End of Basic Settings  ======*/
</style>
