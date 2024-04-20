import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TableComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/1');
        console.log('Response data:', response.data);
        setData(response.data); // Directly set the response data to the state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            <tr>
              <td>{data.column1}</td>
              <td>{data.column2}</td>
            </tr>
          ) : (
            <tr>
              <td colSpan="2">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
