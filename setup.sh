#!/bin/bash

echo "🚀 Starting RoadWolf Project Setup..."

# Check if node_modules exists, if not, install
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
else
  echo "✅ Dependencies already installed."
fi

# Build the project to ensure everything is linked correctly
echo "🛠️  Building project..."
npm run build

echo "✅ Setup Complete! Run 'npm run dev' to start the server."
