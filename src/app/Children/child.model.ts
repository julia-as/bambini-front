import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Child {

	public id: number;
	public lastName: string;
	public firstName: string;
	public email: string;
	public street: string;
	public zip: number;
	public city: string;
	public phone: string;
	public dob: Date;
	public gender: string;
	public group: string;
	public imagePath: string;

	constructor(
		id: number,
		lastName: string,
		firstName: string,
		email?: string,
		street?: string,
		zip?: number,
		city?: string,
		phone?: string,
		dob?: Date,
		gender?: string,
		group?: string,
		imagePath?: string) {
		this.id = id;
		this.lastName = lastName;
		this.firstName = firstName;
		this.email = email;
		this.street = street;
		this.zip = zip;
		this.city = city;
		this.phone = phone;
		this.dob = dob;
		this.gender = gender;
		this.group = group;
		this.imagePath = imagePath;
	}

	toString() {
		return ("ID: " + this.id + "\n" +
			"Last name: " + this.lastName + "\n" +
			"First name: " + this.firstName + "\n" +
			"Email: " + this.email + "\n" +
			"Street: " + this.street + "\n" +
			"ZIP: " + this.zip + "\n" +
			"City: " + this.city + "\n" +
			"Phone: " + this.phone + "\n" +
			"DoB: " + this.dob + "\n" +
			"Gender: " + this.gender + "\n" +
			"Group: " + this.group + "\n" +
			"Image path: " + this.imagePath);
	}
}