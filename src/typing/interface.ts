import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface Category {
	name: string;
	iconName: IconDefinition;
	iconColor: string;
}

export interface Food {
	id: number;
	name: string;
	description: string;
	image: string;
	price: number;
	category: string;
	amount?: number;
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

export interface Purchase {
	image: string;
	title: string;
	amount: number;
	price: number;
}
