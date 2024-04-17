<template>
    <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
      <div class="p-24 md:order-1 hidden md:block">
        <video
          class="rounded-full transition-transform transform hover:scale-125"
          autoplay
          loop
          muted
          playsinline
          loading="eager"
          width="512"
          height="512"
        >
          <source src="/assets/vid/person.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
  
      <div>
        <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight text-blue-700">
          AI智慧识别平台
        </h1>
        <p class="text-lg mt-4 text-slate-600 max-w-xl">
          AI智慧识别平台 AIdentifier 是一个先进的，可以进行多样化识别功能的平台。
          它利用深度学习和计算机视觉技术，可以实现高精度的图像识别，
          人物识别和人脸识别等功能。该平台可以应用于各种场景，如安全监控，
          智能零售，虚拟现实等，为用户提供智能，高效，便捷的识别服务。
        </p>
        <div class="mt-6 flex flex-col sm:flex-row gap-3">
          <LandingLink
            href="/identifiers"
            target="_blank"
            rel="noopener"
            class="bg-blue-600 hover:bg-blue-700"
            >Get Started</LandingLink
          >
        </div>
      </div>
    </main>
  </template>