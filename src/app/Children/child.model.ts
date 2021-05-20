export class Child {

	public id: number = 1;
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

	constructor(id: number, lastName: string, firstName: string, dob: Date, imagePath: string) {
		this.id = id;
		this.lastName = lastName;
		this.firstName = firstName;
		this.dob = dob;
		this.imagePath = imagePath;
	}

	toString() {
		console.log("ID: " + this.id + "\n" +
			"Last name: " + this.lastName + "\n" +
			"First name: " + this.firstName + "\n" +
			"Email: " + this.email + "\n" +
			"Street: " + this.street + "\n" +
			"ZIP: " + this.zip + "\n" +
			"City: " + this.city + "\n" +
			"Phone: " + this.phone + "\n" +
			"DoB: " + this.dob + "\n" +
			"Gender: " + this.gender);
	}
}