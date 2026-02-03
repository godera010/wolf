import { Variants } from 'framer-motion';
import type { PerformanceTier } from '@/hooks/usePerformance';

/**
 * Animation variants that adapt based on device performance tier.
 * 
 * Tiers:
 * - HIGH: Full animations with springs, staggers, and all effects
 * - MID: Simplified animations (shorter duration, no springs)
 * - LOW: Minimal/no animations (opacity only, instant transitions)
 */

/**
 * Fade-in animation variant (universal, works on all devices)
 */
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3, ease: 'easeOut' }
    }
};

/**
 * Get stagger container variants based on performance tier.
 */
export const getStaggerContainer = (tier: PerformanceTier): Variants => {
    if (tier === 'low') {
        return {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.1 } }
        };
    }

    if (tier === 'mid') {
        return {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.05 }
            }
        };
    }

    // HIGH tier
    return {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };
};

/**
 * Get fade-up animation for list items.
 */
export const getFadeInUp = (tier: PerformanceTier): Variants => {
    if (tier === 'low') {
        return {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.1 } }
        };
    }

    if (tier === 'mid') {
        return {
            hidden: { opacity: 0, y: 15 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: 'easeOut' }
            }
        };
    }

    // HIGH tier
    return {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };
};

/**
 * Get slide-in animation for mobile panels/modals.
 */
export const getSlideIn = (tier: PerformanceTier, direction: 'up' | 'down' | 'left' | 'right' = 'up'): Variants => {
    const offsets = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 }
    };

    if (tier === 'low') {
        // LOW: Instant appearance, no animation
        return {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.05 } },
            exit: { opacity: 0, transition: { duration: 0.05 } }
        };
    }

    if (tier === 'mid') {
        // MID: Fast fade with minimal slide
        return {
            hidden: { opacity: 0, ...Object.fromEntries(Object.entries(offsets[direction]).map(([k, v]) => [k, v / 2])) },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 0.15, ease: 'easeOut' }
            },
            exit: {
                opacity: 0,
                transition: { duration: 0.1 }
            }
        };
    }

    // HIGH tier: Full animation
    return {
        hidden: { opacity: 0, ...offsets[direction] },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.3, ease: 'easeOut' }
        },
        exit: {
            opacity: 0,
            ...offsets[direction],
            transition: { duration: 0.2 }
        }
    };
};

/**
 * Get mobile bottom sheet animation.
 */
export const getMobileSheetVariants = (tier: PerformanceTier): Variants => {
    if (tier === 'low') {
        // LOW: Instant appearance
        return {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.05 } },
            exit: { opacity: 0, transition: { duration: 0.05 } }
        };
    }

    if (tier === 'mid') {
        // MID: Fast fade only
        return {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.15 } },
            exit: { opacity: 0, transition: { duration: 0.1 } }
        };
    }

    // HIGH tier: Full slide animation
    return {
        hidden: { y: '100%', opacity: 0.8 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'tween', ease: 'circOut', duration: 0.3 }
        },
        exit: { y: '100%', transition: { duration: 0.2 } }
    };
};

/**
 * Get height expansion animation for dropdowns/accordions.
 */
export const getHeightExpand = (tier: PerformanceTier): Variants => {
    if (tier === 'low') {
        // LOW: Instant expand, no animation
        return {
            hidden: { opacity: 0, height: 0, overflow: 'hidden' },
            visible: { opacity: 1, height: 'auto', overflow: 'visible', transition: { duration: 0.05 } },
            exit: { opacity: 0, height: 0, overflow: 'hidden', transition: { duration: 0.05 } }
        };
    }

    if (tier === 'mid') {
        // MID: Fast opacity only, no height animation
        return {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.15 } },
            exit: { opacity: 0, transition: { duration: 0.1 } }
        };
    }

    // HIGH tier: Full height animation
    return {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: 'auto',
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
        },
        exit: { opacity: 0, height: 0, transition: { duration: 0.2 } }
    };
};

/**
 * Card entrance animation for search results.
 */
export const getCardEntrance = (tier: PerformanceTier, index: number = 0): Variants => {
    if (tier === 'low') {
        // LOW: Instant appearance
        return {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.05 } }
        };
    }

    if (tier === 'mid') {
        // MID: Fast fade, minimal delay
        return {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { delay: Math.min(index * 0.03, 0.15), duration: 0.15 }
            }
        };
    }

    // HIGH tier: Full staggered entrance
    return {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.075, duration: 0.25, ease: 'easeOut' }
        }
    };
};

/**
 * Success animation for checkmarks/confirmations.
 */
export const getSuccessAnimation = (tier: PerformanceTier): Variants => {
    if (tier === 'low') {
        // LOW: Instant appearance
        return {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.05 } }
        };
    }

    if (tier === 'mid') {
        // MID: Simple fade
        return {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.2 } }
        };
    }

    // HIGH tier: Scale + fade with spring
    return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
        }
    };
};

/**
 * Get CSS animation class based on tier
 */
export const getAnimationClass = (tier: PerformanceTier, defaultClass: string, midClass: string, lowClass: string): string => {
    if (tier === 'low') return lowClass;
    if (tier === 'mid') return midClass;
    return defaultClass;
};

export default {
    fadeIn,
    getStaggerContainer,
    getFadeInUp,
    getSlideIn,
    getMobileSheetVariants,
    getHeightExpand,
    getCardEntrance,
    getSuccessAnimation,
    getAnimationClass
};
