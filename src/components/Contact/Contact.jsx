import style from "./Contact.module.css";
import { LiaAddressBook } from "react-icons/lia";
import { LiaPhoneSolid } from "react-icons/lia";
import ModalDelete from "../ModalDelete/ModalDelete";
import { useState } from "react";

const Contact = ({ contact: { id, name, number } }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function onOpenModal() {
    setModalIsOpen(true);
  }

  function onCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <li className={style.contactItem}>
      <div className={style.contactContainer}>
        <div className={style.contactTextContainer}>
          <LiaAddressBook />
          <p>{name}</p>
        </div>
        <div className={style.contactTextContainer}>
          <LiaPhoneSolid />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={style.contactBtnDelete}
        type="button"
        onClick={() => {
          onOpenModal();
        }}
      >
        Delete
      </button>
      {modalIsOpen && (
        <ModalDelete
          modalIsOpen={modalIsOpen}
          onCloseModal={onCloseModal}
          idContact={id}
        />
      )}
    </li>
  );
};

export default Contact;
