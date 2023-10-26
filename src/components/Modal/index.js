import { RxCross1 } from "react-icons/rx";

import "./index.css";

const Modal = (props) => {
  const { modalFun, exit } = props;

  const YesButton = () => {
    modalFun("mu");
    exit(false)
  };

  const NoButton = () => {
    modalFun("m");
    exit(false)
  };

  const onExit = () => {
    exit(false);
  };

  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-con">
        <div className="first-con">
          <h1 className="missing-p-head">Missing Product</h1>
          <div className="exit-btn">
            <button onClick={onExit} className="exit-btn">
              <RxCross1 className="exit-exit" />
            </button>
          </div>
        </div>
        <p className="content">Is 'Chicken Breast Fillets ... Urgent</p>
        <div className="btn-con">
          <button onClick={NoButton} className="btn">
            No
          </button>
          <button onClick={YesButton} className="btn">
            Yes
          </button>
        </div>
      </div>
    </>
  );
};
export default Modal;
