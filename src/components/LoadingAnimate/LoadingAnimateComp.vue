<template>
  <div class='tetrominos'>
    <div class='tetromino box1'></div>
    <div class='tetromino box2'></div>
    <div class='tetromino box3'></div>
    <div class='tetromino box4'></div>
  </div>
</template>

<style lang="scss" scoped>
$w: 14px;
$h: 17px;
$xspace: calc($w / 2);
$yspace: calc($h / 4 - 1px);
$speed: 1.5s;

.tetrominos {
  position: relative;
  //top: 50%; left: 50%;
  width: 36px;
  height: 22px;
  animation: fadein 0.2s ease-in-out;
}

.tetromino {
  width: $w;
  height: $h;
  position: absolute;
  transition: all ease .3s;
  background: url('data:image/svg+xml;utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 684"%3E%3Cpath fill="%23106d51" d="M305.7 0L0 170.9v342.3L305.7 684 612 513.2V170.9L305.7 0z"/%3E%3Cpath fill="%232dae88" d="M305.7 80.1l-233.6 131 233.6 131 234.2-131-234.2-131"/%3E%3C/svg%3E') no-repeat top center;
}

.box1 {
  animation: tetromino1 $speed ease-out infinite;
}
.box2 {
  animation: tetromino2 $speed ease-out infinite;
}
.box3 {
  animation: tetromino3 $speed ease-out infinite;
  z-index: 2;
}
.box4 {
  animation: tetromino4 $speed ease-out infinite;
}

// keyframe for fadein
@keyframes fadein {
  0% {
    opacity: 0;
    transform: translateX(8px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes tetromino1 {
  0%, 40% { 
    /* compose logo *//* 1 on 3 *//* L-shape */
    transform: translate(0,0);
  } 50% {
    /* pre-box */
    transform: translate($xspace,-$yspace);
  } 60%, 100% {
    /* box *//* compose logo */
    transform: translate($xspace*2,0);
  }
}

@keyframes tetromino2 {
  0%, 20% { 
    /* compose logo *//* 1 on 3 */
    transform: translate($xspace*2, 0px);
  } 40%, 100% { 
    /* L-shape *//* box *//* compose logo */
    transform: translate($xspace*3, $yspace);
  }
}

@keyframes tetromino3 {
  0% { 
    /* compose logo */
    transform: translate($xspace*3, $yspace);
  } 20%, 60% { 
    /* 1 on 3 *//* L-shape *//* box */
    transform: translate($xspace*2, $yspace*2);
  } 90%, 100% { 
    /* compose logo */
    transform: translate($xspace, $yspace);
  }
}

@keyframes tetromino4 {
  0%, 60% {
    /* compose logo *//* 1 on 3 *//* L-shape *//* box */
    transform: translate($xspace, $yspace);
  } 90%, 100% { 
    /* compose logo */
    transform: translate(0, 0);
  }
}
</style>