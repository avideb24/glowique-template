import { metadataConfig } from "@/config/metadataConfig";

export const metadata = metadataConfig.collections;

export default function CollectionsLayout({ children }) {
    return <>{children}</>;
}
