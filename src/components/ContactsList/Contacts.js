import css from './Contacts.module.css';

function Contacts({ data, onDeleteContact }) {
  return (
    <div>
      <ul className={css.contactsList}>
        {data.map(({ id, name, number }) => (
          <li key={id} className={css.contactsItem}>
            <p>
              &#9679; {name} {number}
            </p>

            <button
              type="button"
              className={css.contactsList__btn}
              onClick={() => onDeleteContact(id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
