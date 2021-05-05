export class Child {

	public firstName: string = "Hello";
	public lastName: string = "World";
	public email: string = "hello@world.org";
	public street: string = "lifesaver street";
	public zip: number;
	public city: string = "Paradise";
	public phone: string = "4840653410";
	public dob: Date;
	public gender: string = "female";
	public group: string;
	public imagePath: string;

	constructor(lastName: string, firstName: string, dob: Date, imagePath: string) {
		this.lastName = lastName;
		this.firstName = firstName;
		this.dob = dob;
		this.imagePath = imagePath;
	}

	toString() {
		console.log("Last name: " + this.lastName + "\n" +
			"First name: " + this.firstName + "\n" +
			"Email: " + this.email + "\n" +
			"Street: " + this.street + "\n" +
			"ZIP: " + this.zip + "\n" +
			"City: " + this.city + "\n" +
			"Phone: " + this.phone + "\n" +
			"DoB: " + this.dob + "\n" +
			"Gender: " + this.gender);
}

	// getFirstName() {
	//   return this.firstName;
	// }

	// setFirstName(firstName) {
	//   this.firstName = firstName;
	// }

	// getLastName() {
	//   return this.lastName;
	// }

	// setLastName(lastName) {
	//   this.lastName = lastName;
	// }

	// getEmail() {
	//   return this.email;
	// }

	// setEmail(email) {
	//   this.email = email;
	// }

	// getStreet() {
	//   return this.street;
	// }

	// setStreet(street) {
	//   this.street = street;
	// }

	// getZip() {
	//   return this.zip;
	// }

	// setZip(zip) {
	//   this.zip = zip;
	// }

	// getCity() {
	//   return this.city;
	// }

	// setCity(city) {
	//   this.city = city;
	// }

	// getPhone() {
	//   return this.phone;
	// }

	// setPhone(phone) {
	//   this.phone = phone;
	// }

	// getDob() {
	//   return this.dob;
	// }

	// setDob(dob) {
	//   this.dob = dob;
	// }

}