import { Child } from '../Children/child.model';


export class ChildService {

	children: Child[] = [
		new Child(2, "Herzog", "Greta", new Date(1 - 1 - 2019), "../../assets/puppy1.jpg"),
		new Child(3, "Baerbock", "Lasse", new Date(3 - 4 - 2020), "../../../assets/crossfit.jpg")];

		addChild(child: Child){

		}

		deleteChild(childId: number){

		}

		updateChild(child: Child) {

		}

}