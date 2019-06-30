import React, { Component } from 'react';
import { Button } from 'reactstrap';

import Alert from './components/organisms/Alert'
import DropDown from './components/organisms/Button DropDown'
import ButtonGroup from './components/organisms/Button Group'
class App extends Component {
  render() {
    return (
      <div>
        <div>my Name is Adrian</div>
        <Button color="primary"> tombol utama</Button>{' '}
        <Button color="secondary"> tombol kedua</Button>{' '}
        <Button color="success"> tombol success</Button>{' '}
        <Button color="info"> tombol info</Button>{' '}
        <Button color="warning"> tombol peringatan</Button>{' '}
        <Button color="danger"> tombol merah</Button>{' '}
        <Button color="link"> tombol link</Button>{' '}
        <Alert/>
        <DropDown/>{' '}
        <DropDown/>{' '}
        <DropDown/>{' '}
        <DropDown/>{' '}
        <DropDown/>{' '}
        <ButtonGroup/>

      </div>
    );
  }
}

export default App;
