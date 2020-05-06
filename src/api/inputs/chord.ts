export enum Fondamental {
	A = 'A',
	B = 'B',
	C = 'C',
	D = 'D',
	E = 'E',
	F = 'F',
	G = 'G',
	A_SHARP = 'A#',
	C_SHARP = 'C#',
	D_SHARP = 'D#',
	F_SHARP = 'F#',
	G_SHARP = 'G#',
	A_FLAT = 'Ab',
	B_FLAT = 'Bb',
	D_FLAT = 'Db',
	E_FLAT = 'Eb',
	G_FLAT = 'Gb',
};

export default interface Chord {
	fondamental: Fondamental;
	minor: boolean;
	qualities: string;
	position: number;
};