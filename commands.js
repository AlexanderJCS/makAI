import 'dotenv/config';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Simple test command
const PROMPT_COMMAND = {
  name: 'prompt',
  description: 'Prompt makAI!',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const ALL_COMMANDS = [PROMPT_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
