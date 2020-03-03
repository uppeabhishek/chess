import React, { useRef } from "react";
import { characters } from "./constants";
import { useDrag, useDrop } from "react-dnd";
import { CanMovePiece } from "./CanMove";

export default function Cell({indexes, value, isWhite}) {

    function getAcceptedTypes() {
        return characters.PAWN;
    }

    const [{isDragging}, drag] = useDrag({
        item: {type: value ? characters[value.substr(5).toUpperCase()] : 'EMPTY', value: value},
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const [{isOver}, drop] = useDrop({
        accept: getAcceptedTypes(),
        drop: (e) => console.log(e.value),
        canDrop: () => CanMovePiece(indexes),
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    const style = {
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    if (isWhite) {
        style['backgroundColor'] = '#779952';
    } else {
        style['backgroundColor'] = '#edeed1';
    }

    return (
        <div style={style} className={isDragging ? 'dragging-over-opacity' : ''}>
            {value && <img width={80}
                           ref={drag}
                           style={{cursor: 'pointer'}}
                           height={80}
                           alt={'chess'}
                           src={process.env.PUBLIC_URL + '/assets/' + value + '.svg'}/>}
        </div>
    );
}
