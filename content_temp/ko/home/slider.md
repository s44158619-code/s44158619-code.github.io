---
widget: blank
headless: true
weight: 8
title: "사진"
subtitle: "최근에 본 인상적인 이미지"
---

<div class="slider-container" style="max-width:900px;margin:auto;overflow:hidden;">
  <div class="slider" style="display:flex;animation:slide 12s infinite;">
    <img src="https://source.unsplash.com/featured/?ai" style="width:100%;">
    <img src="https://source.unsplash.com/featured/?coding" style="width:100%;">
    <img src="https://source.unsplash.com/featured/?motivation" style="width:100%;">
  </div>
</div>

<style>
@keyframes slide {
  0% { transform: translateX(0%); }
  33% { transform: translateX(-100%); }
  66% { transform: translateX(-200%); }
  100% { transform: translateX(0%); }
}
</style>
