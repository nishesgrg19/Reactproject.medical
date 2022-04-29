import React from 'react'

export default function Jsondata
() {
    const array=[
        {id:1,Pname:'Product1',img:'https://hamrobazaar.obs.ap-southeast-3.myhuaweicloud.com/User/Posts/2022/4/2/360c2bdb-19de-471d-90e2-2eaf5227a0de.webp?x-image-process=image/resize,m_lfit,h_300,w_300'},
        {id:2,Pname:'Product2',img:'https://hamrobazaar.obs.ap-southeast-3.myhuaweicloud.com/User/Posts/2022/4/5/4dc4a566-a8c6-49e9-bfab-446cb22a4644.jpg?x-image-process=image/resize,m_lfit,h_300,w_300'},
        {id:3,Pname:'Product3',img:'https://hamrobazaar.obs.ap-southeast-3.myhuaweicloud.com/User/Posts/2022/4/3/8db89813-9711-45ef-a342-a94b9cce5282.webp?x-image-process=image/resize,m_lfit,h_300,w_300'},
        {id:4,Pname:'Product4',img:'https://hamrobazaar.obs.ap-southeast-3.myhuaweicloud.com/User/Posts/2022/4/7/a3ce8931-68c7-405b-8e3a-c6da6903c146.webp?x-image-process=image/resize,m_lfit,h_300,w_300'},
    ]
    const listitem=array.map((data)=>
        <div className='col-lg-3'>
            <h5>{data.id}</h5>
            <p>{data.Pname}</p>
            <img src={data.img} alt='' />
        </div>
    )
return (
    <div className='row'>
     {listitem}
    </div>
  )
}
