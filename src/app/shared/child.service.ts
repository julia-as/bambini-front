import { Child } from '../Children/child.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


// Annotation @Injectable() is needed as soon as a service uses another service (here: HttpService)
@Injectable({
	providedIn: 'root'
})
export class ChildService {

	url = 'http://localhost:8080';
	private children: Child[];
	childrenChanged: Child[];

	// children: Child[] = [
	// 	new Child(
	// 		2,
	// 		"Herzog",
	// 		"Greta",
	// 		"5@ScopedCredentialInfo.dsf",
	// 		"Hausstrasse 6",
	// 		45632,
	// 		"Hausenhasen",
	// 		"+49121235454",
	// 		new Date(3 - 7 - 2020),
	// 		"female",
	// 		"Hasen",
	// 		"../../assets/puppy1.jpg"),
	// 	new Child(
	// 		3,
	// 		"Baerbock",
	// 		"Lasse",
	// 		"1@ScopedCredentialInfo.dsf",
	// 		"Hausstrasse 2",
	// 		12345,
	// 		"Hausenhasen",
	// 		"+491235476874",
	// 		new Date(3 - 4 - 2020),
	// 		"male",
	// 		"Igel",
	// 		"../../../assets/crossfit.jpg")];


	constructor(private http: HttpClient) { }


	// Initially get all children from database
	setAllChildren(children: Child[]) {
		this.children = children;
		// this.childrenChanged.next(this.children.slice();
	}

	getAllChildren() {
		return this.http.get<Child[]>(this.url + "/children")
			.pipe(
				map(response => {
					const childArray = [];
					for (const id in childArray) {
						childArray.push(response(id));
					}
					// return children.map(child => {
					// ...children
				});
	});
		)
			.subscribe(children => {
		this.setAllChildren(children);
			});
	}

getChild(id) {
	return this.http.get<Child>(this.url + "/child/" + id)
		.subscribe(response =>
			console.log(response));
}

addChild(child: Child) {
	console.log("addChild(): " + child.toString);
	this.http.post(this.url + "/children", child)
		.pipe(
			map((res: any) => {
				res['playload'] = res;
				return res['playload'];
			}));
}

deleteChild(childId: number) {
	// this.childrenChanged.next(this.children.slice();
}

updateChild(child: Child) {
	// this.childrenChanged.next(this.children.slice();
}

}