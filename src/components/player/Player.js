import React from 'react';
import walkSprite from './player_walk.png';
import { useDispatch, useSelector } from 'react-redux';

function Player(props) {
    const dispatch = useDispatch();
    const playerState = useSelector(state => state.player);
    console.log('player state', playerState);
    return (
        <div
            style={{
                position: 'absolute',
                top: playerState.position[1],
                left: playerState.position[0],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: '0 0',
                width: '40px',
                height: '40px'
            }}
        />
    );
}

export default Player;
