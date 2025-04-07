import './App.css'
import ContactForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import AddLocalStorage from "./components/AddLocalStorage.jsx";

function App() {

  const INITIAL_DATA ={
    name: '',
    number: '',
    select: '',
    checkbox: false
  }

  const INITIAL_STATE = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]

  const [data, setData] = AddLocalStorage(INITIAL_DATA, 'initialData')
  const [userData, setUserData] = AddLocalStorage(INITIAL_STATE, 'initialState')

  const handleDelete = (e) =>{
   const newUserData = userData.filter((user) => e.target.id !== user.id)
    setUserData(newUserData)
  }

  return (
    <>
      <ContactForm data={data} setData={setData} initialData={INITIAL_DATA} userData={userData} setUserData={setUserData}/>
      <ContactList userData={userData} handleDelete={handleDelete}/>
    </>
  )
}

export default App
