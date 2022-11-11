<script>
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  helpers,
} from "@vuelidate/validators";

const requiredInput = helpers.withMessage(
  "Only acepts letters and blanks",
  (value) => RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/).test(value)
);

export default {
  name: "FormContact",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      mensaje: "",
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      name: { requiredInput },
      email: { required, email },
      subject: { requiredInput },
      mensaje: {
        minLetters: minLength(10),
        maxLetters: maxLength(255),
        requiredInput,
      },
    };
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();

      if (!isFormCorrect) return;

      alert("Form sent");
    },
  },
};
</script>
<template>
  <div class="w-full h-auto bg-white-200 dark:bg-gray-800">
    <article class="w-full py-20 flex justify-center items-center">
      <form
        @submit.prevent="submitForm"
        class="flex flex-col w-11/12 items-center m-auto bg-white-400 dark:bg-gray-900 rounded-xl py-4 mt-4 lg:w-1/2"
      >
        <h3 class="text-black-200 dark:text-white-200 font-bold text-2xl">
          Contact Form
        </h3>

        <div class="flex flex-col mt-7 w-5/6">
          <label
            class="pl-4 text-black-200 dark:text-white-200 text-lg font-bold"
            >Name <span class="text-blue-500"></span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            v-model="name"
            class="w-full p-2 rounded-xl bg-none outline-gray-500 placeholder:text-gray-700"
          />
          <p
            v-if="v$.name.$error"
            class="bg-red-600 text-white-200 py-1 pl-4 rounded mt-3 font-bold"
          >
            {{ v$.name.$errors[0].$message }}
          </p>

          <label
            class="mt-4 pl-4 text-black-200 dark:text-white-200 text-lg font-bold"
            >Email <span class="text-blue-500"></span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            v-model="email"
            class="w-full p-2 rounded-xl bg-none outline-gray-500 placeholder:text-gray-700"
          />
          <p
            v-if="v$.email.$error"
            class="bg-red-600 text-white-200 py-1 pl-4 rounded mt-3 font-bold"
          >
            {{ v$.email.$errors[0].$message }}
          </p>

          <label
            class="mt-4 pl-4text-black-200 dark:text-white-200 text-lg font-bold"
            >Subject<span class="text-blue-500"></span>
          </label>
          <input
            type="text"
            placeholder="Enter the subject"
            v-model="subject"
            class="w-full p-2 rounded-xl bg-none outline-gray-500 placeholder:text-gray-700"
          />
          <p
            v-if="v$.subject.$error"
            class="bg-red-600 text-white-200 py-1 pl-4 rounded mt-3 font-bold"
          >
            {{ v$.subject.$errors[0].$message }}
          </p>

          <label
            class="mt-4 pl-4 text-black-200 dark:text-white-200 text-lg font-bold"
            >Message<span class="text-blue-500"></span>
          </label>
          <textarea
            cols="30"
            rows="4"
            placeholder="Write your message"
            v-model="mensaje"
            class="w-full p-2 rounded-xl bg-none outline-gray-500 placeholder:text-gray-700"
          ></textarea>
          <p
            v-if="v$.mensaje.$error"
            class="bg-red-600 text-white-200 py-1 pl-4 rounded mt-3 font-bold"
          >
            {{ v$.mensaje.$errors[0].$message }}
          </p>
        </div>

        <button
          class="bg-green-500 text-white-200 py-2 px-4 mt-5 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </article>
  </div>
</template>
