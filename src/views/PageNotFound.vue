<template>
  <div class="col-full" :class="$style.centered">
    <h1 :class="$style.heading_large">Not found</h1>
    <p :class="$style.text_large">Oops! There is nothing here!</p>
    <p :class="$style.text_large">Or is it?</p>
    <p :class="$style.text_large">...</p>
    <br />
    <div :class="$style.go_home_link">
      <router-link :class="$style['go_home_link--link']" :to="{ name: 'home' }"
        >Just go home! Fucker!</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
};
</script>

<style module scoped lang="scss">
.centered {
  text-align: center;
}

.heading_large {
  font-size: 100px;
}

.text_large {
  font-size: 50px;
  font-weight: lighter;
}
.mistery {
  color: orangered;
  animation: 3s ease 2s normal forwards infinite mistery_animation;
}

@keyframes mistery_animation {
  0% {
    opacity: 0.15;
  }
  50% {
    opacity: 1;
  }

  75% {
    opacity: 0.25;
  }

  100% {
    opacity: 1;
  }
}

.go_home_link {
  display: block;
  text-align: center;

  &--link {
    padding: 10px 20px;
    background-color: #1d2b43;
    color: white;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 3px;

    &hover {
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
    }
  }
}
</style>
