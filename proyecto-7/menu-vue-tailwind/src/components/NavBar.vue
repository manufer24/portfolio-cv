<script>
import { RouterLink, RouterView } from "vue-router";
import DarkMode from "./DarkMode.vue";

export default {
  components: { DarkMode },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      dropMobile: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();

    document.addEventListener("click", (e) => {
      if (e.target.closest("#drop-desktop-btn")) return;
      if (e.target.closest("#drop-mobile-btn")) return;

      this.closeDropMenu();
    });
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
      this.dropMobile = false;
    },

    toggleDropMenu() {
      this.dropMobile = !this.dropMobile;
    },

    closeDropMenu() {
      this.dropMobile = false;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 768) {
        this.mobile = true;
        this.dropMobile = true;
        return;
      }

      this.mobile = false;
      this.mobileNav = false;
      this.dropMobile = false;
      return;
    },
  },
};
</script>

<template>
  <header class="fixed h-20 w-full bg-white-400 dark:bg-gray-900 z-50">
    <div class="flex justify-between h-20 px-2.5 items-center max-w-7xl m-auto">
      <div class="order-2 lg:order-1">
        <h3>
          <RouterLink
            :to="{ name: 'home' }"
            class="text-2xl text-black-200 dark:text-white-200 order-2 font-bold lg:text-3xl md:order-1 lg:order-1 lg:hover:text-green-500 transition duration-300"
            >Logo</RouterLink
          >
        </h3>
      </div>

      <!--************************** mobile-view **************************-->
      <Transition>
        <nav
          class="fixed top-0 left-0 h-screen w-64 flex flex-col justify-between z-30 ml-0"
          v-show="mobileNav"
        >
          <ul
            class="w-full h-full flex flex-col justify-center items-center bg-white-300 dark:bg-gray-700 translate-x-0"
            v-show="mobileNav"
          >
            <li>
              <RouterLink
                :to="{ name: 'home' }"
                class="flex items-center justify-center py-2.5 px-5 text-black-200 dark:text-white-200 text-xl translate-y-0 opacity-100 font-bold"
                @click="toggleMobileNav"
                >Home</RouterLink
              >
            </li>

            <li>
              <RouterLink
                :to="{ name: 'about' }"
                class="flex items-center justify-center py-2.5 px-5 text-black-200 dark:text-white-200 text-xl font-bold"
                @click="toggleMobileNav"
                >About</RouterLink
              >
            </li>

            <li>
              <div
                id="drop-mobile-btn"
                class="flex items-center justify-center py-2.5 px-5 text-black-200 dark:text-white-200 text-xl relative cursor-pointer font-bold"
                @click="toggleDropMenu"
              >
                downdown

                <div class="relative -right-0.5 mt-1 ml-1 w-4 h-4">
                  <div
                    class="ml-0 absolute bg-black-200 dark:bg-white-200 w-2.5 h-1 rotate-45 top-2/4 -translate-y-2/4"
                  ></div>
                  <div
                    class="absolute bg-black-200 dark:bg-white-200 w-2.5 h-1 -rotate-45 top-2/4 right-0.5 -translate-y-2/4"
                  ></div>
                </div>
              </div>

              <Transition name="drop">
                <ul
                  class="px-4 ml-5 py-2 border-l-2 mt-0 border-black-200 dark:border-white-200"
                  v-show="dropMobile"
                >
                  <li class="text-black-200 dark:text-white-200 py-1 text-xl">
                    Item-1
                  </li>
                  <li class="text-black-200 dark:text-white-200 py-1 text-xl">
                    Item-2
                  </li>
                  <li class="text-black-200 dark:text-white-200 py-1 text-xl">
                    Item-3
                  </li>
                </ul>
              </Transition>
            </li>

            <li>
              <RouterLink
                :to="{ name: 'contact' }"
                class="flex items-center justify-center py-2.5 px-5 text-black-200 dark:text-white-200 text-xl font-bold"
                @click="toggleMobileNav"
                >Contact</RouterLink
              >
            </li>
          </ul>
        </nav>
      </Transition>

      <!-- **************************desktop-view **************************-->
      <Transition>
        <nav class="h-20 w-2/5 md:order-2" v-show="!mobile">
          <ul class="flex items-center justify-around h-20">
            <li class="text-black-200 dark:text-white-200 text-xl">
              <RouterLink
                :to="{ name: 'home' }"
                class="hover:text-green-500 transition duration-300 font-bold"
                >Home</RouterLink
              >
            </li>

            <li class="text-black-200 dark:text-white-200 text-xl">
              <RouterLink
                :to="{ name: 'about' }"
                class="hover:text-green-500 transition duration-300 font-bold"
                >About</RouterLink
              >
            </li>

            <li>
              <div
                id="drop-desktop-btn"
                class="relative flex items-center justify-center text-black-200 dark:text-white-200 text-xl relative cursor-pointer hover:text-green-500 transition duration-300 font-bold"
                @click="toggleDropMenu"
              >
                downdown

                <div class="relative -right-0.5 mt-1 ml-1 w-4 h-4">
                  <div
                    class="ml-0 absolute bg-black-200 dark:bg-white-200 w-2.5 h-1 rotate-45 top-2/4 -translate-y-2/4"
                  ></div>
                  <div
                    class="absolute bg-black-200 dark:bg-white-200 w-2.5 h-1 -rotate-45 top-2/4 right-0.5 -translate-y-2/4"
                  ></div>
                </div>
              </div>

              <Transition name="drop">
                <ul
                  class="absolute bg-white-300 dark:bg-gray-700 px-6 ml-5 py-2 -ml-1 rounded-xl shadow-xl"
                  v-show="dropMobile"
                >
                  <li class="text-black-200 dark:text-white-200 py-1 text-xl">
                    <a
                      href="/index.html"
                      class="hover:text-green-500 transition duration-300"
                      >drop-Item-1</a
                    >
                  </li>
                  <li class="text-black-200 dark:text-white-200 py-1 text-xl">
                    <a
                      href="#"
                      class="hover:text-green-500 transition duration-300"
                      >drop-Item-2</a
                    >
                  </li>
                  <li class="text-black-200 dark:text-white-200 py-1 text-xl">
                    <a
                      href="#"
                      class="hover:text-green-500 transition duration-300"
                      >drop-Item-3</a
                    >
                  </li>
                </ul>
              </Transition>
            </li>

            <li
              class="text-black-200 dark:text-white-200 text-xl hover:text-green-500 transition duration-300"
            >
              <RouterLink
                :to="{ name: 'contact' }"
                class="hover:text-green-500 transition duration-300 font-bold"
                >Contact</RouterLink
              >
            </li>
          </ul>
        </nav>
      </Transition>

      <Transition>
        <div
          class="fixed inset-0 bg-gray-800/70 z-20 transition-all duration-500"
          v-show="mobileNav"
          @click="toggleMobileNav"
        ></div>
      </Transition>

      <!-- ************************* Dark Mode Btn **************************-->

      <button class="w-10 h-10 rounded-lg bg-green-500 order-3 lg:order-3">
        <DarkMode />
      </button>

      <!-- ************************* Menu Btn **************************-->
      <button
        v-show="mobile"
        @click="toggleMobileNav"
        class="w-10 h-10 p-0 cursor-pointer order-1"
      >
        <div
          class="h-1 w-11/12 block rounded bg-black-200 dark:bg-white-200"
        ></div>
        <div
          class="h-1 w-11/12 my-1 block rounded bg-black-200 dark:bg-white-200"
        ></div>
        <div
          class="h-1 w-11/12 my-1 block rounded bg-black-200 dark:bg-white-200"
        ></div>
      </button>
    </div>
  </header>
</template>

<style scoped>
/* nav transition */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease, margin-left 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  margin-left: -256px;
}

/* drop-links transitions */

.drop-enter-active,
.drop-leave-active {
  transition: opacity 0.5s ease, margin-top 0.4s ease;
}

.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  margin-top: -10px;
}
</style>
