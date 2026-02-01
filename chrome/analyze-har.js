import fs from 'fs';

const har = JSON.parse(fs.readFileSync('chrome/localhost.har', 'utf8'));

console.log('=== PERFORMANCE METRICS ===');
console.log('Page Load Time:', har.log.pages[0].pageTimings.onLoad, 'ms');
console.log('DOM Content Loaded:', har.log.pages[0].pageTimings.onContentLoad, 'ms');

console.log('\n=== REQUEST ANALYSIS ===');
const entries = har.log.entries;
console.log('Total Requests:', entries.length);

const slow = entries
    .filter(e => e.time > 1000)
    .sort((a, b) => b.time - a.time)
    .slice(0, 10);

console.log('\nSlowest Requests (>1s):');
slow.forEach(e => {
    const url = e.request.url.split('/').pop() || '/';
    console.log(`- ${url}: ${e.time.toFixed(2)}ms (${e.response.status})`);
});

const errors = entries.filter(e => e.response.status >= 400);
console.log('\nErrors (4xx/5xx):', errors.length);
errors.forEach(e => {
    console.log(`- ${e.request.url}: ${e.response.status} ${e.response.statusText}`);
});

const resources = {};
entries.forEach(e => {
    const type = e._resourceType || 'other';
    resources[type] = (resources[type] || 0) + 1;
});

console.log('\n=== RESOURCE BREAKDOWN ===');
Object.entries(resources)
    .sort((a, b) => b[1] - a[1])
    .forEach(([type, count]) => {
        console.log(`${type}: ${count}`);
    });

// Find large resources
console.log('\n=== LARGE RESOURCES (>500KB) ===');
entries
    .filter(e => e.response.bodySize > 500000)
    .sort((a, b) => b.response.bodySize - a.response.bodySize)
    .forEach(e => {
        const url = e.request.url.split('/').pop() || '/';
        const sizeMB = (e.response.bodySize / 1024 / 1024).toFixed(2);
        console.log(`- ${url}: ${sizeMB}MB`);
    });

// Timing breakdown
console.log('\n=== TIMING ANALYSIS ===');
const avgTimings = {
    blocked: 0,
    dns: 0,
    connect: 0,
    send: 0,
    wait: 0,
    receive: 0
};

entries.forEach(e => {
    Object.keys(avgTimings).forEach(key => {
        avgTimings[key] += e.timings[key] || 0;
    });
});

Object.keys(avgTimings).forEach(key => {
    avgTimings[key] = (avgTimings[key] / entries.length).toFixed(2);
    console.log(`Average ${key}:`, avgTimings[key], 'ms');
});
