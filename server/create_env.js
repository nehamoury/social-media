const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');
const content = `DATABASE_URL="postgresql://neondb_owner:npg_1qaLCegGX9Nr@ep-fragrant-hat-ah9r1g00-pooler.c-3.us-east-1.aws.neon.tech/social-media?sslmode=require&channel_binding=require&pgbouncer=true"
DIRECT_URL="postgresql://neondb_owner:npg_1qaLCegGX9Nr@ep-fragrant-hat-ah9r1g00.c-3.us-east-1.aws.neon.tech/social-media?sslmode=require"
JWT_SECRET="oren-social-media-jwt-secret-2024"
PORT=5000`;

try {
    fs.writeFileSync(envPath, content.trim());
    console.log(`Successfully wrote .env to ${envPath}`);
} catch (error) {
    console.error('Failed to write .env:', error);
    process.exit(1);
}
