import { Child } from '../Children/child.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// Annotation @Injectable() is needed as soon as a service uses another service (here: HttpService)
@Injectable({
	providedIn: 'root'
})
export class ChildService {

	url = 'http://localhost:8080/';

	children: Child[] = [
		new Child(
			2,
			"Herzog",
			"Greta",
			"5@ScopedCredentialInfo.dsf",
			"Hausstrasse 6",
			45632,
			"Hausenhasen",
			"+49121235454",
			new Date(3 - 7 - 2020),
			"female",
			"Hasen",
			"../../assets/puppy1.jpg"),
		new Child(
			3,
			"Baerbock",
			"Lasse",
			"1@ScopedCredentialInfo.dsf",
			"Hausstrasse 2",
			12345,
			"Hausenhasen",
			"+491235476874",
			new Date(3 - 4 - 2020),
			"male",
			"Igel",
			"../../../assets/crossfit.jpg")];


	constructor(private http: HttpClient) { }

	getAllChildren() {
		return this.http.get<Child[]>(this.url + "/children");
		// .subscribe(response => {
		// 	this.children.push;
		// 	console.log(response)});
	}

	getChild(id) {
		return this.http.get<Child>(this.url + "/child/" + id)
		.subscribe(response =>
			console.log(response));
	}

	addChild(child: Child) {
		this.http.post(this.url + "/children", child).subscribe;
	}

	deleteChild(childId: number) {

	}

	updateChild(child: Child) {

	}

}