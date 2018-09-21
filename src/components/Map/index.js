import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as DevActions } from '../../store/ducks/devs';

import Modal from '../Modal';

import 'mapbox-gl/dist/mapbox-gl.css';
import { Pin } from './styles';

class Map extends Component {
  static propTypes = {
    devs: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          avatar: PropTypes.string,
          latitude: PropTypes.number,
          longitude: PropTypes.number,
        }),
      ),
    }).isRequired,
  };

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
    const { viewport } = this.state;

    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleToggleModal = () => {
    const { toggleModal } = this.state;
    this.setState({ toggleModal: !toggleModal });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    this.setState({ latitude, longitude });

    this.handleToggleModal();
  };

  render() {
    const { devs } = this.props;
    const { toggleModal, latitude, longitude } = this.state;

    return (
      <Fragment>
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiZ2lhbW1hY2FyaW9jYSIsImEiOiJjamh5enQyODcwczJhM3FtcWZ4MWFtZWkzIn0.WYElwcfpht5zjidLQHk5EQ"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {devs.data.map(dev => (
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
          showModal={toggleModal}
          toggleClick={this.handleToggleModal}
          latitude={latitude}
          longitude={longitude}
        />
        <ToastContainer autoClose={2000} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  devs: state.devs,
  latitude: state.latitude,
  longitude: state.longitude,
});

const mapDispatchToProps = dispatch => bindActionCreators(DevActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
