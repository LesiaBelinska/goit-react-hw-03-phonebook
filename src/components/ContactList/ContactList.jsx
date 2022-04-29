import PropTypes from 'prop-types';

import ContactListItem from 'components/ContactListItem/ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => {
                return (
                    <ContactListItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        onDeleteContact={onDeleteContact}
                    />
                )
            })}
        </ul>
    )
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired,
    
};

