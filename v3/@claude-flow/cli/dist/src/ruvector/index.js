/**
 * RuVector Integration Module for Claude Flow CLI
 *
 * Provides integration with @ruvector packages for:
 * - Q-Learning based task routing
 * - Mixture of Experts (MoE) routing
 * - AST code analysis
 * - Diff classification
 * - Coverage-based routing
 * - Graph boundary analysis
 * - Flash Attention for faster similarity computations
 *
 * @module @claude-flow/cli/ruvector
 */
export { QLearningRouter, createQLearningRouter } from './q-learning-router.js';
export { MoERouter, getMoERouter, resetMoERouter, createMoERouter, EXPERT_NAMES, NUM_EXPERTS, INPUT_DIM, HIDDEN_DIM, } from './moe-router.js';
export { ASTAnalyzer, createASTAnalyzer } from './ast-analyzer.js';
export { DiffClassifier, createDiffClassifier, 
// MCP tool exports
analyzeDiff, analyzeDiffSync, assessFileRisk, assessOverallRisk, classifyDiff, suggestReviewers, getGitDiffNumstat, getGitDiffNumstatAsync, 
// Cache control
clearDiffCache, clearAllDiffCaches, } from './diff-classifier.js';
export { CoverageRouter, createCoverageRouter, 
// MCP tool exports
coverageRoute, coverageSuggest, coverageGaps, 
// Cache utilities (NEW)
clearCoverageCache, getCoverageCacheStats, } from './coverage-router.js';
export { coverageRouterTools, hooksCoverageRoute, hooksCoverageSuggest, hooksCoverageGaps } from './coverage-tools.js';
export { buildDependencyGraph, analyzeGraph, analyzeMinCutBoundaries, analyzeModuleCommunities, detectCircularDependencies, exportToDot, loadRuVector, fallbackMinCut, fallbackLouvain, 
// Cache utilities (NEW)
clearGraphCaches, getGraphCacheStats, } from './graph-analyzer.js';
export { FlashAttention, getFlashAttention, resetFlashAttention, computeAttention, benchmarkFlashAttention, getFlashAttentionSpeedup, } from './flash-attention.js';
export { LoRAAdapter, getLoRAAdapter, resetLoRAAdapter, createLoRAAdapter, adaptEmbedding, trainLoRA, getLoRAStats, DEFAULT_RANK, DEFAULT_ALPHA, INPUT_DIM as LORA_INPUT_DIM, OUTPUT_DIM as LORA_OUTPUT_DIM, } from './lora-adapter.js';
export { ModelRouter, getModelRouter, resetModelRouter, createModelRouter, routeToModel, routeToModelFull, analyzeTaskComplexity, getModelRouterStats, recordModelOutcome, MODEL_CAPABILITIES, COMPLEXITY_INDICATORS, } from './model-router.js';
/**
 * Check if ruvector packages are available
 */
export async function isRuvectorAvailable() {
    try {
        await import('@ruvector/core');
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Get ruvector version if available
 */
export async function getRuvectorVersion() {
    try {
        const ruvector = await import('@ruvector/core');
        return ruvector.version || '1.0.0';
    }
    catch {
        return null;
    }
}
//# sourceMappingURL=index.js.map