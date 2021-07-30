const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__social">
            <a href="https://www.instagram.com/" target="_blank">
              <div className="fab fa-instagram-square"></div>
            </a>
            <a href="https://ru-ru.facebook.com/" target="_blank">
              <div className="fab fa-facebook-square"></div>
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <div className="fab fa-youtube-square"></div>
            </a>
          </div>
          <div className="footer__info">
            Проект подготовлен в рамках курса JavaScript Pro в{" "}
            <a
              href="https://fpk.unn.ru/kursy-programmirovaniya/kursy-programmirovaniya-na-javascript/prodvinutyj-kurs-javascript/"
              target="_blank"
            >
              ФПК ННГУ
            </a>{" "}
            под руководством компании{" "}
            <a href="https://lad24.ru/" target="_blank">
              LAD
            </a>
          </div>
          <div className="footer__contact">8 800 123 45 67</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
