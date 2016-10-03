const preview = (contact) => {
  return{
    id: contact._id,
    name: contact.name.first + " " + contact.name.last,
    phone: contact.phone,
    avatar: contact.picture
  }
}

class ContactsService{
  getContactPreviews(offset,max){
    return this.contacts.map(c => preview(c)).slice(offset,offset+max)
  }

  constructor(){
    this.contacts = [
      {
        "_id": "57ee79e2cc08a67d804678ef",
        "picture": "http://placehold.it/32x32",
        "birthday": "13/5/1960",
        "name": {
          "first": "Bobbie",
          "last": "Lott"
        },
        "company": "TSUNAMIA",
        "email": "bobbie.lott@tsunamia.io",
        "phone": "+1 (891) 447-3238",
        "mobilePhone": "+1 (986) 541-2589",
        "address": "296 Hill Street, Bakersville, Kentucky, 2892",
        "notes": "Laboris irure labore dolore dolor elit cupidatat et elit consectetur eu aute commodo. Aliqua aute eu veniam nulla adipisicing magna sit Lorem tempor adipisicing aliquip cillum. Sunt consectetur quis nostrud id nisi deserunt. In sunt adipisicing ea minim qui duis id mollit cillum. Pariatur incididunt ut excepteur cillum ipsum sit enim officia labore do quis aliqua.",
        "tags": [
          "voluptate",
          "eiusmod",
          "id",
          "officia",
          "sunt"
        ]
      }
    ]
  }
}

export default new ContactsService();
