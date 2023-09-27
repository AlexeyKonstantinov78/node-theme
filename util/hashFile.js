import crypto from 'node:crypto';

export const hashFile = file => crypto.createHash('sha256').update(file).digest('hex');
