// Manages kita groups and provides list of existing groups.

import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GroupService {
	
	groups = ["Hasen", "Igel", "Fuechse"];

	addGroup(groupName: string) {

	}

	updateGroup(groupName: string, newGroupName: string) {
		
	}
}