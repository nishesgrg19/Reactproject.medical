import { getDefaultNormalizer } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
export default function Employee() {
    const [data1, Setdata1] = useState([])
    async function getdata() {
        const response = await fetch('http://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        Setdata1(data)

    }

    useEffect(() => {
        getdata()

    }, [])


    return (

        <div className='container'>
            <h3 className='py-3 bg-primary text-white'>API DATA FETCHED</h3>
            <div className='row my-4 '>
                <Nav />
                {
                    data1.map((value) => {
                        return (

                            <div class="col-lg-3 py-4">

                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title bg-light">{value.name}</h5>
                                        <p class="card-text">UserName : {value.username}</p>
                                        <p>Email : {value.email}</p>
                                        <p>Adress-Street : {value.address.street}</p>
                                        <p>City : {value.address.street}</p>
                                        <p className='bg-light'>Company Name : {value.company.name}</p>

                                    </div>
                                </div>
                            </div>




                        )
                    })


                }



            </div>
        </div>
    )
}
