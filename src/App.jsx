import { useState } from 'react'
import './index.css'
import SideBar from './components/sidebar';


function App() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const [show, setShow] = useState(false);
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Ania Dmuchała",
      age: 17,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
      birthday: `${month}-${day}`,
    },
    {
      id: 2,
      name: "Magda Kłopot",
      age: 32,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
        birthday: `${month}-${day}`
    },
    {
      id: 3,
      name: "Michael Angelo",
      age: 36,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        birthday: `${month}-${day}`
    },
    {
      id: 4,
      name: "Michał Matczak",
      age: 34,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        birthday: "11-28"
    },
    {
      id: 5,
      name: "Zofia Stefaniak",
      age: 29,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        birthday: "11-2"
    },
  ])
  const todayBirthdays = people.filter(person => person.birthday === `${month}-${day}`);
  const list = todayBirthdays.map((element) => (
  <><img className='w-[200px] h-[150px] object-cover rounded-full ' src={element.image} alt={element.name} /><li key={element.id} className='flex flex-col justify-center text-base items-center text-center'>{element.name}<br />Age: {element.age}</li><br /><br /> </>)

  )

  return (
    <>

    <div className='flex justify-center'>
    <div className='bg-slate-100 p-[20px] w-[500px] flex flex-col justify-center items-center'> 
    <h1 className='text-xl'>Today, {list.length} people are celebrating birthday!</h1><br />
    <ul>
    {list}
    </ul>
    <br></br>
    <button className="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded" onClick={() => setShow((show) => !show)}>Add new person</button>
    </div>

    </div>
    <div className='flex justify-center'>
    
    <div className='bg-slate-100 p-[20px] w-[500px] flex flex-col justify-center items-center'> 

    <SideBar show={show}><h1 className='text-xl flex justify-center'>Add new people to list!</h1><br /><Form list={todayBirthdays} setPeople={setPeople}></Form></SideBar>
    
    </div>

    </div>
      
    </>
  )
}


function Form({list, setPeople}) {
  const [newName,setNewName] = useState('');
  const [newBirth,setNewBirth] = useState('');
  const [newAge,setNewAge] = useState('');
  const [NewList,setNewList] = useState(list);
  let random = Math.floor(Math.random()*100) + 1;
  return (

  <div>
      
      Input person name: <br /><input className='pr-[10px] pl-[10px] text-s' type="text" placeholder="Maciej Grabowski" onChange={(e) => setNewName(e.target.value)} value={newName}/> <br /><br />
      Input person birth month and day: <input className='pr-[10px] pl-[10px] text-s' type="text" placeholder="e.g 11-22 (correct format)" onChange={(e) => setNewBirth(e.target.value)} value={newBirth}/> <br /><br />
      Input person Age: <input className='pr-[10px] pl-[10px] text-s' type="text" placeholder="e.g 15" onChange={(e) => setNewAge(e.target.value)} value={newAge}/> <br /><br />
      <button className="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded" onClick={() => {
          setNewList([
              ...list, 
              {id: NewList.id++,name: newName, birthday: newBirth, image:`https://picsum.photos/id/${random}/400/600`,age: newAge}
          ]);
      }}>Dodaj</button>
      {setPeople(NewList)}
  </div>
);
};


export default App
