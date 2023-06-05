using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace TechOnStudy_CMS
{
    public partial class ShowId : System.Web.UI.Page
    {
        BusinessLogicLayer bl = new BusinessLogicLayer();
        Encryption64 enc = new Encryption64();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.QueryString["Id"] != null)
            {

                DataSet dt = new DataSet();
                dt = bl.GetDataSet("select * from [dbo].[VIEW_STUDENT_DATA] where id=" + Request.QueryString["Id"].ToString());

                //dt.Tables[0].Rows[0]["PHOTOS"] = new Uri(Server.MapPath("~/Upload/PHOTO/" + dt.Tables[0].Rows[0]["PHOTOS"])).AbsoluteUri;
                //dt.Tables[0].Rows[0]["SIGNATURE"] = new Uri(Server.MapPath("~/Upload/SIGNATURE/" + dt.Tables[0].Rows[0]["SIGNATURE"])).AbsoluteUri;
                //  dt.Tables[0].Rows[0]["IDPROOF"] = new Uri(Server.MapPath("~/Upload/ID/" + "ddae8c94-2999-4122-99de-c28fb7d68e00.jpg")).AbsoluteUri;
                imgid.Src = "~/Upload/ID/" + dt.Tables[0].Rows[0]["IDPROOF"].ToString();
            }
        }
    }
}