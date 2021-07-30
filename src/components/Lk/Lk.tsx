import { useState } from 'react'

const Lk = (props: { loginStatus: boolean; updateLoginStatus: any }) => {
  const [loginPass, updateLoginPass] = useState({ login: '', pass: '' })
  const { loginStatus, updateLoginStatus } = props

  const onFormSubmit = (e: any) => {
    e.preventDefault()
    if (loginPass.login === 'user' && loginPass.pass === '123') {
      updateLoginStatus(true)
    }
  }

  const onLoginChange = (e: any) => {
    const { value } = e.target
    updateLoginPass({
      login: value,
      pass: loginPass.pass
    })
  }

  const onPassChange = (e: any) => {
    const { value } = e.target
    updateLoginPass({
      login: loginPass.login,
      pass: value
    })
  }

  return (
    <div className="lk">
      <div className="lk__block">
        <h2>Личный кабинет</h2>
        <form className="lk__form" onSubmit={onFormSubmit}>
          {loginStatus && (
            <div className="lk__box">Добро пожаловать, Любитель Сыров!</div>
          )}
          {!loginStatus && (
            <div className="lk__box">
              <div className="lk__input">
                Логин
                <input
                  value={loginPass.login}
                  type="text"
                  placeholder="Логин"
                  maxLength={12}
                  size={20}
                  name="login"
                  required
                  onChange={onLoginChange}
                />
                <br />
              </div>
              <div className="lk__input">
                Пароль
                <input
                  value={loginPass.pass}
                  type="password"
                  placeholder="Пароль"
                  maxLength={12}
                  size={20}
                  name="password"
                  required
                  onChange={onPassChange}
                />
                <br />
              </div>
              <div className="lk__input">
                <input type="submit" value="Вход" />
              </div>
            </div>
          )}
        </form>
      </div>
      <p>Удачных покупок!</p>
    </div>
  )
}

export default Lk
