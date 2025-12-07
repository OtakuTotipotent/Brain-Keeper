// BRAIN-KEEPER/src/benchmark.ts

async function runBenchmark() {
    const count = 10000;
    const promises = [];

    console.log(`Starting benchmark for ${count} requests...`);
    console.time("Benchmark");

    for (let i = 0; i < count; i++) {
        promises.push(
            fetch("http://localhost:3000/tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ task: `Task ${i}` }),
            }),
        );
    }

    await Promise.all(promises);
    console.timeEnd("Benchmark");
}

runBenchmark();
