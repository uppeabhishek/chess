import React from "react";
import Cell from "./Cell";
import { initialBoardValues } from "./constants";


export default function Board() {

    return initialBoardValues.map((eachRow, boardIndex) => {
        return (
            <div key={boardIndex} style={{display: 'flex'}}>
                {eachRow.map((ele, index) => {
                    return <Cell value={eachRow[index]} indexes={{row: boardIndex, col: index}} key={index}/>;
                })}
            </div>
        );
    });
}
