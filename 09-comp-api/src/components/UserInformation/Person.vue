<template>
    <div>
        Adı:{{ name }} - Soyadı: {{ lastName }}
        yaş: {{ personAge }}
    </div>
    <button @click="updateLastName">Soyadını Güncelle</button>
</template>
<script setup>
const emits = defineEmits(['update-lastname'])

const props = defineProps({
    name: {
        type: String,
        required: true,
        default: 'Yavuz'
    },
    lastName: String,
    personAge: {
        type: Number,
        required: true,
        validator: value => value >= 25 ? true : false
    }
})

const updateLastName = () => {
    // props.lastName = 'Öztürk' => Set operation on key "lastName" failed: target is readonly.
    emits('update-lastname', 'Karasu')
}

</script>
