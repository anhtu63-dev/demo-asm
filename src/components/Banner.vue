<template>
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://images.ctfassets.net/javen7msabdh/7LnAJNBIO50M152qrVG0Te/0ff3d986c7ea09c678e7dca58598f01f/marshall-monitor-iii-anc-and-billie-joe-armstrong.png?w=2400&fm=avif&q=100" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="https://images.unsplash.com/photo-1610041321327-b794c052db27?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="https://images.unsplash.com/photo-1567882788933-8b2899358a8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
.carousel-inner img,
.carousel-item img {
  width: 100%;
  max-height: 700px; /* shrink banner height */
  height: 700px;
  object-fit: cover; /* crop to fill while keeping aspect ratio */
}

/* Optional: slightly smaller on small screens */
@media (max-width: 576px) {
  .carousel-inner img,
  .carousel-item img {
    max-height: 200px;
    height: 200px;
  }
}
</style>