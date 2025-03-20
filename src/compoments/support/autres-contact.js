import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Autre_Support() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="text-center">
                        <h1>Support</h1>
                    </div>
                    <div>
                        <div className="col-12 text-center">
                            <label>
                                <div>
                                    Pseudo
                                </div>
                                <input name="username" />
                            </label>
                            <br />
                            <label>
                                <div>
                                    Email
                                </div>
                                <input name="email" />
                            </label>
                            <hr />
                            <p>
                                Problème:
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
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Autre_Support;