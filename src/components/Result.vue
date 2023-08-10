<template>
  <section class="card">
    <h2>{{ targetWord }}</h2>
    <ul>
      <li v-for="def in targetDefs">
        <span class="def_label">Def:&nbsp;&nbsp;</span>
        {{ def.definition }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    targetWord: {
      required: true,
    },
    targetDefs: {
      required: true,
    },
  },
};
</script>

<style>
.card {
  display: box;
  width: 400px;
  color: #fff;
  text-align: left;
}
.def_label {
  opacity: 70%;
  font-size: 0.9em;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  box-shadow: 0 2px 8px rgba(200, 200, 200, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: left;
  width: 90%;
  max-width: 40rem;
  line-height: 160%;
}
</style>
