using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace TechOnStudy_CMS.Admin
{
    public partial class productlist : System.Web.UI.Page
    {
        BusinessLogicLayer bl = new BusinessLogicLayer();
        Encryption64 enc = new Encryption64();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                //Ft_ddcity.DataSource = bl.GetDataSet("select 0 CityID,'Select City' as CityName UNION ALL Select CityID,CityName From CityMaster where status=1");
                //Ft_ddcity.DataTextField = "CityName";
                //Ft_ddcity.DataValueField = "CityID";
                //Ft_ddcity.DataBind();

                //Ft_ddarea.DataSource = bl.GetDataSet("select 0 AreaID,'Select Area' as AreaName UNION ALL Select AreaID,AreaName From AreaMaster where status=1");
                //Ft_ddarea.DataTextField = "AreaName";
                //Ft_ddarea.DataValueField = "AreaID";
                //Ft_ddarea.DataBind();

                //Ft_ddsalesexctive.DataSource = bl.GetDataSet("select 0 EmpID,'Select' as EmpName UNION ALL Select EmpID,EmpName from dbo.EmployeeMaster where Status=1");
                //Ft_ddsalesexctive.DataTextField = "EmpName";
                //Ft_ddsalesexctive.DataValueField = "EmpID";
                //Ft_ddsalesexctive.DataBind();

                FillDataBind();
            }
        }

        private void FillDataBind()
        {
            DataTable ds;
            string str = "select productid,productcode,categoryname,productname,mrprate,description,subcatname from View_ProductDetails where status=1";
            //if (CheckBox1.Checked == false)
            {
                //if (Ft_ddsalesexctive.SelectedIndex > 0)
                //{
                //    str += " AND EmpID=" + Ft_ddsalesexctive.SelectedValue;
                //}
                //if (Ft_ddcity.SelectedIndex > 0)
                //{
                //    str += " AND CityName='" + Ft_ddcity.SelectedValue + "'";
                //}
                //if (Ft_ddarea.SelectedIndex > 0)
                //{
                //    str += " AND AreaName='" + Ft_ddarea.SelectedValue + "'";
                //}

                if (Ft_txtClientCode.Text != "")
                {
                    str += " AND productcode like '%" + Ft_txtClientCode.Text + "%'";
                }
                if (Ft_txtclientname.Text != "")
                {
                    str += " AND productname like '%" + Ft_txtclientname.Text + "%'";
                }
                //if (Ft_txtmobileno.Text != "")
                //{
                //    str += " AND MobileNo like '%" + Ft_txtmobileno.Text + "%'";
                //}
                //if (Ft_txtemailid.Text != "")
                //{
                //    str += " AND EmailID like '%" + Ft_txtemailid.Text + "%'";
                //}
            }
            str += " Order By productname";

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
            FillDataBind();
            //Ft_ddsalesexctive.SelectedIndex = 0;
            //Ft_ddcity.SelectedIndex = 0;
            //Ft_ddarea.SelectedIndex = 0;
            Ft_txtClientCode.Text = "";
            Ft_txtclientname.Text = "";
            //Ft_txtmobileno.Text = "";
            //Ft_txtemailid.Text = "";

        }
    }
}
