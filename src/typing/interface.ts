import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface Category {
	name: string;
	iconName: IconDefinition;
	iconColor: string;
}

export interface Food {
	name: string;
	description: string;
	image: string;
	isSelected: boolean;
	price: number;
}

export interface UserLogin {
	username: string;
	password: string;
}

export interface UserSignup {
	username: string;
	password: string;
	passwordConfirm: string;
}
