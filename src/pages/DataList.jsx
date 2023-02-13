import React, { useEffect, useState } from 'react';

export const DataList = () => {
  const [currencies, setCurrencies] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const url = 'https://api.coinbase.com/v2/currencies';
    fetch(url, { method: 'GET' })
      .then(data => data.json())
      .then((ccy) => {
        setCurrencies(ccy);
      })
      .catch(err => setError(err));
  }, []);

  return (
    <div className={'container-fluid'}>
      <div className={'d-flex flex-row flex-nowrap overflow-auto'}>
        <div className={'card m-4 p-2'}>
          <div className={'card-body h-75'}>
            <table className={'table table-bordered'}>
              <thead>
                <tr>
                  <th scope={'row'}>id</th>
                  <th scope={'row'}>name</th>
                  <th scope={'row'}>min_size</th>
                </tr>
              </thead>
              <tbody>
                {currencies.data?.map(currency => {
                  return (
                    <tr key={currency.id}>
                      <td>{currency.id}</td>
                      <td>{currency.name}</td>
                      <td>{currency.min_size}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataList;