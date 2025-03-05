<template>
    <h2 class="text-center py-3 text-2xl text-gray-800 font-semibold my-5">Öğrenci Not Formu</h2>
    <div class="border border-slate-200 px-5 py-3 mb-5 mx-12">
        <form @submit.prevent="" class="grid grid-cols-5 text-sm gap-x-3">
            <div class="flex justify-start items-center gap-x-2">
                <label class="font-bold" for="no">No:</label>
                <input value="" v-model="id" type="text" class="w-full border border-slate-200 px-2 py-1"
                    placeholder="Öğrenci No">
            </div>
            <div class="flex justify-start items-center gap-x-2">
                <label class="font-bold" for="fullName">Ad/Soyadı:</label>
                <input value="" v-model="fullName" type="text" class="w-full border border-slate-200 px-2 py-1"
                    placeholder="Öğrenci Adı Soyadı">
            </div>
            <div class="flex justify-start items-center gap-x-2 text-nowrap">
                <label class="font-bold" for="note_1">1. Notu:</label>
                <input value="" v-model="note_1" type="text" class="w-full border border-slate-200 px-2 py-1"
                    placeholder="1. Notu">
            </div>
            <div class="flex justify-start items-center gap-x-2 text-nowrap">
                <label class="font-bold" for="note_2">2. Notu:</label>
                <input value="" v-model="note_2" type="text" class="w-full border border-slate-200 px-2 py-1"
                    placeholder="2. Notu">
            </div>
            <button @click="collectData()"
                class="bg-sky-600 w-full text-white font-semibold rounded-lg active:outline active:outline-4 outline-sky-600/50 outline-offset-2 cursor-pointer">Ekle</button>
        </form>
    </div>
    <div class="relative overflow-x-auto border border-1 border-slate-200 mx-12">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-slate-200">
                <tr>
                    <th scope="col" class="px-6 py-3"> # </th>
                    <th scope="col" class="px-6 py-3"> No </th>
                    <th scope="col" class="px-6 py-3"> Adı Soyadı </th>
                    <th scope="col" class="px-6 py-3"> Not-1 </th>
                    <th scope="col" class="px-6 py-3"> Not-2 </th>
                    <th scope="col" class="px-6 py-3"> Ortalama </th>
                    <th scope="col" class="px-6 py-3"> Durumu </th>
                    <th scope="col" class="px-6 py-3"> Sil </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(student, index) in students" :key="index"
                    class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ index + 1 }} </td>
                    <td class="px-6 py-3"> {{ student.id }} </td>
                    <td class="px-6 py-3"> {{ student.fullName }} </td>
                    <td class="px-6 py-4"> {{ student.note_1 }} </td>
                    <td class="px-6 py-4"> {{ student.note_2 }} </td>
                    <td class="px-6 py-4"> {{ calAverage(student) }} </td>
                    <td class="px-6 py-4">
                        <button class="text-white py-2 px-5 rounded-md font-semibold cursor-pointer text-xs"
                            :class="defineStatuClass(student)">
                            {{ defineStatuText(student) }}
                        </button>
                    </td>
                    <td class="px-6 py-4"> <button @click="deleteRow(student.id)"
                            class="text-gray-500 border border-gray-300 py-2 px-5 rounded-md font-semibold cursor-pointer">
                            <TrashSVG />
                        </button> </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import TrashSVG from './TrashSVG.vue';
export default {
    name: 'NoteForm',
    emits: ['addNewStudent', 'deleteStudent'],
    data() {
        return {
            id: null,
            fullName: null,
            note_1: null,
            note_2: null
        }
    },
    components: {
        TrashSVG
    },
    props: {
        students: {
            type: Object,
            required: true
        }
    },
    methods: {
        calAverage(current) {
            return ((current.note_1 + current.note_2) / 2);
        },
        defineStatuClass(current) {
            const avg = this.calAverage(current);
            return avg > 50 ? 'bg-green-500' : 'bg-red-500';
        },
        defineStatuText(current) {
            const avg = this.calAverage(current);
            return avg > 50 ? 'Geçti' : 'Kaldı';
        },
        clear() {
            this.id = ''
            this.fullName = ''
            this.note_1 = ''
            this.note_2 = ''
        },
        collectData() {
            const data = {
                id: this.id,
                fullName: this.fullName,
                note_1: Number(this.note_1),
                note_2: Number(this.note_2)
            }
            this.$emit("addNewStudent", data)
            this.clear()
        },
        deleteRow(id) {
            this.$emit("deleteStudent", id)
        }
    }
}
</script>