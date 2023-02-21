<template>
    <!-- <p>halaman tambah postingan</p> -->
    <div>
        Isi Postingan
    </div>
    <div>
        <textarea v-model="detail" rows="4" cols="50" placeholder="masukkan isi postingan.." required>
        </textarea>
    </div>
    <button @click="submit(detail)">Submit</button>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter }from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const detail = ref('');

const submit = (detail) => {
    if(detail.length > 0){
        const username = store.getters["user/getUserNames"];
        store.commit("post/addPost", {detail, username});
        router.push({ path: '/'});
    };
}
</script>