### Trying (and failing) to package Prisma Client into a Windows executable


To reproduce run:

```
npm install
prisma generate
pkg .
script.exe
```

Expected Error:
```
Error: spawn C:\snapshot\pgk-with-prisma-client\node_modules\.prisma\client\query-engine-windows.exe ENOENT
    at Process.ChildProcess._handle.onexit (internal/child_process.js:269:19)
    at onErrorNT (internal/child_process.js:467:16)
    at processTicksAndRejections (internal/process/task_queues.js:82:21)
    at process.runNextTicks [as _tickCallback] (internal/process/task_queues.js:64:3)
    at Function.runMain (pkg/prelude/bootstrap.js:1805:13)
    at internal/main/run_main_module.js:17:47
```

### Second try:

```
uncomment PRISMA_QUERY_ENGINE_BINARY in .env

pkg .
script.exe
```


Expected Error:
```
Error: Query engine binary for current platform "windows" could not be found.
This probably happens, because you built Prisma Client on a different platform.
(Prisma Client looked in "C:\\snapshot\\pgk-with-prisma-client\\node_modules\\@prisma\\engines\\query-engine-windows.exe")

Searched Locations:




To solve this problem, add the platform "undefined" to the "binaryTargets" attribute in the "generator" block in the "schema.prisma" file:
generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "windows", "windows"]
}

Then run "prisma generate" for your changes to take effect.
Read more about deploying Prisma Client: https://pris.ly/d/client-generator
    at BinaryEngine.getPrismaPath (C:\snapshot\pgk-with-prisma-client\node_modules\@prisma\client\runtime\index.js:27599:15)
    at async C:\snapshot\pgk-with-prisma-client\node_modules\@prisma\client\runtime\index.js:27686:30

```
