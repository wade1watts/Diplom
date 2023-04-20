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

    static async getById(id){
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/marker/${id}/`,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response;
    }

    // static async postById(inputValue){
    //     const response = await axios.post(`http://127.0.0.1:8000/api/v1/update/marker/$`,{
    //         method:'POST',
    //         params: {
    //             longitude: inputValue,
    //             latitude: inputValue,
    //         },
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     return response;
    // }

//     static async deliteById(id){
//         const response = await axios.put(`http://127.0.0.1:8000/${id}/`, {
//             method:'PUT'
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         return response
//     }
}
