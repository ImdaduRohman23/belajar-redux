import axios from "axios";

export const GET_LIST_KONTAK = 'GET_LIST_KONTAK';

export const getListKontak = () => {
    console.log('2. Masuk action')
    return (dispatch) => {

        //loading
        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMassage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'http://localhost:3000/kontaks',
            timeout: 120000
        })
            .then((response) => {
                //berhasil get API
                console.log('3. Berhasil dapat data', response.data)
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMassage: false
                    }
                })
            })
            .catch((error) => {
                //gagal get API
                console.log('3. Gagal dapat data')
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMassage: error.message
                    }
                })
            })
    }
}