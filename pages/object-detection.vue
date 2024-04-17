<script setup>
definePageMeta({
  layout: 'identification',
  title: 'Object Detection',
})
</script>
<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="图像识别模块">
      </UDashboardNavbar>

      <!-- 标题卡片 -->
      <div class="mb-8">
        <ULandingCard title="图像识别模块" description="图像识别模块是一种基于人工智能和机器学习技术的应用程序，旨在识别和理解图像中的对象、场景或模式。通过分析输入的图像数据，该模块能够自动识别其中包含的信息，并进行分类、检测或分割等操作，从而实现对图像内容的深入理解和处理。" icon="i-heroicons-swatch" color="blue-500"
          orientation="horizontal">
          <img src="https://picsum.photos/640/360?grayscale" class="w-full h-64 object-cover rounded-md" />
        </ULandingCard>
      </div>

      <!-- 功能网格 -->
      <div class="grid grid-cols-12 gap-4">
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-swatch" title="车辆识别" description="车辆识别模块是一种基于图像处理和深度学习技术的应用程序，旨在自动识别和分类图像中的各种车辆类型和品牌。通过分析输入的图像或视频流，该模块能够准确地检测车辆并进行分类，包括汽车、卡车、摩托车等，为交通管理、智能停车、车辆追踪等场景提供重要的数据支持。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-wrench-screwdriver" title="商品识别" description="商品识别模块是一种用于识别和分类图像中商品的应用程序，具有广泛的应用场景，包括智能零售、电子商务、物流管理等。通过分析商品图像，该模块能够识别商品的品牌、型号、价格等信息，并实现自动化的库存管理、商品推荐和订单处理，提高了零售业务的效率和精准度。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-face-smile" title="文件封识别" description="文件封识别模块是一种用于自动识别和分类文档封面的应用程序，可应用于文档管理、图书馆管理、档案管理等领域。通过分析文档图像的封面信息，该模块能够识别文档的类型、标题、作者等关键信息，实现文档的快速检索、归档和管理，提高了工作效率和文档管理的准确性。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-computer-desktop" title="宠物识别" description="宠物识别模块是一种用于识别和分类宠物图像的应用程序，可用于宠物领养、寻找失踪宠物、宠物健康监测等方面。通过分析宠物图像，该模块能够识别宠物的种类、品种、年龄等信息，并提供相关的健康建议、营养指导等，为宠物主人提供更好的宠物护理和管理服务。" />
      </div>

    </UDashboardPanel>
  </UDashboardPage>
</template>