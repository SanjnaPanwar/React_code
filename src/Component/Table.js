import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import baseUrl from '../config'
export default function Table() {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get(`${baseUrl}/get`)
      .then(function (response) {
        console.log(response)
        return response.data;
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <h1>Employe Details:</h1>
      <table className='table'>
        <tr >
          <th className='th' >SNo.</th>
          <th className='th'>FirstName</th>
          <th className='th'>LastName</th>
          <th className='th'>Company</th>
          <th className='th'>Edit</th>
          <th >Delete</th>
        </tr>

        {data.map((data, i) => {
          return (
            <tr key={i} className='tr'>
              <td className='td'>{i + 1}</td>
              <td className='td'>{data.FirstName}</td>
              <td className='td'>{data.LastName}</td>
              <td className='td'>{data.Company}</td>
              <td className='td'>
                <button>Edit</button>
              </td>
              <td className='tf'>
                <button>Delete</button>
              </td>
            </tr>
          )
        })}



      </table>
    </>
  )
}