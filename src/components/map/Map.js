import React, { Fragment, useEffect } from 'react';
import { FlexibleXYPlot, LineSeries, MarkSeries } from 'react-vis';
import { useDispatch, useSelector } from 'react-redux';
import Move from '../player/movement';
import { getAllRooms } from '../../actions/roomaActions';

const Map = () => {
    const dispatch = useDispatch();
    // const gameState = useSelector(state => state.game);
    const roomState = useSelector(state => state.room);
    const playerState = useSelector(state => state.player);
    // console.log('map game state', gameState);
    useEffect(() => {
        dispatch(getAllRooms());
    }, []);
    const roomData = roomState.rooms.rooms;
    // current coordinates
    let coordinates = [];
    // directional links from room n, w, e, s
    let links = [];

    console.log('map room state', roomState.rooms.rooms);

    // grab the x and y coordinate and put them in an array
    // grab the directional 'links' and put the in an array
    for (let room in roomData) {
        console.log('room', roomData[room][0]);
        // if (room !== undefined) {
        let x_coord = roomData[room]['x_coord'];
        let y_coord = roomData[room]['y_coord'];
        coordinates.push({ x: x_coord, y: y_coord });
        let n = roomData[room]['n_to'];
        let s = roomData[room]['s_to'];
        let e = roomData[room]['e_to'];
        let w = roomData[room]['w_to'];
        links.push({ n_to: n, s_to: s, e_to: e, w_to: w });
        // }
    }
    // delete coordinates[1];
    // delete links[1];

    //remove all the undefined elements
    // coordinates.pop();
    // coordinates.pop();
    // links.pop();
    // links.pop();
    // links.pop();
    // links.pop();
    // turn the final coordinates into an object for react vis
    // const coordObject = {};
    // for (let i = 0; i < coordinates.length; i++) {
    //     coordObject[i] = coordinates[i];
    // }
    // change the keys to reflect original object
    // coordObject['x'] = coordObject[0];
    // delete coordObject[0];
    // coordObject['y'] = coordObject[1];
    // delete coordObject[1];

    // turn the final links into an object for react vis
    // const linkObject = {};
    // for (let i = 0; i < links.length; i++) {
    //     linkObject[i] = links[i];
    // }
    //change link object keys to reflect original data
    // linkObject['n_to'] = linkObject[0];
    // delete linkObject[0];
    // linkObject['s_to'] = linkObject[1];
    // delete linkObject[1];
    // linkObject['e_to'] = linkObject[2];
    // delete linkObject[2];
    // linkObject['w_to'] = linkObject[3];
    // delete linkObject[3];

    // // turn links into an array with an object for react vis
    // const finalLinkArray = [];
    // finalLinkArray.push(linkObject);
    // // turn coordinates into an array with an object for react vis
    // const finalCoordArray = [];
    // finalCoordArray.push(coordObject);

    console.log('coordinates', coordinates);
    console.log('links', links);
    // console.log('coordObject', coordObject);
    // console.log('linkObject', linkObject);
    // console.log('finalLinkArray', finalLinkArray);
    // console.log('finalCoordArray', finalCoordArray);

    return (
        <Fragment>
            <div
                style={{
                    position: 'relative',
                    top: '0px',
                    left: '0px',
                    width: '800px',
                    height: '500px',
                    backgroundColor: 'green',
                    border: '4px solid white',
                    margin: '10px auto'
                }}
            >
                <FlexibleXYPlot width={500} height={500}>
                    {links.map(link => (
                        <LineSeries
                            strokWidth='2'
                            color='#F39C12'
                            data={link}
                            key={Math.random() * 100}
                        />
                    ))}
                    <MarkSeries
                        strokeWidth={3}
                        opacity='1'
                        size='3'
                        color='#F39C12'
                        data={coordinates}
                        style={{ cursor: 'pointer' }}
                    />

                    <MarkSeries
                        strokeWidth={3}
                        opacity='1'
                        size='3'
                        color='#1ABC9C'
                        data={[
                            {
                                x: playerState.position[0],
                                y: playerState.position[1]
                            }
                        ]}
                        style={{ cursor: 'pointer' }}
                    />
                </FlexibleXYPlot>
            </div>
            <Move />
        </Fragment>
    );
};

export default Map;

// <FlexibleXYPlot width={500} height={500}>
//                     {finalLinkArray.map(link => (
//                         <LineSeries
//                             strokWidth='2'
//                             color='#F39C12'
//                             data={link}
//                             key={Math.random() * 100}
//                         />
//                     ))}
//                     <MarkSeries
//                         strokeWidth={3}
//                         opacity='1'
//                         size='3'
//                         color='#F39C12'
//                         data={finalCoordArray}
//                         style={{ cursor: 'pointer' }}
//                     />

//                     <MarkSeries
//                         strokeWidth={3}
//                         opacity='1'
//                         size='3'
//                         color='#1ABC9C'
//                         data={[
//                             {
//                                 x: playerState.position[0],
//                                 y: playerState.position[1]
//                             }
//                         ]}
//                         style={{ cursor: 'pointer' }}
//                     />
//                 </FlexibleXYPlot>

{
    /* {roomState.rooms[0].map(tile => {
                    return (
                        <div
                            style={{
                                width: '1%',
                                height: '1%',
                                background: 'blue',
                                margin: '1px',
                                border: '.2px solid white'
                            }}
                        >
                            {tile}
                        </div>
                    );
                })} */
}
