using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace TechOnStudy_CMS.pdc
{
    public partial class _default : System.Web.UI.Page
    {
        BusinessLogicLayer BLL = new BusinessLogicLayer();
        Encryption64 enc = new Encryption64();
        protected void Page_Load(object sender, EventArgs e)
        {
            password.Value = "india@#2018";
        }
        protected void Button1_Click(object sender, EventArgs e)
        {
            Session.Clear();
            //SqlDataReader Dr = BLL.CheckAdminLogin(username.Value, password.Value);
            SqlDataReader Dr = BLL.CheckAdminLogin(username.Value.Trim(), enc.Encrypt(password.Value.Trim()));
            if (Dr.Read())
            {

                HttpCookie BloggerCookies = new HttpCookie("AdminCookies");
                if (BloggerCookies != null)
                {
                    BloggerCookies.Expires = DateTime.Now.AddDays(-1);
                }
                Session["userid"] = Dr["Sno"].ToString();
                BloggerCookies["userid"] = Dr["Sno"].ToString();
                BloggerCookies["user"] = "Admin";
                BloggerCookies["Username"] = Dr["Username"].ToString();
                BloggerCookies.Expires = DateTime.Now.AddHours(12);
                Response.Cookies.Add(BloggerCookies);


                //Session["Loginid"] = user.Value;
                //Session["User"] = "Admin";
                Response.Redirect("Dashboard.aspx", false);
            }
        }

        protected void Button1_Click1(object sender, EventArgs e)
        {

        }
    }
}