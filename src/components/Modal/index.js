import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DevActions } from '../../store/ducks/devs';

import {
  Overlay, Container, Content, Form,
} from './styles';

class Modal extends Component {
  static propTypes = {
    toggleClick: PropTypes.func.isRequired,
    addDevRequest: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  };

  state = {
    userInput: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { userInput } = this.state;
    const {
      toggleClick, addDevRequest, latitude, longitude,
    } = this.props;

    toggleClick();
    const faveDev = userInput;
    const lat = latitude;
    const lng = longitude;
    addDevRequest(faveDev, lat, lng);
    this.setState({ userInput: '' });
  };

  render() {
    const { showModal, toggleClick } = this.props;
    const { userInput } = this.state;

    return (
      <Fragment>
        {showModal && (
          <Overlay>
            <Container>
              <Content>
                <p>Adicionar novo usuário</p>
                <Form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    placeholder="Usuário no Github"
                    value={userInput}
                    onChange={e => this.setState({ userInput: e.target.value })}
                  />
                  <div>
                    <button onClick={toggleClick} id="cancel" type="button">
                      Cancelar
                    </button>
                    <button id="save" type="submit">
                      Salvar
                    </button>
                  </div>
                </Form>
              </Content>
            </Container>
          </Overlay>
        )}
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(DevActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Modal);
