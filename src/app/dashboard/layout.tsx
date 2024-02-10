import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Suspense} from "react";
import NewShipmentModal from '@/components/NewShipmentModal/NewShipmentModal';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Create Next App with TypeScript, Tailwind CSS, NextAuth, Prisma, tRPC, and more.',
}

export default function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className='bg-cutom-white px-6 py-4'>{children}</body>
			<Suspense fallback={<>Loading ...</>}>
				<NewShipmentModal />
			</Suspense>
		</html>
	)
}
