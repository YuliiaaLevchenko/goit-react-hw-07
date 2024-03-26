import { useEffect } from "react";
import css from "../App/App.module.css";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import Layout from "../Layout/Layout";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import Error from "../../Error/Error";
import Loader from "../Loader/Loader";




function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        {error && <Error>Error message</Error>}
      {loading && <Loader>Loading message</Loader>}
        <SearchBox />
        <ContactList />
        <Toaster />
      </div>
      </Layout>
  );
}

export default App;



