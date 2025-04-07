
const ContactForm = ({data, setData, initialData, userData, setUserData}) => {

    const handleChange = (e) =>{
        if(e.target.type === 'checkbox'){
            setData({...data, [e.target.name]: e.target.checked})
            return
        }
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUserData([...userData, {id: `id-${Date.now()}`, name: data.name, number: data.number}])
        setData(initialData)
    }

    return <form onSubmit={handleSubmit}>
        <label>
            <input type='text' name='name' value={data.name} onChange={handleChange}/>
        </label>
        <label>
            <input type='text' name='number' value={data.number} onChange={handleChange}/>
        </label>

        <button type='submit'>Add contact</button>
    </form>;
};

export default ContactForm;