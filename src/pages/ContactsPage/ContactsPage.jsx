import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectLoading, selectError } from "../../redux/contacts/selectors"
import { fetchContacts } from "../../redux/contacts/operations"
import DocTitle from "../../components/DocTitle"
import ContactForm from "../../components/ContactForm/ContactForm"
import SearchBox from "../../components/SearchBox/SearchBox"
import Loader from "../../components/Loader/Loader"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import ContactList from "../../components/ContactList/ContactList"
import style from "./ContactsPage.module.css"

const ContactsPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocTitle>Contacts</DocTitle>
      <div className={style.mainContainer}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {contacts.length > 0 && <ContactList />}
      </div>
    </>
  );
}

export default ContactsPage;