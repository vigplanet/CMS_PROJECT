using Microsoft.Reporting.WebForms;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace TechOnStudy_CMS
{
    public partial class PrintAdmisisonPDF : System.Web.UI.Page
    {
        BusinessLogicLayer bll = new BusinessLogicLayer();
        Encryption64 enc = new Encryption64();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Request.QueryString["Id"] != null)
                {

                    DataSet dt = new DataSet();
                    dt = bll.GetDataSet("select * from [dbo].[VIEW_STUDENT_DATA] where id=" + Request.QueryString["Id"].ToString());

                    dt.Tables[0].Rows[0]["PHOTOS"] = new Uri(Server.MapPath("~/Upload/PHOTO/" + dt.Tables[0].Rows[0]["PHOTOS"])).AbsoluteUri;
                    dt.Tables[0].Rows[0]["SIGNATURE"] = new Uri(Server.MapPath("~/Upload/SIGNATURE/" + dt.Tables[0].Rows[0]["SIGNATURE"])).AbsoluteUri;
                    dt.Tables[0].Rows[0]["IDPROOF"] = new Uri(Server.MapPath("~/Upload/ID/" + dt.Tables[0].Rows[0]["IDPROOF"])).AbsoluteUri;


                    ReportDataSource datasource1 = new ReportDataSource("DataSet1", dt.Tables[0]);
                    ReportViewer1.LocalReport.DataSources.Add(datasource1);
                    ReportViewer1.LocalReport.EnableExternalImages = true;
                    ReportViewer1.LocalReport.ReportPath = "PrintAdmissionReport.rdlc";


                    Warning[] warnings;
                    string[] streamIds;
                    string mimeType = string.Empty;
                    string encoding = string.Empty;
                    string extension = string.Empty;
                    Response.Buffer = true;
                    Response.Clear();
                    Response.AppendHeader("content-disposition", "attachement filename=FILES.pdf");
                    Response.ContentType = "application/PDF";

                    ReportViewer1.ProcessingMode = ProcessingMode.Local;
                    ReportViewer1.LocalReport.EnableExternalImages = true;
                    byte[] bytes = ReportViewer1.LocalReport.Render("PDF", null, out mimeType, out encoding, out extension, out streamIds, out warnings);
                    string subPath = "FILES";
                    bool exists = System.IO.Directory.Exists(HttpContext.Current.Server.MapPath(subPath));

                    if (exists)
                    {
                        System.IO.FileStream fs = System.IO.File.Create(HttpContext.Current.Server.MapPath(subPath + "/" + dt.Tables[0].Rows[0]["EnrollNo"].ToString() + ".pdf"));
                        fs.Write(bytes, 0, bytes.Length);
                        fs.Close();
                    }
                    else
                    {
                        System.IO.Directory.CreateDirectory(HttpContext.Current.Server.MapPath(subPath));
                        System.IO.FileStream fs = System.IO.File.Create(HttpContext.Current.Server.MapPath(subPath + "/" + dt.Tables[0].Rows[0]["EnrollNo"].ToString() + ".pdf"));
                        fs.Write(bytes, 0, bytes.Length);
                        fs.Close();
                    }


                    bytes = File.ReadAllBytes(HttpContext.Current.Server.MapPath(subPath + "/" + dt.Tables[0].Rows[0]["EnrollNo"].ToString() + ".pdf"));
                    // File.Delete(HttpContext.Current.Server.MapPath(subPath + "/" + doc_sno + "-DEED" + ".pdf"));

                    Response.BinaryWrite(bytes);
                    Response.Flush();


                }
            }
        }

        //protected void Button1_Click(object sender, EventArgs e)
        //{
        //    Warning[] warnings;
        //    string[] streamIds;
        //    string mimeType = string.Empty;
        //    string encoding = string.Empty;
        //    string extension = string.Empty;
        //    Response.Buffer = true;
        //    Response.Clear();
        //    Response.AppendHeader("content-disposition", "attachement filename=FILES.pdf");
        //    Response.ContentType = "application/PDF";

        //    ReportViewer1.ProcessingMode = ProcessingMode.Local;
        //    ReportViewer1.LocalReport.EnableExternalImages = true;
        //    byte[] bytes = ReportViewer1.LocalReport.Render("PDF", null, out mimeType, out encoding, out extension, out streamIds, out warnings);
        //    string subPath = "FILES";
        //    bool exists = System.IO.Directory.Exists(HttpContext.Current.Server.MapPath(subPath));

        //    if (exists)
        //    {
        //        System.IO.FileStream fs = System.IO.File.Create(HttpContext.Current.Server.MapPath(subPath + "/" + "5" + "-DEED" + ".pdf"));
        //        fs.Write(bytes, 0, bytes.Length);
        //        fs.Close();
        //    }
        //    else
        //    {
        //        System.IO.Directory.CreateDirectory(HttpContext.Current.Server.MapPath(subPath));
        //        System.IO.FileStream fs = System.IO.File.Create(HttpContext.Current.Server.MapPath(subPath + "/" + "5" + "-DEED" + ".pdf"));
        //        fs.Write(bytes, 0, bytes.Length);
        //        fs.Close();
        //    }


        //    bytes = File.ReadAllBytes(HttpContext.Current.Server.MapPath(subPath + "/" + "5" + "-DEED" + ".pdf"));
        //    // File.Delete(HttpContext.Current.Server.MapPath(subPath + "/" + doc_sno + "-DEED" + ".pdf"));

        //    Response.BinaryWrite(bytes);
        //    Response.Flush();

        //}
    }
}