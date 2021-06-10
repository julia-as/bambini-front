import { Child } from '../Children/child.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

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

	addChild(child: Child) {

	}

	deleteChild(childId: number) {

	}

	updateChild(child: Child) {

	}

}