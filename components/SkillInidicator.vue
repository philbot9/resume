<template>
  <div class="skill">
    <div class="left-col">
      <p>{{title}}</p>
      <small>{{subtitle}}</small>
    </div>

    <div class="right-col">
      <b-progress :value="value" type="is-info" size="is-large" show-value>{{level}}</b-progress>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillIndicator',
  props: ['title', 'subtitle', 'value', 'level']
}
</script>

<style scoped>
.skill {
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
}

.left-col,
.right-col {
  width: 50%;
}

.skill p {
  font-weight: bold;
}

.skill small {
  font-size: 10pt;
}
</style>