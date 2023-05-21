using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;
using System.IO;
using System.Web.UI;
using System.Data;
using System.Net;
using System.Data.SqlClient;
using System.Collections;
using System.Globalization;

namespace TechOnStudy_CMS
{
    public class BusinessLogicLayer : DataAccessLayer
    {
        HttpContext ctx = HttpContext.Current;
        public enum Method
        {
            GET,
            POST
        }

        public void ExportToExcel(GridView gv, string fileName)
        {

            ctx.Response.Clear();
            ctx.Response.Buffer = true;
            System.IO.StringWriter sw = new System.IO.StringWriter();
            System.Web.UI.HtmlTextWriter hw = new System.Web.UI.HtmlTextWriter(sw);
            ctx.Response.AddHeader("content-disposition", "attachment;filename=" + fileName);
            ctx.Response.Charset = "";
            ctx.Response.ContentType = "application/vnd.ms-excel";
            gv.RenderControl(hw);
            ctx.Response.Write(sw.ToString());
            ctx.Response.End();
        }
        public void ExportToWord(GridView gv, string fileName)
        {
            ctx.Response.Clear();
            ctx.Response.Buffer = true;
            ctx.Response.AddHeader("content-disposition", "attachment;filename=" + fileName);
            ctx.Response.Charset = "";
            ctx.Response.ContentType = "application/vnd.ms-word ";
            StringWriter sw = new StringWriter();
            HtmlTextWriter hw = new HtmlTextWriter(sw);
            gv.RenderControl(hw);
            ctx.Response.Output.Write(sw.ToString());
            ctx.Response.Flush();
            ctx.Response.End();
        }
        public string GenerateCode(int len)
        {

            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var random = new Random();
            var result = new string(
                Enumerable.Repeat(chars, len)
                          .Select(s => s[random.Next(s.Length)])
                          .ToArray());
            return result.ToUpper();
        }

        public string[] GetDistinctValues(string[] array)
        {
            System.Collections.Generic.List<string> list = new System.Collections.Generic.List<string>();
            for (int i = 0; i <= array.Length - 1; i++)
            {
                if (list.Contains(array[i]))
                {
                    continue;
                }
                list.Add(array[i]);
            }
            return list.ToArray();
        }


        public string CreateMenu()
        {
            string menu = string.Empty;
            DataTable dt = null;
            string a = ctx.Session["menustr"].ToString();
            string mstr = ctx.Session["menustr"].ToString().Substring(0, ctx.Session["menustr"].ToString().Length - 1);
            menu = "<table cellspacing='0' cellpadding='0' border='0'><tr> <td><div class='topmainmenu' id='ddtopmenubar'><ul id='main_menu'>";
            string str = "select Row_number() over(order by sno) rno,Sno,MenuName,isnull(Url,'') Url,ParentMenuid from DynamicMenu where Active=1 and sno in (" + mstr + ")";
            dt = ExecDataTable(str);
            string Childstr = "";
            DataRow[] drow = dt.Select("ParentMenuid=0");
            int K = 1;
            for (int i = 0; i <= drow.Length - 1; i++)
            {
                DataRow[] childrow = dt.Select("Parentmenuid=" + drow[i]["Sno"]);
                if (childrow.Length > 0)
                {
                    menu = menu + string.Format("<li><a href='{0}' rel='ddsubmenu{1}'>{2}</a></li>", drow[i]["Url"], K, drow[i]["MenuName"]);
                }
                else
                {
                    menu = menu + string.Format("<li><a href='{0}' >{1}</a></li>", drow[i]["Url"], drow[i]["MenuName"]);
                }
                for (int j = 0; j <= childrow.Length - 1; j++)
                {
                    if (j == 0)
                    {
                        Childstr = Childstr + "<ul visible='false' class='ddsubmenustyle' id='ddsubmenu" + (K).ToString() + "'><li><a href='" + childrow[j]["Url"] + "'>" + childrow[j]["MenuName"] + "</a>" + GetStr(dt.Select("Parentmenuid=" + childrow[j]["Sno"])) + "</li>";
                        K = K + 1;
                    }
                    else
                    {
                        Childstr = Childstr + "<li><a href='" + childrow[j]["Url"] + "'>" + childrow[j]["MenuName"] + "</a>" + GetStr(dt.Select("Parentmenuid=" + childrow[j]["Sno"])) + "</li>";
                    }
                    if (j == childrow.Length - 1)
                    {
                        Childstr = Childstr + "</ul>";
                    }
                }
            }
            menu = menu + "</ul></div><script type='text/javascript'>ddlevelsmenu.setup('ddtopmenubar', 'topbar') //ddlevelsmenu.setup('mainmenuid', 'topbar|sidebar')</script>";
            Childstr = Childstr + "</td></tr></table>";

            return menu + Childstr;

        }

