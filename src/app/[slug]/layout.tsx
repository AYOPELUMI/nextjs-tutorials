import type {ReactNode} from 'react';
import {Suspense} from "react";
import ShippingInfo from '../../components/ShippingInfo/page';
import EditCommodityInfo from '@/components/EditCommodityInfo/page';

type LayoutProps = {
    children: ReactNode;
};
export const metadata = {
    title: "Shipment Details",
    description: "Shipment Details",
  };

export default function Layout({ children }: LayoutProps) {
    
    return (
            <main className='relative w-screen h-screen bg-custom-white px-8'>
                {children}
                <Suspense fallback={<>Loading ...</>}>
				    <ShippingInfo />
                    <EditCommodityInfo />
			    </Suspense>
            </main>
    );
}
