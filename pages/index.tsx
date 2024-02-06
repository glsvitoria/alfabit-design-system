import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/Button'
import { Switch } from '@/components/Switch'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<div className="h-screen mx-auto my-0 w-4/5 flex justify-center">
			<div className="w-2/4 flex flex-col gap-1 justify-start">
				<Switch />
			</div>
		</div>
	)
}