        public string GetStr(DataRow[] mrow)
        {
            string str = "<ul>";
            for (int i = 0; i <= mrow.Length - 1; i++)
            {
                str = str + "<li><a href='" + mrow[i]["url"] + "'>" + mrow[i]["menuName"] + "</a></li>";
            }
            if (str == "<ul>")
            {
                str = "";
            }
            else
            {
                str = str + "</ul>";
            }
            return str;
        }

        public bool IsValidForPage()
        {
            string pagename = GetCurrentPageName();
            string pageid = ExecScalar("Select sno from  DynamicMenu where pagename=@PageName", "@PageName", pagename).ToString();
            pageid = "," + pageid + ",";
            string mstr = "," + ctx.Session["menustr"].ToString();
            if (mstr.Contains(pageid))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        protected bool CheckDate(string date)
        {
            bool chechdate = true;
            try
            {
                DateTime dt = DateTime.Parse(date);
                //return true;
            }
            catch
            {
                chechdate = false;
            }
            return chechdate;
        }



        protected bool CheckDate1(String date)
        {
            DateTime Temp;
            if (DateTime.TryParse(date, out Temp) == true)
                return true;
            else
                return false;
        }


        public string GetCurrentPageName()
        {
            string sPath = System.Web.HttpContext.Current.Request.Url.AbsolutePath;
            System.IO.FileInfo oInfo = new System.IO.FileInfo(sPath);
            string sRet = oInfo.Name;
            return sRet;
        }


        public void CreatePaging(int intTotalRecords, int intTotalPages, int RecordsPerPage, int CurrentPage, Label TotalMessages, Label PagingLabel, Label RecordsCount)
        {
            if (intTotalRecords % RecordsPerPage == 0)
            {
                intTotalPages = Convert.ToInt32(intTotalRecords / RecordsPerPage);
            }
            else
            {
                intTotalPages = Convert.ToInt32(intTotalRecords / RecordsPerPage + 1);
            }
            TotalMessages.Text = "Page <b>" + CurrentPage + "</b> of <b>" + intTotalPages + "</b>";
            RecordsCount.Text = "<b>" + intTotalRecords + "</b> Records";
            int i = 0;
            string NavigationText = "";
            if (CurrentPage > 1)
            {
                NavigationText += "<a href=" + HttpContext.Current.Request.ServerVariables["SCRIPT_NAME"] + "?Page=" + (CurrentPage - 1) + "><<</a> ";
            }
            for (i = 1; i <= intTotalPages; i++)
            {
                if (CurrentPage == i)
                {
                    NavigationText += "<b>" + i + "</b>    ";
                }
                else
                {
                    NavigationText += "<a href=" + HttpContext.Current.Request.ServerVariables["SCRIPT_NAME"] + "?Page=" + i + ">" + i + "</a> ";
                }
            }
            if (CurrentPage < intTotalPages)
            {
                NavigationText += "<a href=" + HttpContext.Current.Request.ServerVariables["SCRIPT_NAME"] + "?Page=" + CurrentPage + 1 + ">>></a> ";
            }
            PagingLabel.Text = NavigationText;
        }

        public void ShowNoResultFound(DataTable source, GridView gv)
        {
            DataTable dt = source.Clone();
            foreach (DataColumn c in dt.Columns)
            {
                c.AllowDBNull = true;
            }
            dt.Rows.Add(dt.NewRow());
            // // create a new blank row to the DataTable
            //// Bind the DataTable which contain a blank row to the GridView
            gv.DataSource = dt;
            gv.DataBind();
            //// Get the total number of columns in the GridView to know what the Column Span should be
            int columnsCount = 0;
            if (gv.Columns.Count == 0)
            {
                columnsCount = source.Columns.Count;
            }
            else
            {
                columnsCount = gv.Columns.Count;
            }

            gv.Rows[0].Cells.Clear();
            //// clear all the cells in the row
            gv.Rows[0].Cells.Add(new TableCell());
            // //add a new blank cell
            gv.Rows[0].Cells[0].ColumnSpan = columnsCount;
            // //set the column span to the new added cell

            // //You can set the styles here
            gv.Rows[0].Cells[0].HorizontalAlign = HorizontalAlign.Center;
            //;
            gv.Rows[0].Cells[0].ForeColor = System.Drawing.Color.Red;
            //
            gv.Rows[0].Cells[0].Font.Bold = true;
            //
            // //set No Results found to the new added cell
            gv.Rows[0].Cells[0].Text = "NO RESULT FOUND!";
            //
        }


        public string GeneratePassword(int length, int numberOfNonAlphanumericCharacters)
        {
            //Make sure length and numberOfNonAlphanumericCharacters are valid....
            if (((length < 1) || (length > 128)))
            {
                throw new ArgumentException("Membership_password_length_incorrect");
            }

            if (((numberOfNonAlphanumericCharacters > length) || (numberOfNonAlphanumericCharacters < 0)))
            {
                throw new ArgumentException("Membership_min_required_non_alphanumeric_characters_incorrect");
            }

            while (true)
            {
                int i = 0;
                int nonANcount = 0;
                byte[] buffer1 = new byte[length];

                //chPassword contains the password's characters as it's built up
                char[] chPassword = new char[length];

                //chPunctionations contains the list of legal non-alphanumeric characters
                char[] chPunctuations = "!@@$%^^*()_-+=[{]};:>|./?".ToCharArray();

                //Get a cryptographically strong series of bytes
                System.Security.Cryptography.RNGCryptoServiceProvider rng = new System.Security.Cryptography.RNGCryptoServiceProvider();
                rng.GetBytes(buffer1);

                for (i = 0; i <= length - 1; i++)
                {
                    //Convert each byte into its representative character
                    int rndChr = (buffer1[i] % 87);
                    if ((rndChr < 10))
                    {
                        chPassword[i] = Convert.ToChar(Convert.ToUInt16(48 + rndChr));
                    }
                    else
                    {
                        if ((rndChr < 36))
                        {
                            chPassword[i] = Convert.ToChar(Convert.ToUInt16((65 + rndChr) - 10));
                        }
                        else
                        {
                            if ((rndChr < 62))
                            {
                                chPassword[i] = Convert.ToChar(Convert.ToUInt16((97 + rndChr) - 36));
                            }
                            else
                            {
                                chPassword[i] = chPunctuations[rndChr - 62];
                                nonANcount += 1;
                            }
                        }
                    }
                }

                if (nonANcount < numberOfNonAlphanumericCharacters)
                {
                    Random rndNumber = new Random();
                    for (i = 0; i <= (numberOfNonAlphanumericCharacters - nonANcount) - 1; i++)
                    {
                        int passwordPos = 0;
                        do
                        {
                            passwordPos = rndNumber.Next(0, length);
                        } while (!char.IsLetterOrDigit(chPassword[passwordPos]));
                        chPassword[passwordPos] = chPunctuations[rndNumber.Next(0, chPunctuations.Length)];
                    }
                }

                return new string(chPassword);
            }
        }

        private SqlParameter PrepareCommand(string ParamName, object ParamValue, SqlDbType ParamType, Int16 ParamSize, ParameterDirection ParamDir)
        {
            SqlParameter Param = new SqlParameter();
            Param.ParameterName = ParamName;
            if (ParamValue == null)
            {
                Param.Value = DBNull.Value;
            }
            else
            {
                Param.Value = ParamValue;
            }
            Param.SqlDbType = ParamType;
            Param.Size = ParamSize;
            Param.Direction = ParamDir;
            return Param;
        }

        public string WebRequest(Method MType, string url, string postData)
        {
            string functionReturnValue = null;
            Uri objURI = new Uri(url);
            HttpWebRequest webReq = null;
            StreamWriter requestWriter = null;
            string responseData = "";
            webReq = (HttpWebRequest)System.Net.WebRequest.Create(objURI);
            //TryCast(System.Net.WebRequest.Create(url), HttpWebRequest)
            webReq.Method = MType.ToString();
            //webReq.ServicePoint.Expect100Continue = False
            //webReq.UserAgent = "[You user agent]"
            webReq.Timeout = 20000;
            if (MType == Method.POST)
            {
                webReq.ContentType = "application/x-www-form-urlencoded";
                webReq.ContentLength = postData.Length;
                //POST the data.
                requestWriter = new StreamWriter(webReq.GetRequestStream(), System.Text.Encoding.ASCII);
                try
                {
                    requestWriter.Write(postData);
                }
                catch
                {
                    throw;
                }
                finally
                {
                    requestWriter.Close();
                    requestWriter = null;
                }
            }
            responseData = WebResponseGet(webReq);
            functionReturnValue = null;
            return responseData;
            ///return functionReturnValue;
        }

        public string WebResponseGet(HttpWebRequest webRequest)
        {
            StreamReader responseReader = null;
            string responseData = "";
            try
            {
                responseReader = new StreamReader(webRequest.GetResponse().GetResponseStream());
                responseData = responseReader.ReadToEnd();
            }
            catch
            {
                throw;
            }
            finally
            {
                webRequest.GetResponse().GetResponseStream().Close();
                responseReader.Close();
                responseReader = null;
            }
            return responseData;
        }

        public SqlDataReader CheckClientSingin(string UserId, string Password, string customertype)
        {
            ArrayList arrList = new ArrayList();
            arrList.Add(PrepareCommand("@UserId", UserId, SqlDbType.VarChar, 20, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Password", Password, SqlDbType.VarChar, 20, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@customertype", customertype, SqlDbType.VarChar, 20, ParameterDirection.Input));
            SqlDataReader dr = ExecDataReaderProc("CheckClientSingin", arrList.ToArray());
            return dr;
        }

        public SqlDataReader CheckAdminLogin(string UserId, string Password)
        {
            ArrayList arrList = new ArrayList();
            arrList.Add(PrepareCommand("@UserId", UserId, SqlDbType.VarChar, 20, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Password", Password, SqlDbType.VarChar, 500, ParameterDirection.Input));

            SqlDataReader dr = ExecDataReaderProc("CheckAdminLogin", arrList.ToArray());
            return dr;
        }

        public int isUserExists(string MemberId)
        {
            int isExists = 0;
            try
            {
                isExists = Convert.ToInt32((new BusinessLogicLayer()).ExecScalar("if Exists(select Msrno from Membermaster where MemberId=@MemberId) select 1 else select 0", "@MemberId", MemberId));
            }
            catch (Exception ex)
            {
                isExists = 1;

            }
            finally
            {
            }
            return isExists;
        }

        public SqlDataReader CheckMemberLogin(string username, string password)
        {
            ArrayList arrList = new ArrayList();
            arrList.Add(PrepareCommand("@UserName", username, SqlDbType.VarChar, 30, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Password", password, SqlDbType.VarChar, 30, ParameterDirection.Input));
            SqlDataReader result = ExecDataReaderProc("CheckMemberLogin", arrList.ToArray());
            return result;
        }




        public DataTable GetReferral(string FromDate, string ToDate, string MemberId, int DownLine, int Export)
        {
            ArrayList arrList = new ArrayList();
            if (CheckDate(FromDate))
            {
                FromDate = null;
            }
            if (CheckDate(ToDate))
            {
                ToDate = null;
            }
            arrList.Add(PrepareCommand("@FromDate", FromDate, SqlDbType.VarChar, 10, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Todate", ToDate, SqlDbType.VarChar, 10, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@MemberId", MemberId, SqlDbType.VarChar, 20, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@DownLine", DownLine, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Export", Export, SqlDbType.Bit, 0, ParameterDirection.Input));
            DataTable Dt = ExecDataTableProc("bannag_soft_Prc_DownlineReport", arrList.ToArray());
            return Dt;
        }

        public string InsertUpdatePhotogallry(int cnt, string heading, string description, string path, string type)
        {
            ArrayList arrList = new ArrayList();
            arrList.Add(PrepareCommand("@orgid", 0, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Tid", cnt, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@TName", heading, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Description", description, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@PhotoName", path, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@type", type, SqlDbType.VarChar, 1, ParameterDirection.Input));
            //arrList.Add(PrepareCommand("@Result", "", SqlDbType.VarChar, 200, ParameterDirection.Output));
            string result = ExecNonQueryProc("SET_TESTIMENTAL", arrList.ToArray());
            return result;
        }


        public string InsertUpdateService(int id, string heading, string description, string path, int orgid)
        {
            ArrayList arrList = new ArrayList();
            arrList.Add(PrepareCommand("@orgid", orgid, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@serviceid", id, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Servicename", heading, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Description", description, SqlDbType.VarChar, 8000, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@PhotoName", path, SqlDbType.VarChar, 500, ParameterDirection.Input));
            //arrList.Add(PrepareCommand("@Result", "", SqlDbType.VarChar, 200, ParameterDirection.Output));
            string result = ExecNonQueryProc("SET_SERVICES", arrList.ToArray());
            return result;
        }

        public string InsertUpdateFacilities(int id, string heading, string description, string path, int orgid)
        {
            ArrayList arrList = new ArrayList();
            arrList.Add(PrepareCommand("@orgid", orgid, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Fid", id, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Fname", heading, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Description", description, SqlDbType.VarChar, 8000, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@PhotoName", path, SqlDbType.VarChar, 500, ParameterDirection.Input));
            //arrList.Add(PrepareCommand("@Result", "", SqlDbType.VarChar, 200, ParameterDirection.Output));
            string result = ExecNonQueryProc("SET_TBL_FACILITIES", arrList.ToArray());
            return result;
        }
        public string InsertUpdateDoctor(int id, string name, string contact, string address, string path, int orgid, string qualification, string remark)
        {
            ArrayList arrList = new ArrayList();
            arrList.Add(PrepareCommand("@orgid", orgid, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Doctorid", id, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@doctorname", name, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@address", address, SqlDbType.VarChar, 8000, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@contactno", contact, SqlDbType.VarChar, 8000, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@PhotoName", path, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@qualification", qualification, SqlDbType.VarChar, 5000, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@remark", remark, SqlDbType.VarChar, 5000, ParameterDirection.Input));
            //arrList.Add(PrepareCommand("@Result", "", SqlDbType.VarChar, 200, ParameterDirection.Output));
            string result = ExecNonQueryProc("SET_DOCTORSMASTER", arrList.ToArray());
            return result;
        }

        public string InsertupdateAppointment(int id, string ondate, string fromtime, string totime, int orgid, string ipaddress, int userid)
        {
            ArrayList arrList = new ArrayList();
            arrList.Add(PrepareCommand("@appointmentid", id, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@ondate", ondate, SqlDbType.VarChar, 20, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@fromtime", fromtime, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@totime", totime, SqlDbType.VarChar, 8000, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@orgid", orgid, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@createduserid", userid, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@createdip", ipaddress, SqlDbType.VarChar, 500, ParameterDirection.Input));
            //arrList.Add(PrepareCommand("@Result", "", SqlDbType.VarChar, 200, ParameterDirection.Output));
            string result = ExecNonQueryProc("Set_SetAppointment", arrList.ToArray());
            return result;
        }

        public string GetSateName(int StateID)
        {
            object StateName = ExecScalar("select State from dbo.tbl_State where id=@id", "@id", StateID);
            if (StateName == null)
            {
                return "";
            }
            else
            {
                return StateName.ToString();
            }

        }

        public string InsertEnquiry(string name, string city, string address, string state, string Mobileno, string Email, string Pincode, string Message, string Edate, int ID)
        {
            ArrayList arrList = new ArrayList();

            arrList.Add(PrepareCommand("@name", name, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@city", city, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@address", address, SqlDbType.VarChar, 1000, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@state", state, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Mobileno", Mobileno, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Email", Email, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Pincode", Pincode, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Message", Message, SqlDbType.VarChar, 3000, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Edate", Edate, SqlDbType.DateTime, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@ID", ID, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Result", "", SqlDbType.VarChar, 200, ParameterDirection.Output));
            string result = ExecNonQueryProc("SET_Enquiry", arrList.ToArray());
            return result;
        }

        public string InsertAppointment(int ID, int appointmentid, string name, string address, string Mobileno, string Email, string Message, string ipaddress)
        {
            ArrayList arrList = new ArrayList();

            arrList.Add(PrepareCommand("@name", name, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@id", ID, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@appointmentid", appointmentid, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@address", address, SqlDbType.VarChar, 1000, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Mobileno", Mobileno, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Email", Email, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@remark", Message, SqlDbType.VarChar, 3000, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@ipaddress", ipaddress, SqlDbType.VarChar, 3000, ParameterDirection.Input));
            string result = ExecNonQueryProc("Set_Appointment", arrList.ToArray());
            return result;
        }
        public string GetCityName(int CityID)
        {
            object CityName = ExecScalar("select District from dbo.tbl_StateCity where id=@id", "@id", CityID);
            if (CityName == null)
            {
                return "";
            }
            else
            {
                return CityName.ToString();
            }

        }
        public string InsertClientMaster(int ClientID, string ClientCode, string ClientName, int UserID, int Status, int Block,
         int Approved, string EmailID, string PhNo, string MobileNo, string Description, string FBLink, string TwitterLink,
         string GooglePlus, string Instagram, string LinkedIN, string Youtube, string image)
        {
            ArrayList arrList = new ArrayList();
            arrList.Add(PrepareCommand("@ClientID", ClientID, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@ClientCode", ClientCode, SqlDbType.Char, 10, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@ClientName", ClientName, SqlDbType.VarChar, 200, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@UserID", UserID, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Status", Status, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Block", Block, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Approved", Approved, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@EmailID", EmailID, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@PhNo", PhNo, SqlDbType.VarChar, 50, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@MobileNo", MobileNo, SqlDbType.VarChar, 50, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Description", Description, SqlDbType.VarChar, 1000, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@FBLink", FBLink, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@TwitterLink", TwitterLink, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@GooglePlus", GooglePlus, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Instagram", Instagram, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@LinkedIN", LinkedIN, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Youtube", Youtube, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@image", image, SqlDbType.VarChar, 3000, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@return", "", SqlDbType.Int, 0, ParameterDirection.Output));
            string result = ExecNonQueryProc("SetClientMaster", arrList.ToArray());
            return result;
        }


        public string InsertProductMaster(int Productid, string Productcode, string ProductCodeSelf, string ProductName, string MrpRate, string Remark, int Status, int CategoryId, int FirmId,
            string Description, int SubCategoryId, string DealerRate)
        {
            ArrayList arrList = new ArrayList();
            arrList.Add(PrepareCommand("@Productid", Productid, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Productcode", Productcode, SqlDbType.VarChar, 10, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@ProductCodeSelf", ProductCodeSelf, SqlDbType.VarChar, 200, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@ProductName", ProductName, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@MrpRate", MrpRate, SqlDbType.Decimal, 50, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Remark", Remark, SqlDbType.NVarChar, 4000, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Status", Status, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@CategoryId", CategoryId, SqlDbType.Int, 50, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@SubCategoryId", SubCategoryId, SqlDbType.Int, 50, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@FirmId", FirmId, SqlDbType.Int, 50, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Description", Description, SqlDbType.NVarChar, 4000, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@dealerrate", DealerRate, SqlDbType.NVarChar, 4000, ParameterDirection.Input));
            //  string result = ExecNonQueryProc("SPProductMaster", arrList.ToArray());
            DataTable dd = ExecDataTableProc("SPProductMaster", arrList.ToArray());
            return dd.Rows[0][0].ToString();
            //return result;
        }

        public string InsertClientMasterAdmin(int ClientID, string ClientCode, string ClientName, int UserID, string EmailID, string PhNo, string MobileNo, string UserName, string Password, string Address, string OverView, string CityName, string AreaName, string Propertytype, string EmpID)
        {
            ArrayList arrList = new ArrayList();
            arrList.Add(PrepareCommand("@ClientID", ClientID, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@ClientCode", ClientCode, SqlDbType.Char, 10, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@ClientName", ClientName, SqlDbType.VarChar, 200, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@EmailID", EmailID, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@PhNo", PhNo, SqlDbType.VarChar, 50, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@MobileNo", MobileNo, SqlDbType.VarChar, 50, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@UserID", UserID, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@UserName", UserName, SqlDbType.VarChar, 50, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Password", Password, SqlDbType.VarChar, 50, ParameterDirection.Input));

            arrList.Add(PrepareCommand("@Address", Address, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@OverView", OverView, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@CityName", CityName, SqlDbType.VarChar, 50, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@AreaName", AreaName, SqlDbType.VarChar, 50, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@PropertyType", Propertytype, SqlDbType.VarChar, 50, ParameterDirection.Input));

            arrList.Add(PrepareCommand("@EmpID", EmpID, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@return", "", SqlDbType.Int, 0, ParameterDirection.Output));
            string result = ExecNonQueryProc("SetClientMaster_admin", arrList.ToArray());
            return result;
        }

        public string UpdateClientMaster(int ClientID, string ClientName, string EmailID, string PhNo, string MobileNo, string Description, string FBLink, string TwitterLink, string GooglePlus, string Instagram, string LinkedIN, string Youtube, string CityName, string Address, string OverView, string MapPath, string AreaName, string ContactPerson, string ContactMob, string ContactEmail, string Website, string PropertyType)
        {
            ArrayList arrList = new ArrayList();
            arrList.Add(PrepareCommand("@ClientID", ClientID, SqlDbType.Int, 0, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@ClientName", ClientName, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@EmailID", EmailID, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@PhNo", PhNo, SqlDbType.VarChar, 50, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@MobileNo", MobileNo, SqlDbType.VarChar, 50, ParameterDirection.Input));



            arrList.Add(PrepareCommand("@Description", Description, SqlDbType.VarChar, 1000, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@FBLink", FBLink, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@TwitterLink", TwitterLink, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@GooglePlus", GooglePlus, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Instagram", Instagram, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@LinkedIN", LinkedIN, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Youtube", Youtube, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@CityName", CityName, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Address", Address, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@OverView", OverView, SqlDbType.VarChar, 8000, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@MapPath", MapPath, SqlDbType.VarChar, 2000, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@AreaName", AreaName, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@ContactPerson", ContactPerson, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@ContactMob", ContactMob, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@ContactEmail", ContactEmail, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@Website", Website, SqlDbType.VarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@PropertyType", PropertyType, SqlDbType.VarChar, 500, ParameterDirection.Input));

            arrList.Add(PrepareCommand("@return", "", SqlDbType.Int, 0, ParameterDirection.Output));
            string result = ExecNonQueryProc("SetClientMaster", arrList.ToArray());
            return result;
        }


        public string Insert_client_signup(string firmname, string pincode, string address, string ownername, string emailid, string mobileno, string username, string password, string Customertype, string gstno)
        {
            ArrayList arrList = new ArrayList();
            arrList.Add(PrepareCommand("@firmname", firmname, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@pincode", pincode, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@address", address, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@ownername", ownername, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@emailid", emailid, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@mobileno", mobileno, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@username", username, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@password", password, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@gstno", gstno, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@customertype", Customertype, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            string result = ExecNonQueryProc("set_clientsignup", arrList.ToArray());
            return result;
        }

        public string set_ProductOrder(int clientid, decimal totalamt, decimal gstamt, decimal netamt, string cartid)
        {
            ArrayList arrList = new ArrayList();
            arrList.Add(PrepareCommand("@clientid", clientid, SqlDbType.Int, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@totalamt", totalamt, SqlDbType.Decimal, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@gstamt", gstamt, SqlDbType.Decimal, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@netamt", netamt, SqlDbType.Decimal, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@cartid", cartid, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            DataTable dd = ExecDataTableProc("set_ProductOrder", arrList.ToArray());
            return dd.Rows[0][0].ToString();
        }

        public string set_Orderpayment(int orderid, int directbank, int upi, decimal netamt)
        {
            ArrayList arrList = new ArrayList();
            arrList.Add(PrepareCommand("@orderid", orderid, SqlDbType.Int, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@directbank", directbank, SqlDbType.Int, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@upi", upi, SqlDbType.Int, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@amount", netamt, SqlDbType.Decimal, 500, ParameterDirection.Input));
            string result = ExecNonQueryProc("set_Orderpayment", arrList.ToArray());
            return result;
        }
        public string set_orderbilling(int orderid, string firstname, string lastname, string companyname, int clientid, int countryid, string address, string town, string state,
            string postcode, string phone, string email, int is_ship_different_address)
        {
            ArrayList arrList = new ArrayList();
            arrList.Add(PrepareCommand("@orderid", clientid, SqlDbType.Int, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@firstname", firstname, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@lastname", lastname, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@companyname", companyname, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@clientid", clientid, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@countryid", countryid, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@address", address, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@town", town, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@state", state, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@postcode", postcode, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@phone", phone, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@email", email, SqlDbType.NVarChar, 500, ParameterDirection.Input));
            arrList.Add(PrepareCommand("@is_ship_different_address", is_ship_different_address, SqlDbType.Int, 500, ParameterDirection.Input));
            string result = ExecNonQueryProc("set_orderbilling", arrList.ToArray());
            return result;
        }
    }
}