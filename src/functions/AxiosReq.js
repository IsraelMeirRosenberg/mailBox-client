import axios, { Axios } from "axios";
import React from 'react'

export default async function AxiosReq(url, meth, data) {
    return await axios({
        method: meth,
        url: `http://localhost:3003/${url}`,
        data
    })


}

