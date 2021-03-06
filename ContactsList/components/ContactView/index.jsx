import React, { PropTypes } from 'react';
import styles from './styles.css'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {lightBlue500,grey50} from 'material-ui/styles/colors';

class ContactView extends React.Component{

  getBackButton(){
    return(
      <FlatButton
        label="Back"
        primary={true}
        onClick={this.props.onContactViewClose}
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

  getChipTag(text){
    return(
      <div className={styles.tag}>
        <Chip
          backgroundColor={lightBlue500}
          labelColor={grey50}
        >
          {text}
        </Chip>
      </div>
    )
  }

  getChipTags(texts){
    return texts.map(t => this.getChipTag(t))
  }

  render(){

    const {
      birthday,
      name,
      picture,
      phone,
      mobilePhone,
      address,
      notes
    } = this.props.contact

    const theTags = this.props.contact.tags

    return(
      <Dialog
          modal={false}
          open={this.props.open}
          actions={[this.getBackButton()]}
          contentStyle={{maxWidth:'700px'}}
          autoScrollBodyContent={true}
      >
        <Card>
          <CardTitle>
            <Avatar
              src={picture}
              size={80}
            />
          </CardTitle>
          <CardText>
            {this.getTextField("First Name",name? name.first:"")}
            {this.getTextField("Last Name",name? name.last:"")}
            {this.getTextField("Birthdate",birthday)}
            {this.getTextField("Address",address)}
            {this.getTextField("Phone",phone)}
            {this.getTextField("Mobile Phone",mobilePhone)}
            {this.getTextField("Notes",notes,true)}
          </CardText>
          <div className = {styles.tags}>
            {this.getChipTags(theTags?theTags:[])}
          </div>
        </Card>
      </Dialog>
    )
  }

}

export default ContactView
