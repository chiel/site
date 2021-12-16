import { differenceInYears } from 'date-fns';

const DOB = new Date('1986-11-30');

export default function Age() {
	return differenceInYears(new Date(), DOB);
}
