<template>
    <div class="fixed top-0 left-0 w-full h-full overflow-hidden -z-1">
      <!-- 方块 -->
      <div
        v-for="(block, index) in blocks"
        :key="index"
        :style="blockStyle(block)"
        class="absolute bg-blue-300 rounded"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        blocks: [],
      };
    },
    created() {
      this.generateBlocks();
    },
    methods: {
      generateBlocks() {
        const blockCount = 300; // 你想生成的方块数量
        for (let i = 0; i < blockCount; i++) {
          this.blocks.push({
            x: Math.random() * 100, // 横轴位置（视窗宽度的百分比）
            y: Math.random() * 100, // 纵轴起始位置（视窗高度的百分比）
            size: Math.random() * 3, // 方块的大小（视窗宽度的百分比）
            opacity: Math.random(), // 透明度
            animationDelay: Math.random() * 5, // 动画延迟时间（秒）
            animationDuration: Math.random() * 5 + 5, // 动画持续时间（秒）
          });
        }
      },
      blockStyle(block) {
        return {
          left: block.x + 'vw',
          top: block.y + 'vh',
          width: block.size + 'vw',
          height: block.size + 'vw', // 方块大小为正方形，也可以设置为不同的高度
          opacity: block.opacity,
          animationDelay: block.animationDelay + 's',
          animationDuration: block.animationDuration + 's',
          animationName: 'rise-up',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        };
      },
    },
  };
  </script>
  
  <style>
  @keyframes rise-up {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    100% {
      transform: translateY(-100vh) rotate(360deg); /* 向上移动一个完整的视窗高度，同时旋转360度 */
    }
  }
  </style>
  