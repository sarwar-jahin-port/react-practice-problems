import { useEffect, useState } from 'react'
import './App.css'
import ExpertCard from './ExpertCard'

import { TopBanner } from './TopBanner'

function App() {
  const [experts, SetExperts] = useState([])
  const [cart, setCart] = useState([])

  const getExperts = async () =>{
    const res = await fetch("experts.json")
    const data = await res.json()
    SetExperts(data)
  }

  useEffect(()=>{
    getExperts()
  },[])
  
  const handleAddToList = (id) =>{
    console.log("request for", id)
    if (cart.includes(id)){
      console.log("expert already added", id)
    }
    else{
      setCart(prevCart => [...prevCart, id])
      console.log("Expert added successfully", id)
    }
  }
  console.log(cart)
  return (
    <div className='w-3/4 mx-auto'>
      <TopBanner/>
      <div className="main-container grid grid-cols-4 gap-5">
        <div className="col-span-3 experts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {experts.length>0 &&
            experts.map(expert => <div key={expert.id}><ExpertCard expert={expert} handleAddToList={handleAddToList}/></div>)
          }
        </div>
        <div className="list border border-gray-400 rounded">
          <h2 className='text-center text-xl'>Experts List</h2>
          <hr />
          <div className='p-2'>
            <p className='text-xl'>Experts Added: {cart.length}</p>
            <p className='text-xl'>Total Cost: {cart.reduce((acc, id) => acc + (experts[id]?.salary || 0), 0)}</p>
            <div>
              {cart.length > 0
              ? cart.map(cartItem =>{
                const expert = experts.find(e => e.id == cartItem)
                return (
                  <div key={expert.id} className="cart-item flex items-center gap-2 my-5 border border-gray-500 rounded">
                    <div className='w-14 h-14'>
                      <img className='img-fluid' src={expert.img} alt="" />
                    </div>
                    <p>{expert.name}</p>
                  </div>
                )
              })
              :<>No experts added</>}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
