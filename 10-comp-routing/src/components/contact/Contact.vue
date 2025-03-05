<script>
import { onBeforeRouteLeave } from 'vue-router';

export default {
    setup() {
        onBeforeRouteLeave((to, from) => {
            const c = window.confirm('Sayfadan çıkılsın mı?')
            if (!c) { return false }
        })
    },
    beforeRouteEnter() {
        const isAnonymous = false // Burada gerçek auth kontrolü olmalı
        if (isAnonymous) {
            return '/'
        }
    }
}
</script>

<template>
    <div class="p-10 grid grid-cols-12">
        <div class="md:col-span-9 col-span-12">
            <h4 class="text-2xl font-semibold">İletişim</h4>
            <form class="grid grid-cols-12 gap-y-3 gap-x-5 border-t border-t-slate-200 my-5 py-5">
                <div class="col-span-6">
                    <label class="font-semibold">Adı</label>
                    <input
                        class="border block w-full border-slate-200 p-2 rounded-lg focus:outline-4 outline-offset-2 outline-sky-600/50 mt-3"
                        type="text">
                </div>
                <div class="col-span-6">
                    <label class="font-semibold">Soyadı</label>
                    <input
                        class="border block w-full border-slate-200 p-2 rounded-lg focus:outline-4 outline-offset-2 outline-sky-600/50 mt-3"
                        type="text">
                </div>
                <div class="col-span-12">
                    <label class="font-semibold">Email</label>
                    <input
                        class="border block w-full border-slate-200 p-2 rounded-lg focus:outline-4 outline-offset-2 outline-sky-600/50 mt-3"
                        type="text">
                </div>
                <div class="col-span-12">
                    <label class="font-semibold">Konu</label>
                    <textarea
                        class="border block w-full border-slate-200 p-2 rounded-lg focus:outline-4 outline-offset-2 outline-sky-600/50 mt-3"></textarea>
                </div>

                <div
                    class="col-span-12 active:outline-4 outline-offset-2 outline-sky-600/50 my-5 border-t border-t-slate-200 my-5 py-5">
                    <button class="px-3 py-2 text-white bg-sky-600 rounded-md cursor-pointer w-full">Gönder</button>
                </div>
            </form>
        </div>
        <div class="md:col-span-3 col-span-12">

        </div>
    </div>
</template>