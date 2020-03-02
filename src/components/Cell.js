import React from "react";

export default function Cell({indexes}) {
    console.log(indexes.row, indexes.col);
    return (
        <div>
            {/*{value && <img src={'/src/assets/' + value + '.svg'}/>}*/}
        </div>
    );
}
