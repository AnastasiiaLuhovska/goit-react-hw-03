const Contact = ({user, handleDelete}) => {
    const {id, name, number} = user

    return <li>
        <p>{name}</p>
        <p>{number}</p>
        <button id={id} onClick={handleDelete}>Delete</button>
    </li>;
};

export default Contact;