/**
 * Worker Daemon Service
 * Node.js-based background worker system that auto-runs like shell daemons
 *
 * Workers:
 * - map: Codebase mapping (5 min interval)
 * - audit: Security analysis (10 min interval)
 * - optimize: Performance optimization (15 min interval)
 * - consolidate: Memory consolidation (30 min interval)
 * - testgaps: Test coverage analysis (20 min interval)
 */
import { EventEmitter } from 'events';
import { HeadlessWorkerExecutor } from './headless-worker-executor.js';
export type WorkerType = 'ultralearn' | 'optimize' | 'consolidate' | 'predict' | 'audit' | 'map' | 'preload' | 'deepdive' | 'document' | 'refactor' | 'benchmark' | 'testgaps';
interface WorkerConfig {
    type: WorkerType;
    intervalMs: number;
    priority: 'low' | 'normal' | 'high' | 'critical';
    description: string;
    enabled: boolean;
}
interface WorkerState {
    lastRun?: Date;
    nextRun?: Date;
    runCount: number;
    successCount: number;
    failureCount: number;
    averageDurationMs: number;
    isRunning: boolean;
}
interface WorkerResult {
    workerId: string;
    type: WorkerType;
    success: boolean;
    durationMs: number;
    output?: unknown;
    error?: string;
    timestamp: Date;
}
interface DaemonStatus {
    running: boolean;
    pid: number;
    startedAt?: Date;
    workers: Map<WorkerType, WorkerState>;
    config: DaemonConfig;
}
interface DaemonConfig {
    autoStart: boolean;
    logDir: string;
    stateFile: string;
    maxConcurrent: number;
    workerTimeoutMs: number;
    resourceThresholds: {
        maxCpuLoad: number;
        minFreeMemoryPercent: number;
    };
    workers: WorkerConfig[];
}
/**
 * Worker Daemon - Manages background workers with Node.js
 */
export declare class WorkerDaemon extends EventEmitter {
    private config;
    private workers;
    private timers;
    private running;
    private startedAt?;
    private projectRoot;
    private runningWorkers;
    private pendingWorkers;
    private headlessExecutor;
    private headlessAvailable;
    constructor(projectRoot: string, config?: Partial<DaemonConfig>);
    /**
     * Initialize headless executor if Claude Code is available
     */
    private initHeadlessExecutor;
    /**
     * Check if headless execution is available
     */
    isHeadlessAvailable(): boolean;
    /**
     * Get headless executor instance
     */
    getHeadlessExecutor(): HeadlessWorkerExecutor | null;
    /**
     * Setup graceful shutdown handlers
     */
    private setupShutdownHandlers;
    /**
     * Check if system resources allow worker execution
     */
    private canRunWorker;
    /**
     * Process pending workers queue
     */
    private processPendingWorkers;
    private initializeWorkerStates;
    /**
     * Start the daemon and all enabled workers
     */
    start(): Promise<void>;
    /**
     * Stop the daemon and all workers
     */
    stop(): Promise<void>;
    /**
     * Get daemon status
     */
    getStatus(): DaemonStatus;
    /**
     * Schedule a worker to run at intervals with staggered start
     */
    private scheduleWorker;
    /**
     * Execute a worker with concurrency control (P0 fix)
     */
    private executeWorkerWithConcurrencyControl;
    /**
     * Execute a worker with timeout protection
     */
    private executeWorker;
    /**
     * Run a function with timeout (P1 fix)
     */
    private runWithTimeout;
    /**
     * Run the actual worker logic
     */
    private runWorkerLogic;
    private runMapWorker;
    /**
     * Local audit worker (fallback when headless unavailable)
     */
    private runAuditWorkerLocal;
    /**
     * Local optimize worker (fallback when headless unavailable)
     */
    private runOptimizeWorkerLocal;
    private runConsolidateWorker;
    /**
     * Local testgaps worker (fallback when headless unavailable)
     */
    private runTestGapsWorkerLocal;
    /**
     * Local predict worker (fallback when headless unavailable)
     */
    private runPredictWorkerLocal;
    /**
     * Local document worker (fallback when headless unavailable)
     */
    private runDocumentWorkerLocal;
    /**
     * Local ultralearn worker (fallback when headless unavailable)
     */
    private runUltralearnWorkerLocal;
    /**
     * Local refactor worker (fallback when headless unavailable)
     */
    private runRefactorWorkerLocal;
    /**
     * Local deepdive worker (fallback when headless unavailable)
     */
    private runDeepdiveWorkerLocal;
    /**
     * Local benchmark worker
     */
    private runBenchmarkWorkerLocal;
    /**
     * Local preload worker
     */
    private runPreloadWorkerLocal;
    /**
     * Manually trigger a worker
     */
    triggerWorker(type: WorkerType): Promise<WorkerResult>;
    /**
     * Enable/disable a worker
     */
    setWorkerEnabled(type: WorkerType, enabled: boolean): void;
    /**
     * Save daemon state to file
     */
    private saveState;
    /**
     * Log message
     */
    private log;
}
/**
 * Get or create daemon instance
 */
export declare function getDaemon(projectRoot?: string): WorkerDaemon;
/**
 * Start daemon (for use in session-start hook)
 */
export declare function startDaemon(projectRoot: string): Promise<WorkerDaemon>;
/**
 * Stop daemon
 */
export declare function stopDaemon(): Promise<void>;
export default WorkerDaemon;
//# sourceMappingURL=worker-daemon.d.ts.map