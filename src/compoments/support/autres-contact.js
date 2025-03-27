import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Autre_Support() {
    return (
        <div className="container" id="slider-container-5">
            <div className="row">
                <div className="col-12">
                    <div className="text-center">
                        <h2>Support</h2>
                    </div>
                    <div>
                        <div className="col-12 text-center">
                            <label>
                                <div>
                                    <li>Pseudo:</li>
                                </div>
                                <input name="username" />
                            </label>
                            <br />
                            <label>
                                <div>
                                    <li>Email:</li>
                                </div>
                                <input name="email" />
                            </label>
                            <hr />
                            <div className="col-12 text-center">
                                <li>Problème:</li>
                                <div>
                                    <label>
                                        <input type="radio" name="problème" value="Problème de Compte" />
                                        Problème de Compte
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" name="problème" value="Problème de Launcher" />
                                        Signaler un bug
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" name="problème" value="Problème de Téléchargement" />
                                        Problème de Téléchargement
                                    </label>
                                </div>
                            </div>
                            <br />
                            <button> Valider </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Autre_Support;