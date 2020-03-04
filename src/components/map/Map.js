import React, { useEffect } from 'react';
import { FlexibleXYPlot, LineSeries, MarkSeries } from 'react-vis';
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
    const roomState = useSelector(state => state.room.rooms);
    // console.log('map game state', gameState);
    console.log('map room stat', roomState);
    useEffect(() => {
        dispatch(getAllRooms());
    }, []);

    const coordinates = [];
    const links = [];

    for (let room in roomState) {
        // roomData will be the first element in x,y coordinates
        console.log('room', roomState[room][0]);
        let roomData = roomState[room][0];
        // push to the coordinates array
        coordinates.push(roomData);
        // another for loop to grab room next to it
    }
    console.log('coordinates', coordinates);
    return (
        <FlexibleXYPlot>
            {coordinates.map(link => (
                <LineSeries
                    strokeWidth='2'
                    color='#F39C12'
                    room={link}
                    key={Math.random() * 100}
                />
            ))}
        </FlexibleXYPlot>
    );
};

export default Map;
