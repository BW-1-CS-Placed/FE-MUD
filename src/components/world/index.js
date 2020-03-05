import React from 'react';
import Player from '../player/Player';
import Map from '../map/Map';

function World(props) {
    return (
        <div
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto'
            }}
        >
            <Map />
            <Player />
        </div>
    );
}

export default World;
