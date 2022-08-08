import { ConfigInterface } from './config.interface'; // json schema validator
import * as path from 'path';
import * as dotenv from 'dotenv';
import { DotenvConfigOutput, DotenvParseOutput } from 'dotenv';

const envPath = path.resolve('.env');
console.debug('.env path is ' + envPath);

const output: DotenvConfigOutput = dotenv.config({path: envPath});
if (output.error) {
    console.error(`Config parsing error.`, { output });
}

const config: DotenvParseOutput = output.parsed;

export const Config: ConfigInterface = {
    port: parseInt(config['PORT']),
    twilioAccountSSID: config['TWILIO_ACCOUNT_SID'],
    twilioApiKey: config['TWILIO_API_KEY'],
    twilioApiSecret: config['TWILIO_API_SECRET'],
}