import { useState, useEffect } from 'react';

export type PerformanceTier = 'high' | 'mid' | 'low';

/**
 * Performance detection hook for device-aware optimization.
 * 
 * Detects device capability tier based on:
 * - Hardware concurrency (CPU cores)
 * - Device memory (RAM)
 * - Android version (older = weaker)
 * - User preference for reduced motion
 * 
 * Tiers:
 * - HIGH: 8+ cores, 6GB+ RAM - Full animations, all effects
 * - MID: 4-7 cores, 4-6GB RAM - Simplified animations, reduced effects
 * - LOW: ≤4 cores, <4GB RAM, or old Android - Minimal animations, no heavy effects
 * 
 * @returns {{ tier: PerformanceTier, isLow: boolean, isMid: boolean, isHigh: boolean }}
 */
export const usePerformance = () => {
    const [tier, setTier] = useState<PerformanceTier>('high');

    useEffect(() => {
        const detectTier = (): PerformanceTier => {
            // Check user preference for reduced motion (always respect this)
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReducedMotion) return 'low';

            // Get hardware specs
            const cores = navigator.hardwareConcurrency || 4;
            const ram = (navigator as any).deviceMemory || 4;

            // Check for very old/weak Android devices
            const isVeryOldAndroid = /Android [4-9]\./.test(navigator.userAgent);
            const isOldAndroid = /Android 1[0-1]/.test(navigator.userAgent);

            // LOW tier: Extremely weak devices
            // ≤2 cores, <3GB RAM, or Android 4-9, or Android 10-11 with low specs
            if (
                cores <= 2 ||
                ram < 3 ||
                isVeryOldAndroid ||
                (isOldAndroid && (cores <= 4 || ram < 4))
            ) {
                return 'low';
            }

            // MID tier: Budget/mid-range devices
            // 3-6 cores, 3-6GB RAM, or Android 12 with modest specs
            if (
                cores <= 6 ||
                ram <= 6 ||
                /Android 1[2-3]/.test(navigator.userAgent)
            ) {
                return 'mid';
            }

            // HIGH tier: Flagship/high-end devices
            // 7+ cores, 6GB+ RAM
            return 'high';
        };

        setTier(detectTier());

        // Listen for changes in reduced motion preference
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handleChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                setTier('low');
            } else {
                setTier(detectTier());
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return {
        tier,
        isLow: tier === 'low',
        isMid: tier === 'mid',
        isHigh: tier === 'high',
        // Legacy compatibility - returns true for mid and low tiers
        isLowPower: tier === 'low' || tier === 'mid'
    };
};

/**
 * Static check for SSR/initial render optimization.
 * Use this for CSS class decisions that don't need reactivity.
 */
export const getInitialPerformanceTier = (): PerformanceTier => {
    if (typeof window === 'undefined') return 'high';

    const cores = navigator.hardwareConcurrency || 4;
    const ram = (navigator as any).deviceMemory || 4;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || cores <= 2 || ram < 3) return 'low';
    if (cores <= 6 || ram <= 6) return 'mid';
    return 'high';
};

export default usePerformance;
