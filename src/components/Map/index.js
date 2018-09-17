import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { Pin } from './styles';

export default class App extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -22.964216,
      longitude: -43.18036,
      zoom: 14,
    },
    allMarkers: [],
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;

    // alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);

    this.setState({
      allMarkers: [...this.state.allMarkers, { latitude, longitude }],
    });
  };

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZ2lhbW1hY2FyaW9jYSIsImEiOiJjamh5enQyODcwczJhM3FtcWZ4MWFtZWkzIn0.WYElwcfpht5zjidLQHk5EQ"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {this.state.allMarkers.map((marker, index) => (
          <Marker
            key={index}
            latitude={marker.latitude}
            longitude={marker.longitude}
            onClick={this.handleMapClick}
            captureClick
          >
            <Pin src="https://avatars0.githubusercontent.com/u/23019676?v=4" alt="my location" />
          </Marker>
        ))}
      </MapGL>
    );
  }
}
