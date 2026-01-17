/**
 * Helpers Generator
 * Creates utility scripts in .claude/helpers/
 */
import type { InitOptions } from './types.js';
/**
 * Generate pre-commit hook script
 */
export declare function generatePreCommitHook(): string;
/**
 * Generate post-commit hook script
 */
export declare function generatePostCommitHook(): string;
/**
 * Generate session manager script
 */
export declare function generateSessionManager(): string;
/**
 * Generate agent router script
 */
export declare function generateAgentRouter(): string;
/**
 * Generate memory helper script
 */
export declare function generateMemoryHelper(): string;
/**
 * Generate Windows PowerShell daemon manager
 */
export declare function generateWindowsDaemonManager(): string;
/**
 * Generate Windows batch file wrapper
 */
export declare function generateWindowsBatchWrapper(): string;
/**
 * Generate cross-platform session manager
 */
export declare function generateCrossPlatformSessionManager(): string;
/**
 * Generate all helper files
 */
export declare function generateHelpers(options: InitOptions): Record<string, string>;
//# sourceMappingURL=helpers-generator.d.ts.map