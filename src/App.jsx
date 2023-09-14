import './App.css';

function App() {
  return (
    <main>
      <h1 className="text-4xl font-semibold text-center color-white">$400<span>.00</span></h1>
      {/* The form element */}
      <form className='mt-6'>
        <div className="basic flex gap-2 mb-2">
          <input type="text" placeholder="+200 new Samsung TV"/>
          <input type="datetime-local"/>
        </div>
        <div className="description">
          <input type="text" placeholder="description"/>
        </div>
        <button className=" w-full mt-3 border border-gray-500 rounded-md bg-white px-2 py-1 text-black" type="submit">Add new Transaction</button>
      </form>

      {/* Transactions */}
      <div className="transactions mt-3">
        {/* Transaction 1 */}
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">latest 22 inch beast, 75Hz, Full HD display!</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
             <div className="datetime">2023-09-13 15:45</div>
          </div>
        </div>
        {/* Transaction 2 */}
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">latest 22 inch beast, 75Hz, Full HD display!</div>
          </div>
          <div className="right">
            <div className="price green">+$1500</div>
             <div className="datetime">2023-09-13 15:45</div>
          </div>
        </div>
        {/* Transaction 3 */}
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">latest 22 inch beast, 75Hz, Full HD display!</div>
          </div>
          <div className="right">
            <div className="price red">-$900</div>
             <div className="datetime">2023-09-13 15:45</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
