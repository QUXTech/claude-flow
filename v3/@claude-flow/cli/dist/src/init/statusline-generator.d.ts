/**
 * Statusline Configuration Generator
 * Creates statusline configuration for V3 progress display
 */
import type { InitOptions } from './types.js';
/**
 * Generate statusline configuration script
 * Matches the advanced format:
 * ▊ Claude Flow V3 ● user  │  ⎇ v3  │  Opus 4.5
 * ─────────────────────────────────────────────────────
 * 🏗️  DDD Domains    [●●●●●]  5/5    ⚡ 1.0x → 2.49x-7.47x
 * 🤖 Swarm  ◉ [12/15]  👥 0    🟢 CVE 3/3    💾 5177MB    📂  56%    🧠  30%
 * 🔧 Architecture    DDD ●100%  │  Security ●CLEAN  │  Memory ●AgentDB  │  Integration ●
 */
export declare function generateStatuslineScript(options: InitOptions): string;
/**
 * Generate statusline hook for shell integration
 */
export declare function generateStatuslineHook(options: InitOptions): string;
//# sourceMappingURL=statusline-generator.d.ts.map