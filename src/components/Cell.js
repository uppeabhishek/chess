import React, { useRef } from "react";

export default function Cell({indexes, value, isWhite}) {

    const style = useRef({
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    });

    if (isWhite) {
        style.current['backgroundColor'] = '#779952';
    } else {
        style.current['backgroundColor'] = '#edeed1';
    }

    return (
        <div style={style.current}>
            {value && <img width={50}
                           style={{cursor: 'pointer'}}
                           height={50}
                           src={process.env.PUBLIC_URL + '/assets/' + value + '.svg'}/>}
        </div>
    );
}
