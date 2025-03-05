<script setup>
import { onMounted } from 'vue';
import getUsers from '@/composables/getUsers';

const { data, loadUsers } = getUsers()

loadUsers()

</script>

<template>
    <div v-if="data.loading">
        <app-loading />
    </div>
    <div v-if="!data.loading" class="row gap-3 my-5">
        <div v-for="(user, index) in data.users" :key="index" class="col-md-3">
            <div class="card" style="width: 18rem;">
                <img :src="'https://placebeard.it/300/300?' + user.id" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">
                        {{ user.name }} {{ user.lastName }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>