import type { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};
export const metadata: Metadata = {
    title: "Shipment Details",
    description: "Shipment Details",
  };

export default function Layout({ children }: LayoutProps) {
    
    return (
            <body className='relative w-screen h-screen bg-custom-white px-8'>
                {children}
            </body>
    );
}
