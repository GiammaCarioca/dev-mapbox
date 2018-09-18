import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from '../Modal';
import * as devActions from '../../store/actions/devs';

import 'mapbox-gl/dist/mapbox-gl.css';
import { Pin } from './styles';

class Map extends Component {
  state = {
    toggleModal: false,
    latitude: 0,
    longitude: 0,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -22.964216,
      longitude: -43.18036,
      zoom: 14,
    },
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

  handleToggleModal = () => {
    this.setState({ toggleModal: !this.state.toggleModal });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    this.setState({ latitude, longitude });

    this.handleToggleModal();
  };

  render() {
    return (
      <Fragment>
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiZ2lhbW1hY2FyaW9jYSIsImEiOiJjamh5enQyODcwczJhM3FtcWZ4MWFtZWkzIn0.WYElwcfpht5zjidLQHk5EQ"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {this.props.devs.data.map(dev => (
            <Marker
              key={dev.id}
              latitude={dev.latitude}
              longitude={dev.longitude}
              onClick={this.handleMapClick}
              captureClick
            >
              <Pin src={dev.avatar} alt="my location" />
            </Marker>
          ))}
        </MapGL>

        <Modal
          showModal={this.state.toggleModal}
          toggleClick={this.handleToggleModal}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  devs: state.devs,
  latitude: state.latitude,
  longitude: state.longitude,
});

const mapDispatchToProps = dispatch => bindActionCreators(devActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
