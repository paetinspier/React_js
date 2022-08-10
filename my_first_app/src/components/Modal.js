function Modal(props) {
  function cancel_handler() {
      props.onCancel();
  }
  function confirm_handler() {
      props.onConfirm();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancel_handler}>
        Cancel
      </button>
      <button className="btn" onClick={confirm_handler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
