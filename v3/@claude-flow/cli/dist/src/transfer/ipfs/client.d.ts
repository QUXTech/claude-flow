/**
 * IPFS Client Module
 * Low-level IPFS operations for discovery and fetching
 */
/**
 * Resolve IPNS name to CID
 * In production: Use ipfs-http-client or similar
 */
export declare function resolveIPNS(ipnsName: string, gateway?: string): Promise<string | null>;
/**
 * Fetch content from IPFS by CID
 * In production: Use ipfs-http-client or gateway fetch
 */
export declare function fetchFromIPFS<T>(cid: string, gateway?: string): Promise<T | null>;
/**
 * Check if CID is pinned
 */
export declare function isPinned(cid: string, gateway?: string): Promise<boolean>;
/**
 * Get IPFS gateway URL for a CID
 */
export declare function getGatewayUrl(cid: string, gateway?: string): string;
/**
 * Validate CID format
 */
export declare function isValidCID(cid: string): boolean;
/**
 * Generate content hash for verification
 */
export declare function hashContent(content: Buffer): string;
//# sourceMappingURL=client.d.ts.map