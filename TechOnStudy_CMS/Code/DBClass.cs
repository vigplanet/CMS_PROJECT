using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace TechOnStudy_CMS.App_Code
{
    public class DBClass : IDisposable
    {
        SqlConnection con;
        SqlCommand cmd;
        string strConnection = "";

        public DBClass()
        {
        }
        public string GetOpenConnectionString()
        {
            return ConfigurationManager.ConnectionStrings["TCConnection"].ToString();  
        }
        public DBClass(string spname, CommandType cmdtype, string conncection)
        {
            strConnection = GetOpenConnectionString();
            con = new SqlConnection(strConnection);
            cmd = new SqlCommand(spname);
            cmd.CommandType = cmdtype;
            cmd.Connection = con;
            cmd.CommandTimeout = 200;
            if (con.State == ConnectionState.Closed)
                con.Open();
        }        

        public static byte[] key = { 21, 10, 64, 10, 100, 40, 200, 4,
                    21, 54, 65, 246, 5, 62, 1, 54,
                    54, 6, 8, 9, 65, 4, 65, 9};
        private static byte[] iv = { 0, 0, 0, 0, 0, 0, 0, 0 };

       

        public DBClass(string spname, CommandType cmdtype)
        {
            try
            {
                strConnection = GetOpenConnectionString();
                con = new SqlConnection(strConnection);
                cmd = new SqlCommand(spname);
                cmd.CommandType = cmdtype;
                cmd.Connection = con;
                cmd.CommandTimeout = 200;
                if (con.State == ConnectionState.Closed)
                    con.Open();
            }
            catch
            {
            }
        }
      
        public void AddParameters(string pname, string pvalue)
        {
            cmd.Parameters.Add(pname, SqlDbType.NVarChar).Value = pvalue;
        }
        public void AddParameters(string pname, bool pvalue)
        {
            cmd.Parameters.Add(pname, SqlDbType.Bit).Value = pvalue;
        }
        public void AddParameters(string pname, System.DBNull pvalue)
        {
            cmd.Parameters.Add(pname, SqlDbType.NVarChar).Value = pvalue;
        }
        public void AddParameters(string pname, Int64 pvalue)
        {
            cmd.Parameters.Add(pname, SqlDbType.BigInt).Value = pvalue;
        }
        public void AddParameters(string pname, int pvalue)
        {
            cmd.Parameters.Add(pname, SqlDbType.Int).Value = pvalue;
        }
        public void AddParameters(string pname, float pvalue)
        {
            cmd.Parameters.Add(pname, SqlDbType.Float).Value = pvalue;
        }
        public void AddParameters(string pname, DateTime pvalue)
        {
            cmd.Parameters.Add(pname, SqlDbType.DateTime).Value = pvalue;
        }
        public void AddParameters(string pname, Decimal pvalue)
        {
            cmd.Parameters.Add(pname, SqlDbType.Decimal).Value = pvalue;
        }
        public void AddParameters(string pname, Double pvalue)
        {
            cmd.Parameters.Add(pname, SqlDbType.Decimal).Value = pvalue;
        }
        public void AddParameters(string pname, DataTable pvalue)
        {
            cmd.Parameters.AddWithValue(pname, pvalue);
        }

        //
        public void AddParametersType(string pname, SqlDbType pvalue)
        {
            cmd.Parameters.AddWithValue(pname, SqlDbType.Int);
        }
        public void AddParametersDirection(string pname, ParameterDirection drType)
        {
            cmd.Parameters[pname].Direction = ParameterDirection.Output;
        }
        public string GetParametersValue(string pname)
        {
            return cmd.Parameters[pname].Value.ToString();
        }
        //

        public DataTable ReturnDataTable()
        {
            using (DataTable dt = new DataTable())
            {
                dt.Load(cmd.ExecuteReader());
                return dt;
            }
        }

        public DataSet ReturnDataSet()
        {
            using (DataSet ds = new DataSet())
            {
                using (SqlDataAdapter adapter = new SqlDataAdapter(cmd))
                {

                    adapter.Fill(ds);
                }
                return ds;
            }
        }

        public void TimeOut(int time)
        {
            cmd.CommandTimeout = time;
        }

        public string ReturnString()
        {
            return Convert.ToString(cmd.ExecuteScalar());
        }

        public void ExecuteNonQuery()
        {
            cmd.ExecuteNonQuery();
        }

        public int ExecuteNonQueryWithReturn()
        {
            return Convert.ToInt16(cmd.ExecuteNonQuery());
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                // get rid of managed resources
                if (con.State == ConnectionState.Open)
                {
                    con.Close();
                    con.Dispose();
                }
                cmd.Dispose();
            }
            // get rid of unmanaged resources
        }

        //////////////////////////////////////////////

        public DataTable GetDataTable(SqlCommand cmd)
        {
            DataTable dt = new DataTable();
            try
            {
                using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                {
                    sda.SelectCommand = cmd;
                    sda.Fill(dt);
                    return dt;
                }
            }
            catch  
            {
                return dt;
            }
        }
        public DataSet GetDataSet(SqlCommand cmd)
        {
            DataSet ds = new DataSet();
            try
            {
                using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                {
                    sda.SelectCommand = cmd;
                    sda.Fill(ds);
                    return ds;
                }
            }
            catch  
            {
                return ds;
            }
        }
        public SqlConnection GetOpenConnection()
        {
            SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["ConStr"].ToString());
            if (connection.State == ConnectionState.Closed)
                connection.Open();
            return connection;
        }

        #region notUsed
        ///////////////////////////
        //public void FillGridCombo(GridViewComboBoxColumn GridComboBox, string valuemember, string dislaymember)
        //{

        //    DataTable dt;
        //    using (dt = new DataTable())
        //    {
        //        dt.Load(cmd.ExecuteReader());
        //        DataRow drow = dt.NewRow();
        //        drow[dislaymember] = "- - - Select - - -";
        //        drow[valuemember] = "0";
        //        dt.Rows.InsertAt(drow, 0);
        //    }
        //    GridComboBox.DataSource = dt;
        //    GridComboBox.DisplayMember = dislaymember;
        //    GridComboBox.ValueMember = valuemember;

        //}

        //public void FillComboBox(ComboBox cmb, string valuemember, string dislaymember)
        //{
        //    DataTable dt;
        //    using (dt = new DataTable())
        //    {
        //        dt.Load(cmd.ExecuteReader());
        //        DataRow drow = dt.NewRow();
        //        drow[dislaymember] = "- - - Select - - -";
        //        drow[valuemember] = "0";
        //        dt.Rows.InsertAt(drow, 0);
        //    }
        //    cmb.DataSource = dt;
        //    cmb.DisplayMember = dislaymember;
        //    cmb.ValueMember = valuemember;
        //}       
        //public static string ReadFile(string FilePath)
        //{
        //    FileInfo fi = new FileInfo(FilePath);
        //    if (fi.Exists == false)
        //        return string.Empty;

        //    FileStream fin = new FileStream(FilePath, FileMode.Open, FileAccess.Read);
        //    TripleDES tdes = new TripleDESCryptoServiceProvider();
        //    CryptoStream cs = new CryptoStream(fin, tdes.CreateDecryptor(key, iv), CryptoStreamMode.Read);

        //    StringBuilder SB = new StringBuilder();
        //    int ch;
        //    for (int i = 0; i < fin.Length; i++)
        //    {
        //        ch = cs.ReadByte();
        //        if (ch == 0)
        //            break;
        //        SB.Append(Convert.ToChar(ch));
        //    }

        //    cs.Close();
        //    fin.Close();
        //    return SB.ToString();
        //}
        //public string getConnection()
        //{
        //    string StrConnection = ReadFile(Application.StartupPath + "\\" + "Connection.dll");
        //    return StrConnection;
        //}
        #endregion
    }
}
