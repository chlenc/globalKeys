import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/">GlobalKeys</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="nav navbar-nav mr-auto">
                    </ul>
                    <a className="btn btn-light my-2 my-sm-0" href="/logout">Выйти</a>
                    <ul></ul>
                    <a className="btn btn-light my-2 my-sm-0" href="/">Авторизация</a>
                    <ul></ul>
                    <a className="btn btn-outline-light my-2 my-sm-0" href="/registration">Регистрация</a>

                </div>
            </nav>

            <br/>

            <div className="container">
                <div style={{margin: 'auto'}} className="row">
                    <div className="col-lg work-field">

                        <form action="/search" method="get">

                            <div className="form-row">
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="city">Город</label>
                                    <select type={'text'} className="form-control" id="city" name="city" required>
                                        <option></option>
                                    </select>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="dates">Даты</label>
                                    <input type="text" className="form-control datebox" id="date" name="date"
                                           required/>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="count_guests">Количество гостей</label>
                                    <input type="number" min="1" className="form-control" id="persons" name="persons" required/>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <br/>

                                    <button className="btn btn-outline-info btn-lg" type="submit">Найти</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br/>

            </>
        )
    }
}

export default Header;
