import React, { useEffect } from 'react';
import { flexibleXYPlot, LineSeries, MarkSeries } from 'react-vis';
import { useDispatch, useSelector } from 'react-redux';
// moving component?
import { getAllRooms } from '../../actions/roomaActions';
import styled from 'styled-components';

const StyledMap = styled.div`
    margin: 0 auto;
    width: 65%;
    height: 500px;
    flex: 1;
    padding: 2rem 2rem 2rem 2rem;
    position: relative;
    background-color: black;
`;
const Map = () => {
    const dispatch = useDispatch();
    // const gameState = useSelector(state => state.game);
    const roomState = useSelector(state => state.room);
    // console.log('map game state', gameState);
    console.log('map room stat', roomState);
    useEffect(() => {
        dispatch(getAllRooms());
    }, []);

    return (
        <div>
            <div>Map.js</div>
            {roomState.rooms.map(x => console.log(x))}
            {console.log('roomsAPI', roomState.rooms[0])}
        </div>
    );
};

export default Map;
