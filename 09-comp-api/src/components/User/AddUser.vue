<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';

const user = reactive({
    name: '',
    lastName: ''
})

const loading = ref(true)

const submitForm = async () => {
    await axios({
        method: 'POST',
        url: 'http://localhost:3000/users',
        data: JSON.stringify(user)
    }).then(() => {
        loading.value = false
    }).catch(err => { console.log(err) }).finally(() => {
        loading.value = false
    })
}

</script>
<template>
    <div v-if="loading">
        <app-loading />
    </div>
    <div class="my-10">
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label class="form-label">Ad</label>
                <input type="text" v-model="user.name" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Soyadı</label>
                <input type="text" v-model="user.lastName" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Kaydet</button>
        </form>
    </div>
</template>