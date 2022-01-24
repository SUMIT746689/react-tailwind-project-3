import React, { useState } from 'react';
import { AiOutlinePlusCircle  ,AiOutlineMinusCircle} from 'react-icons/ai';



export default function Products({state}) {
  const [add,setAdd] = useState(false);
    const changeAddMin = ()=>{
      setAdd(!add);
      console.log(add);
    }
    console.log(state);
    const items = state.map(x=>
        <div className="flex mx-auto my-2 " key={x.id}>
        {/* <!--Card 1--> */}
        <div className="w-full lg:max-w-full lg:flex mx-auto">
          <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Mountain">
          </div>
          
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div className="grid grid-flow-col justify-center align-middle">
                <img className="md:w-1/4" src={x.url} alt={x.id}/>
                <div className="flex flex-col justify-center align-middle">
                  <div className="text-gray-900 font-bold text-xl mb-2">{x.title}</div>
                  <p className="text-gray-700 text-base duration-700">
                    {add ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.'
                      :
                      ''
                    }
                    </p>
                </div>
                <button onClick={changeAddMin}>
                  {!add ? 
                    <AiOutlinePlusCircle className="duration-500 text-purple-500 text-3xl justify-center"/>
                      :
                    <AiOutlineMinusCircle  className="duration-500 text-purple-500 text-3xl justify-center" />
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
        );
    
    return (   
        <>
        {items}
        </>  
    )
}
