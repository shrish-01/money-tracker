/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

  async function getTransactions() {
    const url = "http://localhost:4000/api" + "/transactions";
    const response = await fetch(url);
    return await response.json();
  }

  async function addNewTransaction(ev) {
    ev.preventDefault();
    const url = "http://localhost:4000/api" + "/transaction";
    try {
      const price = name.split(' ')[0];
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          name: name.substring(price.length + 1),
          price,
          description,
          datetime
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setName('');
        setDatetime('');
        setDescription('');
        console.log('Transaction created:', data);
      } else {
        console.error('Failed to create transaction:', response.statusText);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }

  let balance = 0;
  for(const transaction of transactions) {
    balance += transaction.price;
  }

  return (
    <main>
      <h1 className={"text-5xl font-semibold text-center color-white flex justify-center " + ((balance < 0) ? "text-red-500" : "text-green-500")}>${balance}<span className='text-xs mt-1'>.00</span></h1>
      {/* The form element */}
      <form onSubmit={addNewTransaction} className='mt-6'>
        <div className="basic flex gap-2 mb-2">
          <input type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
            placeholder="+200 new Samsung TV" />
          <input type="datetime-local"
            value={datetime}
            onChange={ev => setDatetime(ev.target.value)}
          />
        </div>
        <div className="description">
          <input type="text"
            value={description}
            onChange={ev => setDescription(ev.target.value)}
            placeholder="description" />
        </div>
        <button className=" w-full mt-3 border border-gray-500 rounded-md bg-white px-2 py-1 text-black" type="submit">Add new Transaction</button>
      </form>

      {/* Transactions */}
      <div className="transactions mt-3">
        {/* Transaction 1 */}
        {transactions.length > 0 && transactions.map((transaction) => (
          // eslint-disable-next-line react/jsx-key
          <div className="transaction">
            <div className="left">
              <div className="name">{transaction.name}</div>
              <div className="description">
                {transaction.description.length > 50 ?
                  transaction.description.slice(0, 50) + "..." :
                  transaction.description
                }
              </div>
            </div>
            <div className="right">
              <div className={"price " + ((transaction.price < 0) ? "red" : "text-green-500")}>
                {transaction.price}$
              </div>
              <div className="datetime">2023-09-13 15:45</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default App
