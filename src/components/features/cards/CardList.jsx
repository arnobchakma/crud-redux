import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../Button";
import Modal from "./Modal";

const CardList = () => {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const cards = useSelector((store) => store.cards);

  // Mapping cards and show it on display
  const cardList = () =>
    cards.map((card) => (
      <div className="formStyle border mt-3" key={card.id}>
        <h3> {card.title} </h3>
        <span> {card.description} </span>
        <p> {card.date} </p>
      </div>
    ));

  return (
    <div className="container">
      <div className="text-center">
        {isOpenModel ? (
          <Modal closeModal={setIsOpenModel} />
        ) : (
          <div>
            <Button type="button" onClick={() => setIsOpenModel(true)}>
              Add Card
            </Button>
            <Link className="no-underline" to="/task-list">
              <Button className="py-10" type="button">
                Task List
              </Button>
            </Link>
          </div>
        )}

        <div>
          {cards.length ? (
            cardList()
          ) : (
            <h5 className="text-center font-medium mt-3">Card is empty now</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardList;
