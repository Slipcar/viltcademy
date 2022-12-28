import React from "react";

import Film from "../Film/Film"

const Section = ({ section }) => {

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5 className="text-white">{section[0]?.generos[0]}</h5>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <ul className="filme-lista">
                    {section.map(film =>(
                        <Film film={film} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Section