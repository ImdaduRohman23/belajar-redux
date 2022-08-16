import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListKontak } from '../../actions/kontakAction';

const ListKontak = () => {
    const {getListKontakResult, getListKontakLoading, getListKontakError} = useSelector((state) => state.KontakReducers)
    const dispatch = useDispatch();

    useEffect(() => {

        //get list kontak
        console.log('1. Use effect')
        dispatch(getListKontak());
    }, [dispatch])
    return (
        <div>
            <h4>List Kontak</h4>
            {getListKontakResult ? (
                getListKontakResult.map((kontak) => {
                    return (
                        <p key={kontak.id}>{kontak.nama}</p>
                    )
                })
            ) : getListKontakLoading ? (
                <p>loading</p>
            ) : (
                <p>{getListKontakError ? getListKontakError : 'data ksong'}</p>
            )}
        </div>
    )
}

export default ListKontak
