import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  firstName: String = "Hello";
  lastName: String = "World";
  email: String = "hello@world.org";
  street: String = "lifesaver street";
  zip: Number = 98765;
  city: String = "Paradise";
  phone: String = "4840653410";
  dob: Date = new Date('01.01.2018');
  showInputField: Boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  onNewChild() {
    this.showInputField = true;
  }

  createNewChild(event: Event) {
    this.firstName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
  

  getColour(){
    return this.showInputField === false ? 'lightBlue' : 'lightGrey';
  }

  getFirstName() {
    return this.firstName;
  }

    setFirstName(firstName) {
    this.firstName = firstName;
  }

  getLastName() {
    return this.lastName;
  }

   setLastName(lastName) {
    this.lastName = lastName;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }

  getStreet() {
    return this.street;
  }

  setStreet(street) {
    this.street = street;
  }

  getZip() {
    return this.zip;
  }

  setZip(zip) {
    this.zip = zip;
  }

  getCity() {
    return this.city;
  }

  setCity(city) {
    this.city = city;
  }

  getPhone() {
    return this.phone;
  }

  setPhone(phone) {
    this.phone = phone;
  }

  getDob() {
    return this.dob;
  }

  setDob(dob) {
    this.dob = dob;
  }

}
