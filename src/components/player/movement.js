import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeMove } from '../../actions/gameActions';

const Move = () => {
    const playerState = useSelector(state => state.player);
    console.log('moving', playerState);

    const dispatch = useDispatch();

    const north = n => {
        dispatch(makeMove(n));
    };
    const south = s => {
        dispatch(makeMove(s));
    };

    const east = e => {
        dispatch(makeMove(e));
    };

    const west = w => {
        dispatch(makeMove(w));
    };

    return (
        <div className='button-wrapper'>
            <div
                className='moving-button'
                onClick={() => north({ direction: 'n' })}
            >
                North
            </div>

            <div
                className='moving-button'
                onClick={() => south({ direction: 's' })}
            >
                South
            </div>
            <div
                className='moving-button'
                onClick={() => east({ direction: 'e' })}
            >
                East
            </div>
            <div
                className='moving-button'
                onClick={() => west({ direction: 'w' })}
            >
                West
            </div>
        </div>
    );
};

export default Move;
