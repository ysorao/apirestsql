import sql from "mssql";

const dbSettings = {
  user: "usr_ausentismos",
  password: "4Au$s3Ent1I$mo0oS",
  server: "PROGRESSA",
  database: "INFOHEON",
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
}

