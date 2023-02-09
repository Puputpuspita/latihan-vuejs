<script setup>
const { fullName } = defineProps({
    fullName: String,
})
</script>

<template>
    <div>
        <div v-if="fullName.length > 1">
            <p>Halo nama saya : {{ fullName }}</p>
        </div>
        <div v-else>
            <p>Silahkan isi nama anda</p>
        </div>
    </div>
</template>