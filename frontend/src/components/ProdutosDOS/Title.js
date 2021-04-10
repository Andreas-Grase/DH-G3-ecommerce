import React from 'react';


export default function Title({name, title}) {
    return(
        <div className="row">
        <div className="col-10 my-2 text-center text-title">
            <h3 className="text-capitalize font-weight-bold">
                {name} {title}
            </h3>
        </div>

        </div>
    )
}