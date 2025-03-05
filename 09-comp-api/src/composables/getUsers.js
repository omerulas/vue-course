import axios from 'axios';
import { reactive } from 'vue';

function getUsers() {

    const data = reactive({
        users: [],
        loading: true
    })

    const loadUsers = async () => {
        try {

            const response = await axios.get('http://localhost:3000/users')
            data.users = response.data
            data.loading = false

        } catch (err) {

            data.loading = false
        }
    }

    return { data, loadUsers }
}

export default getUsers