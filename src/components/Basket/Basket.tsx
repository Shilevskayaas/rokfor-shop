import { useState } from "react";
import { useHistory } from "react-router-dom";
import { itemObject } from "../../types";

const Basket = (props: { selectedItem: itemObject }) => {
  const history = useHistory();
  const { selectedItem } = props;
  const [isSubmitted, updateSubmitStatus] = useState(false);
  const [isPopup, updatePopupStatus] = useState(false);
  const [quantity, updateQuantity] = useState("1");
  const [phone, updatePhone] = useState("");
  const [adress, updateAdress] = useState("");
  const [desc, updateDesc] = useState("");

  const onFormReset = () => {
    updateQuantity("1");
    updatePhone("");
    updateAdress("");
    updateDesc("");
  };

  const onSubmit = () => {
    updateSubmitStatus(true);
  };

  const onPopup = () => {
    updatePopupStatus(true);
  };

  return (
    <div className="basket">
      <a href="#">
        <input
          type="submit"
          className="basket__popup"
          value="Хочу скидку!"
          onClick={onPopup}
        />
      </a>
      <div className="basket__block">
        {!selectedItem.itemName && !isSubmitted && (
          <div className="basket__form" style={{ textAlign: "center" }}>
            <div>Ваша корзина пока пуста :(</div>
            <div className="basket__button basket__button-special">
              <input
                value="К покупкам!"
                style={{ textAlign: "center" }}
                onClick={() => history.push("/")}
              />
            </div>
          </div>
        )}
        {selectedItem.itemName && !isSubmitted && (
          <form className="basket__form">
            <h2>Форма заказа</h2>
            <div className="basket__box">
              <p>
                Выбранный сыр
                <input
                  value={selectedItem.itemName}
                  type="text"
                  placeholder="Рокфор"
                  name="cheese"
                  required
                  readOnly
                />
                <br />
              </p>
            </div>
            <div className="basket__box">
              <p>
                Количество
                <input
                  value={quantity}
                  type="number"
                  placeholder="1"
                  name="number"
                  required
                  onChange={(e) => updateQuantity(e.target.value)}
                />
                <br />
              </p>
            </div>
            <div className="basket__box">
              <p>
                Номер телефона
                <input
                  value={phone}
                  type="phonenumber"
                  placeholder="+7910..."
                  required
                  onChange={(e) => updatePhone(e.target.value)}
                />
                <br />
              </p>
            </div>
            <div className="basket__box">
              <p>
                Адрес
                <input
                  value={adress}
                  type="text"
                  name="adress"
                  placeholder="Н.Новгород, Ленина пр-т,..."
                  required
                  onChange={(e) => updateAdress(e.target.value)}
                />
                <br />
              </p>
            </div>
            <div className="basket__box">
              <p>
                Как вас найти
                <textarea
                  placeholder="Подъезд с левой стороны дома..."
                  name="my home"
                  value={desc}
                  onChange={(e) => updateDesc(e.target.value)}
                ></textarea>
              </p>
            </div>
            <div className="basket__button">
              <p>
                <input type="reset" value="Сбросить" onClick={onFormReset} />
              </p>
            </div>
            <div className="basket__button">
              <p>
                <input type="submit" value="Оформить" onClick={onSubmit} />
              </p>
            </div>
          </form>
        )}
        {isSubmitted && (
          <div className="basket__box">
            <div className="basket__form">
              <h2>Заказ оформлен</h2>
              Ваш сыр {selectedItem.itemName} в количестве {quantity} шт. был
              успешно отправлен по указанному Вами адресу
            </div>
            <div className="basket__button basket__button-special">
              <input
                value="Хочу еще!"
                style={{ textAlign: "center" }}
                onClick={() => history.push("/")}
              />
            </div>
          </div>
        )}
      </div>
      {isPopup && (
        <input
          type="submit"
          className="basket__popup"
          value="Скажи ПРИВЕТ на кассе"
        />
      )}
    </div>
  );
};

export default Basket;
