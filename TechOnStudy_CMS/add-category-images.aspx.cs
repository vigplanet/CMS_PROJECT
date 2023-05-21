using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace TechOnStudy_CMS.Admin
{
    public partial class add_category_images : System.Web.UI.Page
    {
        BusinessLogicLayer bll = new BusinessLogicLayer();
        Encryption64 enc = new Encryption64();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {

                ddproduct.DataSource = bll.GetDataSet("select 0 CategoryId,'Select' as CategoryName UNION ALL select CategoryId,CategoryName from [ProductCategory] where Status=1");
                ddproduct.DataTextField = "CategoryName";
                ddproduct.DataValueField = "CategoryId";
                ddproduct.DataBind();

            }
        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            if (ddproduct.SelectedIndex > 0)
            {
                //int ClientID = 0;
                //if (Request.QueryString["ClientID"] != null)
                //{
                //    ClientID = Convert.ToInt32(Server.UrlDecode(enc.Decrypt(Request.QueryString["ClientID"].ToString())));
                //}

                string img1 = "", img2 = "", img3 = "", img4 = "", img5 = "";
                  #region PDF UPLOAD 2
                try
                {
                    if (FileUpload2.HasFile)
                    {
                        string PDFVDfilename = Path.GetFileName(FileUpload2.PostedFile.FileName);
                        string ext = Path.GetExtension(PDFVDfilename);
                        img2 = "PD_IMG2_" + ddproduct.SelectedValue.ToString() + ext;
                        //if (ext == ".pdf")
                        {
                            if (File.Exists(Server.MapPath("~/assets/images/category-image/" + img2)))
                            {
                                File.Delete(Server.MapPath("~/assets/images/category-image/" + img2));
                            }
                            FileUpload2.SaveAs(Server.MapPath("~/assets/images/category-image/" + img2));
                        }
                    }
                    else
                    {
                        //img1 = dtExist.Rows[0]["PDF_filePath"].ToString();
                        img2 = "";
                    }
                }
                catch { }
                #endregion

                

              

 
                int a = bll.ExecNonQuery("Update [dbo].[ProductCategory] set imgfile='"+ img2 + "' where CategoryID=" + ddproduct.SelectedValue);




                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Record Inserted Successfully')", true);
                Response.Redirect("add-category-images.aspx");
            }
            else
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select Product')", true);
            }

        }
    }
}