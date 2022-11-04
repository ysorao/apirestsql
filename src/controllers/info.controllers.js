import { pool } from "mssql";
import { getConnection } from "../database/connection";

export const getInfo = async (req, res) => {
  const pool=await getConnection()
    const result = await pool.request()
    .query("SELECT * FROM InformacionHeon");
    res.json(result.recordset);
};
