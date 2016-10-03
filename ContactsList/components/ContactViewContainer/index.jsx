import React, { PropTypes } from 'react';
import styles from './styles.css'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

class ContactView extends React.Component{

  constructor(){
    super();
    this.state = {
      open: false,
    };
  }

  open(){
    this.setState({open: true});

  }

  close(){
    this.setState({open: false});
  }

  getBackButton(){
    return(
      <FlatButton
        label="Back"
        primary={true}
        onClick={this.close.bind(this)}
      />
    )
  }

  getTextField(label,value,multiline = false){
    return(
      <div>
        <TextField
          floatingLabelText={label}
          value={value}
          multiLine={multiline}
          rows={multiline?2:1}
          rowsMax={4}
        />
      </div>
    )
  }

  getChip(text){
    return(
      <Chip>{text}</Chip>
    )
  }

  render(){

    const {
      email,
      picture
    } = this.props.contact

    return(
      <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={() => alert('le')}
          actions={[this.getBackButton()]}
          contentStyle={{maxWidth:'700px'}}
      >
        <Card>
          <CardTitle>
            <Avatar
              src={picture}
              size={80}
            />
          </CardTitle>
          <CardText>
            {this.getTextField("Nombre","value")}
            {this.getTextField("Nombre","MultiLine with rows: 2 and rowsMax: 4",true)}
          </CardText>
          <div className = {styles.tags}>
            {this.getChip("lala")}
          </div>
        </Card>
      </Dialog>
    )
  }

}

export default ContactView
