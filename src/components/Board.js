import React, { useRef } from "react";
import Cell from "./Cell";
import { initialBoardValues } from "./constants";


export default function Board() {

    const style = useRef({
        display: 'flex',
        justifyContent: 'center'
    });

    return (
        <div style={{border: '2px solid grey'}}>
            {initialBoardValues.map((eachRow, boardIndex) => {
                return (
                    <div key={boardIndex} style={style.current}>
                        {eachRow.map((ele, index) => {
                            return <Cell isWhite={(boardIndex + index) % 2 === 0} value={eachRow[index]}
                                         indexes={{row: boardIndex, col: index}} key={index}/>;
                        })}
                    </div>
                );
            })}
        </div>
    );
}
