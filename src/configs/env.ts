import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
const PORT = process.env.PORT || 1998;
const DATABASE_URL = process.env.DATABASE_URL;
export { PORT, DATABASE_URL };
