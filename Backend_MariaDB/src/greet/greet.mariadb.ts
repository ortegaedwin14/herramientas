import mariadb from 'mariadb';
import dotenv from 'dotenv';

dotenv.config();

// Interfaces para tipado fuerte
interface GreetRow {
  id: number;
  greet: string;
  language: string;
}

interface StatsResult {
  total: number;
  countsByLanguage: Array<{ language: string; count: number }>;
}

export type Param = {
  greet: string;
  language: string;
};

// Validar variables de entorno
const requiredEnvVars = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Falta la variable de entorno requerida: ${envVar}`);
  }
}

// Crear el pool de conexiones con más opciones
const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5,
  connectTimeout: 5000,
  acquireTimeout: 5000
});

class BaseDeDatos {
  private pool = pool;

  async getAll(): Promise<GreetRow[]> {
    try {
      const rows = await this.pool.query('SELECT * FROM regards');
      return rows as GreetRow[];
    } catch (error) {
      console.error('Error en getAll:', error);
      throw error;
    }
  }

  async getById(id: number): Promise<GreetRow | null> {
    try {
      const rows = await this.pool.query(
        'SELECT * FROM regards WHERE id = ?',
        [id]
      );
      return rows[0] || null;
    } catch (error) {
      console.error(`Error en getById(${id}):`, error);
      throw error;
    }
  }

async create(data: Param): Promise<number> {
  try {
    const result = await this.pool.query(
      'INSERT INTO regards (greet, language) VALUES (?, ?)',
      [data.greet, data.language]
    );
    // Convertir BigInt a número regular
    return Number(result.insertId);
  } catch (error) {
    console.error('Error en create:', error);
    throw error;
  }
}

  async update(id: number, data: Param): Promise<void> {
    try {
      await this.pool.query(
        'UPDATE regards SET greet = ?, language = ? WHERE id = ?',
        [data.greet, data.language, id]
      );
    } catch (error) {
      console.error(`Error en update(${id}):`, error);
      throw error;
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.pool.query('DELETE FROM regards WHERE id = ?', [id]);
    } catch (error) {
      console.error(`Error en delete(${id}):`, error);
      throw error;
    }
  }

async stats(): Promise<StatsResult> {
  try {
    const totalResult = await this.pool.query('SELECT COUNT(*) as total FROM regards');
    const byLangResultRaw = await this.pool.query(
      'SELECT language, COUNT(*) as count FROM regards GROUP BY language'
    );

    const byLangResult = byLangResultRaw.map((row: any) => ({
      language: row.language,
      count: Number(row.count), // <--- aquí está la solución
    }));

    return { 
      total: Number(totalResult[0].total),
      countsByLanguage: byLangResult,
    };
  } catch (error) {
    console.error('Error en stats:', error);
    throw error;
  }
}


  // Método para cerrar el pool (útil para tests)
  async close(): Promise<void> {
    await this.pool.end();
  }
}

export default new BaseDeDatos();