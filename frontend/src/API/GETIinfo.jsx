import axios from 'axios'
export default class PostService{
    static async getAll(){
        const response = await axios.get('http://127.0.0.1:8000/', {
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response;
    }
}