using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace TechOnStudy_CMS
{
    public partial class ShowAllStudentList : System.Web.UI.Page
    {
        BusinessLogicLayer bl = new BusinessLogicLayer();
        Encryption64 enc = new Encryption64();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                FillDataBind();
            }
        }

        private void FillDataBind()
        {
            DataTable ds;
            string str = "select * from VIEW_STUDENT_DATA";

            str += " Order By id desc";

            ds = bl.ExecDataTable(str);
            GridView1.DataSource = ds;
            GridView1.DataBind();
        }

        protected void GridView1_RowEditing(object sender, GridViewEditEventArgs e)
        {
            GridView1.EditIndex = e.NewEditIndex;
            string userid = GridView1.DataKeys[e.NewEditIndex].Value.ToString();
            Response.Redirect("AddProductNew.aspx?ClientID=" + HttpUtility.HtmlEncode(enc.Encrypt(userid)));
        }

        protected void btnSearch_Click(object sender, EventArgs e)
        {
        }

        protected void GridView1_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "Print")
            {
                //Determine the RowIndex of the Row whose Button was clicked.
                int rowIndex = Convert.ToInt32(e.CommandArgument);

                //Reference the GridView Row.
                GridViewRow row = GridView1.Rows[rowIndex];
                string userid = GridView1.DataKeys[rowIndex].Value.ToString();
                Response.Redirect("PrintAdmisisonPDF.aspx?id=" + userid);
                //Fetch value of Name.
                //  string name = (row.FindControl("txtName") as TextBox).Text;

                //Fetch value of Country
                string Photos = row.Cells[48].Text;

                //  ClientScript.RegisterStartupScript(this.GetType(), "alert", "alert('Name: " + name + "\\nCountry: " + country + "');", true);
            }

            //if (e.CommandName == "Delete")
            //{
            //    int rowIndex = Convert.ToInt32(e.CommandArgument);
            //    GridViewRow row = GridView1.Rows[rowIndex];
            //    DataSet dt = new DataSet();
            //    string userid = GridView1.DataKeys[rowIndex].Value.ToString();
            //    //dt = bl.GetDataSet("select * from [dbo].[VIEW_STUDENT_DATA] where id=" + userid);
            //    bl.ExecNonQueryProc("delete from StudentAdmissionForm where id=" + userid);

            //}
            //if (e.CommandName == "Photo")
            //{
            //    int rowIndex = Convert.ToInt32(e.CommandArgument);
            //    GridViewRow row = GridView1.Rows[rowIndex];
            //    DataSet dt = new DataSet();
            //    string userid = GridView1.DataKeys[rowIndex].Value.ToString();
            //    dt = bl.GetDataSet("select * from [dbo].[VIEW_STUDENT_DATA] where id=" + userid);

            //    string Photos = dt.Tables[0].Rows[0]["PHOTOS"].ToString();
            //    string PhotoUrl = new Uri(Server.MapPath("~/Upload/PHOTO/" + Photos)).AbsoluteUri;
            //    string fileExtention = Path.GetExtension(PhotoUrl);
            //    WebClient client = new WebClient();
            //    Byte[] buffer = client.DownloadData(PhotoUrl);
            //    Response.ContentType = ReturnExtension(fileExtention);

            //    Response.AddHeader("content-length", buffer.Length.ToString());
            //    Response.BinaryWrite(buffer);
            //}
            //if (e.CommandName == "Sign")
            //{
            //    int rowIndex = Convert.ToInt32(e.CommandArgument);
            //    GridViewRow row = GridView1.Rows[rowIndex];
            //    string userid = GridView1.DataKeys[rowIndex].Value.ToString();
            //    DataSet dt = new DataSet();
            //    dt = bl.GetDataSet("select * from [dbo].[VIEW_STUDENT_DATA] where id=" + userid);

            //    string Photos = dt.Tables[0].Rows[0]["SIGNATURE"].ToString();
            //    string PhotoUrl = new Uri(Server.MapPath("~/Upload/SIGNATURE/" + Photos)).AbsoluteUri;
            //    string fileExtention = Path.GetExtension(PhotoUrl);
            //    WebClient client = new WebClient();
            //    Byte[] buffer = client.DownloadData(PhotoUrl);
            //    Response.ContentType = ReturnExtension(fileExtention);

            //    Response.AddHeader("content-length", buffer.Length.ToString());
            //    Response.BinaryWrite(buffer);
            //}
            if (e.CommandName == "Id")
            {
                int rowIndex = Convert.ToInt32(e.CommandArgument);
                GridViewRow row = GridView1.Rows[rowIndex];
                string userid = GridView1.DataKeys[rowIndex].Value.ToString();
                //DataSet dt = new DataSet();
                //dt = bl.GetDataSet("select * from [dbo].[VIEW_STUDENT_DATA] where id=" + userid);

                //string Photos = dt.Tables[0].Rows[0]["IDPROOF"].ToString();
                //string PhotoUrl = new Uri(Server.MapPath("~/Upload/IDPROOF/" + Photos)).AbsoluteUri;

                Response.Redirect("ShowId.aspx?Id=" + userid);

                //string fileExtention = Path.GetExtension(PhotoUrl);
                //WebClient client = new WebClient();
                //Byte[] buffer = client.DownloadData(PhotoUrl);
                //Response.ContentType = ReturnExtension(fileExtention);

                //Response.AddHeader("content-length", buffer.Length.ToString());
                //Response.BinaryWrite(buffer);
            }
            //if (e.CommandName == "AdmitCard")
            //{
            //    int rowIndex = Convert.ToInt32(e.CommandArgument);
            //    GridViewRow row = GridView1.Rows[rowIndex]; DataSet dt = new DataSet();
            //    string userid = GridView1.DataKeys[rowIndex].Value.ToString();
            //    dt = bl.GetDataSet("select * from [dbo].[VIEW_STUDENT_DATA] where id=" + userid);


            //    string Photos = dt.Tables[0].Rows[0]["ADMITCARD"].ToString();
            //    string PhotoUrl = new Uri(Server.MapPath("~/Upload/" + Photos)).AbsoluteUri;
            //    string fileExtention = Path.GetExtension(PhotoUrl);
            //    WebClient client = new WebClient();
            //    Byte[] buffer = client.DownloadData(PhotoUrl);
            //    Response.ContentType = ReturnExtension(fileExtention);

            //    Response.AddHeader("content-length", buffer.Length.ToString());
            //    Response.BinaryWrite(buffer);
            //}
        }

        //private string ReturnExtension(string fileExtension)
        //{
        //    switch (fileExtension)
        //    {
        //        case ".htm":
        //        case ".html":
        //        case ".log":
        //            return "text/HTML";
        //        case ".txt":
        //            return "text/plain";
        //        case ".doc":
        //            return "application/ms-word";
        //        case ".tiff":
        //        case ".tif":
        //            return "image/tiff";
        //        case ".asf":
        //            return "video/x-ms-asf";
        //        case ".avi":
        //            return "video/avi";
        //        case ".zip":
        //            return "application/zip";
        //        case ".xls":
        //        case ".csv":
        //            return "application/vnd.ms-excel";
        //        case ".gif":
        //            return "image/gif";
        //        case ".jpg":
        //        case "jpeg":
        //            return "image/jpeg";
        //        case ".png":
        //            return "image/png";
        //        case ".bmp":
        //            return "image/bmp";
        //        case ".wav":
        //            return "audio/wav";
        //        case ".mp3":
        //            return "audio/mpeg3";
        //        case ".mpg":
        //        case "mpeg":
        //            return "video/mpeg";
        //        case ".rtf":
        //            return "application/rtf";
        //        case ".asp":
        //            return "text/asp";
        //        case ".pdf":
        //            return "application/pdf";
        //        case ".fdf":
        //            return "application/vnd.fdf";
        //        case ".ppt":
        //            return "application/mspowerpoint";
        //        case ".dwg":
        //            return "image/vnd.dwg";
        //        case ".msg":
        //            return "application/msoutlook";
        //        case ".xml":
        //        case ".sdxl":
        //            return "application/xml";
        //        case ".xdp":
        //            return "application/vnd.adobe.xdp+xml";
        //        default:
        //            return "application/octet-stream";
        //    }
        //}

        protected void GridView1_RowDeleted(object sender, GridViewDeletedEventArgs e)
        {

         
        }

        protected void GridView1_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            GridViewRow row = (GridViewRow)GridView1.Rows[e.RowIndex];            
            string userid = GridView1.DataKeys[e.RowIndex].Value.ToString();
            bl.ExecNonQuery("delete from StudentAdmissionForm where id=" + userid);
            FillDataBind();
        }
    }
}
