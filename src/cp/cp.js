import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  const child = spawn('node', ['cp/files/script.js', ...args], {
    stdio: ['pipe', 'pipe', 'pipe']
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([['arg1', 'arg2', 'arg3'], ['arg4', 'arg5'], 'arg6']);
