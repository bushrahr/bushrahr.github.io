"use client"
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { usePathname, useRouter } from '@/navigation';
import { useParams } from 'next/navigation';

const languages = [
	{
		code: 'en',
		label: 'English',
	},
	{
		code: 'ar',
		label: 'Arabic',
	},
	{
		code: 'hi',
		label: 'Hindi',
	}
]
export default function Language() {
	const [age, setAge] = useState('');

	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();




	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
		// @ts-ignore
		router.replace(pathname, {locale: event.target.value});
		// router.replace(
		// 	// @ts-expect-error -- TypeScript will validate that only known `params`
		// 	// are used in combination with a given `pathname`. Since the two will
		// 	// always match for the current route, we can skip runtime checks.
		// 	{pathname, params},
		// 	{locale: event.target.value})
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Language</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={age}
					label="Language"
					onChange={handleChange}
				>

					{
						languages.map((lang) => <MenuItem key={lang.code} value={lang.code}>{lang.label}</MenuItem>)
					}
					
				</Select>
			</FormControl>
		</Box>
	);
}