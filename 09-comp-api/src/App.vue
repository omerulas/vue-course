<template>
    <div class="flex flex-col justify-between h-screen">
        <app-header />
        <!-- <div>
        <Person :name="data.name" :lastName="data.lastName" :personAge="data.age" @update-lastname="updateLastname" />
        <button @click="updateName">Adını Güncelle</button>
    </div> -->
        <!-- <StudentScore>

        <template v-slot="ogrenciListem">
            <h4>Slot Header: Öğrenci Listem</h4>
            <ul>
                <li v-for="(student, index) in students" :key="index">{{ student.name }} => {{ student.point }}</li>
            </ul>
        </template>

</StudentScore> -->

        <div class="container">
            <div>
                <button class="btn btn-primary me-4" @click="activeComp = Users">Kullanıcılar</button>
                <button class="btn btn-secondary" @click="activeComp = AddUser">Kullanıcı Ekle</button>
            </div>
            <div>
                <component :is="activeComp" />
            </div>
        </div>


        <!-- <ContactForm/>
    <LifeCycle v-if="showComponent" /> -->
        <Footer />
    </div>
</template>

<script setup>
import { ref, reactive, provide, shallowRef } from 'vue';
import Footer from '@/components/Fixed/Footer.vue';
// import Person from '@/components/UserInformation/Person.vue';
// import Students from '@/components/Students/Students.vue';
// import StudentScore from '@/components/Students/StudentScore.vue';
// import LifeCycle from './components/Cycle/LifeCycle.vue';
// import ContactForm from './components/Contact/ContactForm.vue';
import Users from './components/User/Users.vue';
import AddUser from './components/User/AddUser.vue';

const activeComp = shallowRef(Users)

// const name = ref('Ömer') // Baslangic degeri alabilir

const data = reactive({
    name: 'Ömer',
    lastName: 'Ulaş',
    age: 25
})

const students = reactive([{
    id: 1,
    name: 'Fethi',
    point: 85
},
{
    id: 2,
    name: 'Feyzullah',
    point: 80
}
])


const updateName = () => {
    data.name = 'Fauk'
}

const updateLastname = (lastname) => {
    data.lastName = lastname
}

const updateStudent = () => {
    students[0].point = 75
}

provide('students', { students, updateStudent })

const showComponent = ref(true)
setTimeout(() => {
    showComponent.value = !showComponent.value
}, 1000)
</script>

<style scoped></style>