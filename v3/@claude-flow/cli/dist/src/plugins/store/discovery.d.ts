/**
 * Plugin Discovery Service
 * Discovers plugin registries via IPNS and fetches from IPFS
 * Parallel implementation to pattern store for plugins
 */
import type { PluginRegistry, KnownPluginRegistry, PluginStoreConfig } from './types.js';
/**
 * Default plugin store configuration
 */
export declare const DEFAULT_PLUGIN_STORE_CONFIG: PluginStoreConfig;
/**
 * Discovery result
 */
export interface PluginDiscoveryResult {
    success: boolean;
    registry?: PluginRegistry;
    cid?: string;
    source?: string;
    fromCache?: boolean;
    error?: string;
}
/**
 * Plugin Discovery Service
 */
export declare class PluginDiscoveryService {
    private config;
    private cache;
    constructor(config?: Partial<PluginStoreConfig>);
    /**
     * Discover plugin registry via IPNS
     */
    discoverRegistry(registryName?: string): Promise<PluginDiscoveryResult>;
    /**
     * Create demo plugin registry
     */
    private createDemoRegistry;
    /**
     * Get demo plugins
     */
    private getDemoPlugins;
    /**
     * Verify registry signature
     */
    private verifyRegistrySignature;
    /**
     * List available registries
     */
    listRegistries(): KnownPluginRegistry[];
    /**
     * Add a new registry
     */
    addRegistry(registry: KnownPluginRegistry): void;
    /**
     * Remove a registry
     */
    removeRegistry(name: string): boolean;
    /**
     * Clear cache
     */
    clearCache(): void;
    /**
     * Get cache statistics
     */
    getCacheStats(): {
        entries: number;
        registries: string[];
    };
}
/**
 * Create discovery service with default config
 */
export declare function createPluginDiscoveryService(config?: Partial<PluginStoreConfig>): PluginDiscoveryService;
//# sourceMappingURL=discovery.d.ts.map