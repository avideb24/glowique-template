import { metadataConfig } from "@/config/metadataConfig";

export const metadata = metadataConfig.cart;

export default function CartLayout({ children }) {
    return <>{children}</>;
}
