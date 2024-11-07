import React, { useState } from 'react';
import axios from 'axios';
import './TicTacToe.css';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(' '));
    const [status, setStatus] = useState('');

    const handleClick = async (index) => {
        if (board[index] !== ' ' || status !== '') return;

        const newBoard = board.slice();
        newBoard[index] = 'X';
        setBoard(newBoard);

        try {
            const response = await axios.post('http://localhost:5000/move', {
                board: newBoard,
                move: index,
            });

            const data = response.data;
            setBoard(data.board);
            if (data.status) {
                setStatus(data.status);
            }
        } catch (error) {
            console.error('Error making move:', error);
            setStatus('Network error. Please try again.');
        }
    };

    const restartGame = async () => {
        try {
            await axios.post('http://localhost:5000/restart');
            setBoard(Array(9).fill(' '));
            setStatus('');
        } catch (error) {
            console.error('Error restarting game:', error);
            setStatus('Network error. Please try again.');
        }
    };

    return (
        <div className="tic-tac-toe">
            <div className="board">
                {board.map((cell, index) => (
                    <div key={index} className="cell" onClick={() => handleClick(index)}>
                        {cell}
                    </div>
                ))}
            </div>
            <div className="status">{status}</div>
            <button className="restart-btn" onClick={restartGame}>
                Restart Game
            </button>
        </div>
    );
};

export default TicTacToe;
