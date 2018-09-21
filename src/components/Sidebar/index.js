import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DevActions } from '../../store/ducks/devs';
import { Container, Dev, DevInfo } from './styles';

const Sidebar = ({ devs, removeDev }) => (
  <Container>
    {devs.data.map(dev => (
      <Dev key={dev.id}>
        <DevInfo>
          <img src={dev.avatar} alt="avatar" />
          <div>
            <strong>{dev.name}</strong>
            <small>{dev.username}</small>
          </div>
        </DevInfo>
        <div>
          <button className="remove" type="submit" onClick={() => removeDev(dev.id)}>
            <i className="fa fa-times-circle" />
          </button>
          <button type="submit">
            <i className="fa fa-angle-right" />
          </button>
        </div>
      </Dev>
    ))}
  </Container>
);

Sidebar.propTypes = {
  removeDev: PropTypes.func.isRequired,
  devs: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        username: PropTypes.string,
        avatar: PropTypes.string,
      }),
    ),
  }).isRequired,
};

const mapStateToProps = state => ({
  devs: state.devs,
});

const mapDispatchToProps = dispatch => bindActionCreators(DevActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
