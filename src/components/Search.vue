<template>
  <div class="search-box">
    <input
      type="text"
      class="input-search"
      placeholder="English Word.."
      v-model="inputWord"
      @keyup.enter="fetchData(inputWord)"
    />
  </div>
</template>

<script>
import axios from "axios";
const DICTIONARY_API_ENDPOINT =
  "https://api.dictionaryapi.dev/api/v2/entries/en/";
export default {
  data() {
    return {
      inputWord: "",
    };
  },
  methods: {
    async fetchData(word) {
      try {
        const response = await axios.get(DICTIONARY_API_ENDPOINT + word);
        this.$emit("get-data-from-search", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>

<style>
.search-box {
  width: fit-content;
  height: fit-content;
}
.input-search {
  height: 50px;
  width: 300px;
  padding: 10px;
  padding-right: 40px;
  border-style: none;
  box-shadow: 0 1px 4px rgba(200, 200, 200, 0.26);
  outline: none;
  color: #fff;
  background-color: transparent;
  font-size: 18px;
  letter-spacing: 1px;
}
.input-search::placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 100;
}

.input-search:focus {
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
</style>
