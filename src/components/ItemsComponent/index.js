import { useState } from "react";

import { RightButton, TextButton, WrongButton } from "./styledComponents";

import "./index.css";

import { RxCross1 } from "react-icons/rx";
import { TfiCheck } from "react-icons/tfi";
import Modal from "../Modal";
const ItemsComponent = (props) => {
  const [finalStatus, updateStatus] = useState("");
  const [isRight, updateRight] = useState(false);
  const [isWrong, updateWrong] = useState(false);
  const [textStatus, updateTextStatus] = useState("");
  const [isModal, setModal] = useState(false);

  const { details} = props;
  const { brand, productName, image, price, quantity, total,  } = details;
  const onRightBtnClick = () => {
    updateStatus("Approved");
    updateRight(true);
    updateWrong(false);
    updateTextStatus("right");
  };

  const onWrongBtnClick = () => {
    updateStatus("Not Approved");
    updateWrong(true);
    updateTextStatus("wrong");
    updateRight(false);
    setModal(true);
  };

  const modalFun = (value) => {
    updateTextStatus(value);
    console.log(value);
  };

  const exit = (value) => {
    setModal(value);
  };

  return (
    <li className="tables-header">
      <div className="pname">
        <img src={image} alt="img" className="image" />
        <p>{productName}</p>
      </div>
      <p className="brands">{brand}</p>
      <p className="prices">{price}</p>
      <p className="quantities">{quantity}</p>
      <p className="totals">{total}</p>
      <div className="status-con">
        {getResult(textStatus, finalStatus)}
        <RightButton
          className="w-icon-con"
          onClick={onRightBtnClick}
          outline={isRight}
        >
          <TfiCheck className="w-icon" />
        </RightButton>
        <WrongButton
          className="x-icon-con"
          onClick={onWrongBtnClick}
          outline={isWrong}
        >
          <RxCross1 className="x-icon" />
        </WrongButton>
      </div>
      {isModal && <Modal modalFun={modalFun} exit={exit} />}
    </li>
  );
};

export default ItemsComponent;

function getResult(textStatus, finalStatus) {
  switch (textStatus) {
    case "right":
      return <TextButton className="text-green">{finalStatus}</TextButton>;
    case "m":
      return <TextButton className="text-orange">Missing</TextButton>;
    case "mu":
      return <TextButton className="text-red">Missing Urgent</TextButton>;

    default:
      return <TextButton className="text"></TextButton>;
  }
}
