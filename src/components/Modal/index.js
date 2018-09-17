import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DevActions from '../../store/actions/devs';
import {
  Overlay, Container, Content, Form,
} from './styles';

class Modal extends Component {
  state = {
    userInput: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.toggleClick();
    const faveDev = this.state.userInput;
    const latitude = this.props.latitude;
    const longitude = this.props.longitude;
    this.props.addDevRequest(faveDev, latitude, longitude);
    this.setState({ userInput: '' });
  };

  render() {
    const { showModal } = this.props;

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
                    value={this.state.userInput}
                    onChange={e => this.setState({ userInput: e.target.value })}
                  />
                  <div>
                    <button onClick={this.props.toggleClick} id="cancel" type="button">
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
