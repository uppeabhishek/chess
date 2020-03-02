import React from 'react';
import './App.css';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import Board from "./components/Board";

function App() {
    return (
        <div className="App">
            <DndProvider backend={Backend}>
                <Board/>
            </DndProvider>
        </div>
    );
}

export default App;
