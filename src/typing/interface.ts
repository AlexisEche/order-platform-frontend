import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface Category {
	name: string;
	code: string;
	iconName: IconDefinition;
	iconColor: string;
}

export interface Food {
	pk: number;
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
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	password2: string;
}

export interface Purchase {
	image: string;
	title: string;
	amount: number;
	price: number;
}
