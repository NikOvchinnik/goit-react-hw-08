import Modal from "react-modal";
import style from "./ModalDelete.module.css";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const notify = () => toast.success(`Contact has been deleted`);

Modal.setAppElement("#root");

const ModalDelete = ({ modalIsOpen, onCloseModal, idContact }) => {
  const dispath = useDispatch();

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={style.modalContainer}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      }}
    >
      <div className={style.modalContainerText}>
        <h2 className={style.modalText}>Do you want to delete this contact?</h2>
        <button
          type="button"
          className={style.modalBtn}
          onClick={() => {
            dispath(deleteContact(idContact));
            notify();
            onCloseModal();
          }}
        >
          Delete
        </button>
        <button
          type="button"
          className={style.modalBtn}
          onClick={() => onCloseModal()}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default ModalDelete;
