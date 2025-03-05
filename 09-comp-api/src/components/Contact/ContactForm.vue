<script setup>
import { reactive } from 'vue';

const data = reactive({
    name: '',
    lastName: '',
    gender: 'erkek',
    email: '',
    subject: '',
    goals: [],
    message: ''
})

const submitForm = (e) => {
    console.log(data)
}

</script>

<template>
    <form @submit.prevent="submitForm" style="padding: 24px;" class="row">
        <div class="mb-3">
            <label>Ad</label>
            <input v-model="data.name" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label>Soyadı</label>
            <input v-model="data.lastName" type="text" class="form-control">
        </div>
        <div class="mb-3 d-flex gap-5">
            <div class=" form-check">
                <input v-model="data.gender" value="erkek" type="radio" class="form-check-input" name="gender">
                <label class="form-check-label">Erkek</label>
            </div>
            <div class=" form-check">
                <input v-model="data.gender" value="kadın" type="radio" class="form-check-input" name="gender">
                <label class="form-check-label">Kadın</label>
            </div>
        </div>
        <div class="mb-3">
            <label>E-posta</label>
            <input v-model="data.email" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label>Konu</label>
            <input v-model="data.subject" type="text" class="form-control">
        </div>
        <div class="mb-3 d-flex gap-5">
            <div class="form-check">
                <input v-model="data.goals" type="checkbox" value="livetrainings" class="form-check-input" name="reason">
                <label class="form-check-label">Canlı Eğitimler</label>
            </div>
            <div class="form-check">
                <input v-model="data.goals" type="checkbox" value="videotranings" class="form-check-input" name="reason">
                <label class="form-check-label">Video Eğitimler</label>
            </div>
        </div>
        <div class="mb-3">
            <label>Mesaj</label>
            <textarea v-model="data.message" class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>