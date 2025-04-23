<script setup lang="ts">

import api from '@/mockApi/mockAPI'
import {onMounted, ref} from "vue"; // импортируешь свой экземпляр

interface IUser {
  name: string
  specialization: string
}

const form = ref<IUser>({
  name: '',
  specialization: ''
})

onMounted(async () => {
  const response = await api.get<IUser>('/user')
  form.value = response.data
})

defineProps<{
  compact?: boolean,
  reverse?: boolean,
}>()



</script>

<template>
  <div class="user-identity"
       :class="{'user-identity__compact': compact,'reverse': reverse,}">
    <div class="user-identity--avatar">
      <img src="@/assets/image.webp"
           alt="avatar" >
    </div>
    <div class="user-identity--about">
      <h5 class="user-identity--about-name">
        {{form.name}}
      </h5>
      <div class="user-identity--about-specialization">
        {{form.specialization}}
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.user-identity
  display: flex
  align-items: center
  gap: 24px
  &--avatar
    display: flex
    align-items: center
    flex-direction: column
    height: 80px
    width: 80px
    border-radius: 100%
    background-color: black
    overflow: hidden
    img
      width: 100%
  &--about
    display: flex
    flex-direction: column
    flex-grow: 1
    gap: 8px
    &-name
      white-space: nowrap
    &-specialization
      color: var(--color-text-mute)
  &__compact
    gap: 16px
    .user-identity--avatar
      height: 60px
      width: 60px
@media (prefers-color-scheme: dark)
  .reverse
    .user-identity--about-name
      color: var(--inverse-color-text)
    .user-identity--about-specialization
      color: var(--inverse-color-text-mute)
    --color-text: var(--app-text-default)
    --color-text-mute: var(--app-inverse-text-mute)
    --color-background-soft: var(--app-background-soft)
    --color-background-mute: var(--app-background-mute)
</style>
