# LRU Cache System

A TypeScript implementation demonstrating the use of an LRU (Least Recently Used) cache to optimize data access patterns and reduce expensive database operations.

## Overview

This project showcases how to implement caching strategies using an LRU cache to improve application performance. The LRU cache maintains a limited set of items and automatically evicts the least recently used item when the cache reaches its maximum capacity. This is particularly useful for scenarios where you need to optimize access to frequently requested data while managing memory usage.

## Features

- 🚀 **Performance Optimization**: Reduces database queries by caching frequently accessed data
- 📊 **LRU Eviction Policy**: Automatically removes least recently used items when cache is full
- 🔧 **TypeScript Support**: Fully typed implementation for better development experience
- 💾 **Memory Efficient**: Configurable cache size to manage memory usage
- 🎯 **Simple API**: Easy-to-use caching interface

## Architecture

The system demonstrates a typical caching pattern:
1. **Cache Check**: First checks if data exists in the LRU cache
2. **Cache Hit**: Returns cached data immediately if found
3. **Cache Miss**: Fetches data from the "database" (simulated) and stores it in cache
4. **Automatic Eviction**: Removes least recently used items when cache reaches capacity

## Project Structure

```
LRU-cache-system/
├── src/
│   └── index.ts          # Main implementation and demo
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd LRU-cache-system
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

### Running the Demo

To see the LRU cache in action:

```bash
npm start
```

This will:
- Compile the TypeScript code
- Run the demo showing cache hits and misses
- Display console output demonstrating caching behavior

### Code Example

```typescript
import { LRUCache } from "lru-cache";

// Create cache with maximum 100 items
const cache = new LRUCache<string, any>({
  max: 100,
});

function getData(key: any) {
  // Check if data exists in cache
  const cachedData = cache.get(key);
  if (cachedData) {
    console.log(`Data found in cache for key: ${key}`);
    return cachedData;
  }
  
  // Cache miss - fetch from database
  const newData = fetchDataFromDatabase(key);
  cache.set(key, newData);
  return newData;
}
```

## Configuration

The cache can be configured by modifying the options in `src/index.ts`:

```typescript
const cache = new LRUCache<string, any>({
  max: 100,        // Maximum number of items
  maxAge: 60000,   // Maximum age in milliseconds (optional)
  updateAgeOnGet: true,  // Reset age on access (optional)
});
```

## Demo Data

The project includes sample data representing user records:
- User profiles with id, name, and gender fields
- Simulated database lookup function
- Console logging to show cache behavior

## Development

### Scripts

- `npm start`: Compile TypeScript and run the application
- `npm test`: Run tests (placeholder - no tests currently implemented)

### TypeScript Configuration

The project uses strict TypeScript configuration with:
- Target: ES2016
- Module: CommonJS
- Output directory: `./build`
- Strict type checking enabled

## Use Cases

This LRU cache pattern is ideal for:

- **Database Query Optimization**: Cache frequently accessed database records
- **API Response Caching**: Store responses from expensive API calls
- **Computed Results**: Cache results of expensive calculations
- **Session Management**: Store user session data with automatic cleanup
- **Configuration Caching**: Cache application settings and configurations

## Dependencies

- **[lru-cache](https://www.npmjs.com/package/lru-cache)**: High-performance LRU cache implementation
- **TypeScript**: For type safety and modern JavaScript features

## Performance Benefits

- **Reduced Database Load**: Fewer queries to the database
- **Faster Response Times**: Instant data retrieval for cached items
- **Memory Management**: Automatic cleanup of old data
- **Scalability**: Better handling of high-traffic scenarios

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Future Enhancements

- [ ] Add comprehensive test suite
- [ ] Implement cache statistics and monitoring
- [ ] Add support for TTL (Time To Live) per item
- [ ] Create a web interface to visualize cache behavior
- [ ] Add benchmarking tools
- [ ] Implement different eviction policies for comparison
