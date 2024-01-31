import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main>
			<Button>Botão</Button>
		</main>
	)
}
