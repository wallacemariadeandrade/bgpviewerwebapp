import PrefixDetails from "./prefixDetails";

export default class IpDetails {
    ipAddress?: string;
    rirAllocationPrefix?: string;
    countryCode?: string;
    ptrRecord?: string;
    relatedPrefixes?: PrefixDetails[];
}