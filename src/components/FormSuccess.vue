<template>
  <div class="success">
    <!-- <div @click="this.formActive = true">Powrót</div> -->
    <div class="success-container">
      <SuccessIcon color="#62b762" class="success-image" />
      <p class="success-title">We got it!</p>
      <!-- eslint-disable max-len -->
      <p class="success-text">Your README.md file was generated successfully.</p>
      <p class="success-text">Click the button below and download your file.</p>
    </div>
    <div class="success-container success-container_code">
      <div class="success-buttonsRow">
        <button class="button"><span class="button-icon fas fa-cloud-download-alt" aria-hidden="true"></span>Download</button>
        <button class="button button-secondary">I want to copy</button>
      </div>
      <p class="success-code">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta rem dolorem numquam perspiciatis unde, doloribus quo omnis dignissimos aliquid culpa nobis qui fuga assumenda non voluptatibus quidem, iste quia! Accusantium.
      Quas deleniti nam dolorum doloribus, blanditiis reprehenderit ipsam modi mollitia officiis praesentium tempora, eum, ratione alias minima dolores magni ut. Blanditiis in excepturi deserunt eos error consequatur modi esse est.
      Reiciendis et consequuntur voluptas eligendi quod accusantium assumenda sit repudiandae? Perspiciatis ipsa tempore commodi explicabo et cupiditate unde molestias repellendus, quam, provident nisi alias ipsam, sed nihil voluptatem earum nobis.
      Tenetur ex, earum quas similique exercitationem illo dolore asperiores. Facilis autem beatae, ut et fuga sequi quisquam officia minima tempora fugiat quos perspiciatis nam soluta voluptate maiores consequatur. Nulla, qui.
      Est perferendis debitis asperiores distinctio. Asperiores expedita distinctio libero soluta eos molestiae rerum blanditiis recusandae! Inventore placeat iste exercitationem, dolorum doloremque quaerat minima, quod voluptate quas accusantium pariatur possimus quibusdam?
      Perferendis minima hic temporibus tempora corrupti nihil quasi necessitatibus totam voluptas doloremque dignissimos, iste fugiat magnam doloribus voluptatibus itaque dolorem rerum qui id architecto suscipit? Illum quas deleniti molestiae consequuntur?
      Magni ratione unde suscipit id, nisi fuga quas dicta, eos et nihil perferendis reprehenderit quisquam! Nostrum fugit veniam facilis nisi deserunt nobis hic repudiandae quis neque molestias? Inventore, nulla veniam.
      Iure reiciendis perferendis enim repudiandae porro culpa debitis ipsum, tempora quis ab cupiditate eaque explicabo minus ipsa aut rerum consectetur omnis at nobis molestias est reprehenderit nulla. Architecto, aut pariatur?
      Dignissimos, dolorum veritatis cumque harum minima veniam quas corporis officiis vero corrupti nam quis pariatur voluptatem sapiente maiores debitis nesciunt inventore aspernatur! Quo cumque itaque culpa doloremque rerum nihil nobis.
      Optio autem quod in fuga, sunt voluptatem. Tempora quas ad ullam corrupti, minus deleniti atque blanditiis adipisci aspernatur vel maxime ea quis libero. Labore similique expedita et illo, dolore illum?</p>
    </div>

    <div class="success-footer footer">Generated with 💚 by <a class="footer-link" target="_blank" href="https://github.com/kstawinski/readme-generator">README Generator</a></div>
  </div>
</template>

<script>
import SuccessIcon from '@/components/SuccessIcon.vue';

export default {
  name: 'FormSuccess',
  components: { SuccessIcon },
};
</script>

<style lang="scss" scoped>
.success {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  padding: 70px 0;

    &-container {
      text-align: center;
    }
    &-image {
      max-width: 70px;
    }
    &-title {
      margin: 20px 0;
      color: #62b762;
      font-size: 35px;
      font-weight: 300;
    }
    &-text {
      line-height: 1.5;
      color: #565656;
    }
    &-code {
      max-width: 600px;
      margin: 0 auto 30px auto;
      line-height: 1.65;
      background: #f3f3f3;
      padding: 30px;
      border-radius: 3px;
      box-sizing: border-box;
      color: #4a4a4a;
      font-family: monospace;
      font-size: 14px;
      text-align: left;
    }
    &-buttonsRow {
      margin: 30px auto;
    }
}
.button {
  background: #62b762;
  border: 1px solid #62b762;
  color: #fff;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  padding: 10px 18px;
  border-radius: 3px;
  transition: .3s all;

    &:not(:last-child) {
      margin-right: 10px;
    }
    &:hover {
      background: #fff;
      color: #62b762;
    }
    &-secondary {
      background: #fff;
      color: #62b762;

        &:hover {
          background: #62b762;
          color: #fff;
        }
    }
    &-icon {
      margin-right: 8px;
    }
}
.footer {
  text-align: center;
  font-size: small;
  color: gray;
  margin: 50px 0;

    &-link {
      color: #62b762;
    }
    &-icon {
      margin-right: 3px;
    }
}
</style>
