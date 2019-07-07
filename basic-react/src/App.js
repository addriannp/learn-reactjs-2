import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {HashRouter, NavLink, Route, Switch} from 'react-router-dom';

import Alert from './components/organisms/Alert'
import DropDown from './components/organisms/Button DropDown'
import ButtonGroup from './components/organisms/Button Group'
import Form from './components/organisms/Form'
import FormGrid from './components/organisms/Form Grid'
import Modal from './components/organisms/Modal'
import Card from './components/molecules/Card';
class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <header>
                        <NavLink to="/alert">Alert</NavLink>{` `}
                        <NavLink to="/form">Form</NavLink>{` `}
                        <NavLink to="/modal">Modal</NavLink>{` `}
                        <NavLink to="/formgrid">card</NavLink>
                    </header>
                    <Switch>
                        <Route exact path="/alert" component={Alert}/>
                        <Route path="/form" component={Form}/>
                        <Route path="/modal" component={Modal}/>
                        <Route path="/formgrid" component={FormGrid}/>
                    </Switch>
                </div>
                {/* <div>
                    <div>my Name is Adrian</div>
                    <Button color="primary">
                        tombol utama</Button>{' '}
                    <Button color="secondary">
                        tombol kedua</Button>{' '}
                    <Button color="success">
                        tombol success</Button>{' '}
                    <Button color="info">
                        tombol info</Button>{' '}
                    <Button color="warning">
                        tombol peringatan</Button>{' '}
                    <Button color="danger">
                        tombol merah</Button>{' '}
                    <Button color="link">
                        tombol link</Button>{' '}
                    <Alert/>
                    <DropDown/>{' '}
                    <DropDown/>{' '}
                    <DropDown/>{' '}
                    <DropDown/>{' '}
                    <DropDown/>{' '}
                    <ButtonGroup/>
                    <Form/>
                    <FormGrid/>
                    <Modal/>
                </div>
                 */}
            </HashRouter>
        );
    }
}

export default App;
