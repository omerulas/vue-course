<template>
    <div class="px-12 my-5">
        <h2 class="text-gray-700 font-semibold my-5 text-center text-2xl">Form Projesi</h2>
        <form @submit.prevent="handleSubmit()"
            class="lg:max-w-2xl max-w-3xl mx-auto bg-orange-100 rounded-lg px-16 text-left py-5">
            <label class="font-semibold py-3 block">Email:</label>
            <input v-model="email" type="email"  class="block bg-white w-full px-3 py-2">
            <label class="font-semibold py-3 block">Şifre:</label>
            <input v-model="password" type="password"  class="block bg-white w-full px-3 py-2">
            <div class="py-2 text-red-500 font-semibold" v-if="passwordError">
                {{ passwordError }}
            </div>
            <label class="font-semibold py-3 block">Cinsiyet:</label>
            <select v-model="gender" class="block w-full px-3 py-2 bg-white">
                <option value="male">Erkek</option>
                <option value="female">Kadın</option>
            </select>
            <label class="font-semibold py-3 block">Bildiğiniz Diller:</label>
            <input @keyup="addSkill($event)" v-model="skill" type="text" class="block bg-white w-full px-3 py-2">
            <div class="px-3 py-2 bg-white text-gray-800 mx-1 my-2 font-semibold inline-block rounded-md cursor-pointer active:outline active:outline-2 outline-sky-600/50"
                v-for="(skill, index) in skills" :key="index" @click="deleteSkill(skill)">
                <span>{{ skill }}</span>
            </div>
            <div class="flex justify-start items-center gap-x-3 my-3">
                <input v-model="term" class="w-4 h-4 border-0 outline-0" type="checkbox" required>
                <label class="font-semibold py-3 block">Kullanım koşullarını kabul ediyorum</label>
            </div>
            <button type="submit" class="w-full bg-green-600 font-semibold text-white py-2">Kaydol</button>
        </form>
        {{ email }}
        {{ password }}
        {{ gender }}
        {{ skill }}
        {{ term }}
    </div>
</template>
<script>
export default {
    name: 'SignUpForm',
    data() {
        return {
            email: '',
            password: '',
            gender: '',
            term: false,
            skill: '',
            skills: [],
            passwordError: null
        }
    },
    methods: {
        addSkill(e) {
            if (e.key == 'Enter' && this.skill) {
                e.preventDefault()
                if (!this.skills.includes(this.skill)) {
                    this.skills.push(this.skill)
                }
                this.skill = ''
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter(item => item !== skill)
        },
        handleSubmit() {
            this.passwordError = this.password.length > 5 ? '' : 'Minimum 6 karakterli şifre girin.'
            console.log('Email: ', this.email)
            console.log('Password: ', this.password)
            console.log('Gender: ', this.gender)
            console.log('Term: ', this.term)
            console.log('Skills: ', this.skills)
        }
    },
}
</script>
<style></style>