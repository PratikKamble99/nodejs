# the cluster module of node.js versus worker threads

## Cluster:

    using the cluster module allows node.js to spawn multiple processes that can share the same server port and handle incoming requests each process runs on a separate CPU core making it more efficient on the other hand worker

## Worker threads:

    threads allow a single node.js process to create and manage multiple threads for parallel execution of tasks all in

## Use case:

1. When you want your node.js application to be highly available and scalable because it's gonna scale

2. Use worker threads if you want to be able to process CPU intensive tasks in one go.

3. Choose worker threads for parallel computaion within single process.
