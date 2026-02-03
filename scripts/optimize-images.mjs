/**
 * Image Optimization Script for RoadWolf
 * Optimizes all carousel/hero images for performance
 * 
 * Run: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Image configurations - optimize ALL carousel images
const images = [
    // Hero image (highest priority)
    {
        name: '7',
        width: 1000,
        height: 700,
        quality: 82,
        label: 'Hero'
    },
    // Other carousel images
    {
        name: '5',
        width: 800,
        height: 600,
        quality: 78,
        label: 'Carousel 4'
    },
    {
        name: '4',
        width: 800,
        height: 600,
        quality: 78,
        label: 'Carousel 3'
    },
    {
        name: '3',
        width: 800,
        height: 600,
        quality: 78,
        label: 'Carousel 2'
    }
];

const inputDir = path.join(__dirname, '..', 'src', 'assets', 'background');
const outputDir = path.join(__dirname, '..', 'src', 'assets', 'background', 'optimized');

async function optimizeAll() {
    console.log('🖼️  RoadWolf Image Optimization\n');
    console.log('━'.repeat(50));

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        console.log(`📁 Created output directory: optimized/\n`);
    }

    let totalSaved = 0;

    for (const img of images) {
        const inputPath = path.join(inputDir, `${img.name}.webp`);
        const outputPath = path.join(outputDir, `${img.name}.webp`);

        try {
            // Check if input exists
            if (!fs.existsSync(inputPath)) {
                console.error(`❌ File not found: ${img.name}.webp`);
                continue;
            }

            // Get original metadata
            const originalMeta = await sharp(inputPath).metadata();

            // Optimize image
            await sharp(inputPath)
                .resize(img.width, img.height, {
                    fit: 'cover',
                    position: 'center'
                })
                .webp({
                    quality: img.quality,
                    effort: 6  // Max compression effort
                })
                .toFile(outputPath);

            // Calculate savings
            const inputSize = fs.statSync(inputPath).size;
            const outputSize = fs.statSync(outputPath).size;
            const saved = inputSize - outputSize;
            const percentage = ((saved / inputSize) * 100).toFixed(1);

            totalSaved += saved;

            console.log(`✅ ${img.label} (${img.name}.webp):`);
            console.log(`   Original: ${originalMeta.width}x${originalMeta.height}`);
            console.log(`   Optimized: ${img.width}x${img.height}`);
            console.log(`   Before: ${(inputSize / 1024).toFixed(1)} KB`);
            console.log(`   After:  ${(outputSize / 1024).toFixed(1)} KB`);
            console.log(`   Saved:  ${(saved / 1024).toFixed(1)} KB (${percentage}%)\n`);

        } catch (error) {
            console.error(`❌ Failed to optimize ${img.name}:`, error.message);
        }
    }

    console.log('━'.repeat(50));
    console.log(`🎉 Total saved: ${(totalSaved / 1024).toFixed(1)} KB`);
    console.log('━'.repeat(50));
    console.log('\n📝 Next steps:');
    console.log('   1. Update image imports in HomePage.tsx to use optimized/ folder');
    console.log('   2. Add width/height attributes to <img> tags');
    console.log('   3. Add fetchpriority="high" to hero image');
}

optimizeAll().catch(console.error);
