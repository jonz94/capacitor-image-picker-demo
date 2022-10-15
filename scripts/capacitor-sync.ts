import { execSync } from 'child_process';
import { platform } from 'os';

const command = platform() === 'darwin' ? 'npx cap sync' : 'npx cap sync android';

execSync(command, { stdio: 'inherit' });
