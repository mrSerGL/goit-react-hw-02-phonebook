
import css from './Contacts.module.css';

function Contacts({data}){
const{contacts}=data;     
    console.log('contacts',contacts)


return (
<div>
<ul className={css.contactsList}>
    {contacts.map(({id, name,number})=><li key={id}><p>&#9679; {name} {number}</p></li>)}
</ul>


</div>
);
};

export default Contacts;

//{name}{number}