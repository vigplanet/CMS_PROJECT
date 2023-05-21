using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace TechOnStudy_CMS
{
    public partial class AddProductNew : System.Web.UI.Page
    {
        BusinessLogicLayer bll = new BusinessLogicLayer();
        Encryption64 enc = new Encryption64();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                //ddcity.DataSource = bll.GetDataSet("select 0 CityID,'Select City' as CityName UNION ALL Select CityID,CityName From CityMaster where status=1");
                //ddcity.DataTextField = "CityName";
                //ddcity.DataValueField = "CityID";
                //ddcity.DataBind();



                ddArea.DataSource = bll.GetDataSet("select 0 CategoryId,'Select' as CategoryName UNION ALL select CategoryId,CategoryName from ProductCategory where Status=1");
                ddArea.DataTextField = "CategoryName";
                ddArea.DataValueField = "CategoryId";
                ddArea.DataBind();

                //ddsaleemp.DataSource = bll.GetDataSet("select 0 EmpID,'Select' as EmpName UNION ALL Select EmpID,EmpName from dbo.EmployeeMaster where Status=1");
                //ddsaleemp.DataTextField = "EmpName";
                //ddsaleemp.DataValueField = "EmpID";
                //ddsaleemp.DataBind();
                generateClientCode();

                if (Request.QueryString["ClientID"] != null)
                {
                    FillEditMode(Convert.ToInt32(Server.UrlDecode(enc.Decrypt(Request.QueryString["ClientID"].ToString()))));
                }
            }
        }

        private void FillEditMode(int _ClientID)
        {
            DataTable dt = new DataTable();
            dt = bll.ExecDataTable(" select * from productmaster cn Where productid=" + _ClientID);
            if (dt.Rows.Count > 0)
            {
                txtcode.Text = dt.Rows[0]["Productcode"].ToString();
                txtproductname.Text = dt.Rows[0]["ProductName"].ToString();
                txtmrprate.Text = dt.Rows[0]["MrpRate"].ToString();
                txtdealerrate.Text = dt.Rows[0]["dealerrate"].ToString();
                ddArea.SelectedValue = dt.Rows[0]["CategoryId"].ToString();
                ddArea_SelectedIndexChanged(ddArea, new EventArgs());
                DropDownList1.SelectedValue = dt.Rows[0]["SubCategoryId"].ToString();
                txtOverview.Text = Server.HtmlEncode(dt.Rows[0]["Description"].ToString());
                //txtemailID.Text = dt.Rows[0]["EmailID"].ToString();
                //txtphno.Text = dt.Rows[0]["PhNo"].ToString();
                //txtMObileNO.Text = dt.Rows[0]["MobileNo"].ToString();
                //txtOverview.Text = dt.Rows[0]["OverView"].ToString();
                ////txtfacebook.Text = dt.Rows[0]["FBLink"].ToString();
                ////txttwitter.Text = dt.Rows[0]["TwitterLink"].ToString();
                ////txtgoogle.Text = dt.Rows[0]["GooglePlus"].ToString();
                ////txtInstagram.Text = dt.Rows[0]["Instagram"].ToString();
                ////txtLinkedIn.Text = dt.Rows[0]["LinkedIN"].ToString();
                ////txtYoutube.Text = dt.Rows[0]["Youtube"].ToString();
                //ddcity.SelectedValue = dt.Rows[0]["CityID"].ToString();
                //txtaddress.Text = dt.Rows[0]["Address"].ToString();
                //txtOverview.Text = dt.Rows[0]["OverView"].ToString();
                ////txtGoogleMap.Text = dt.Rows[0]["MapPath"].ToString();
                //ddArea.SelectedValue = dt.Rows[0]["AreaID"].ToString();
                ////txtContactPerson.Text = dt.Rows[0]["ContactPerson"].ToString();
                ////txtContactMob.Text = dt.Rows[0]["ContactMob"].ToString();
                ////txtContactEmail.Text = dt.Rows[0]["ContactEmail"].ToString();
                ////txtwebsite.Text = dt.Rows[0]["Website"].ToString();
                //ddpropertytype.Text = dt.Rows[0]["PropertyType"].ToString();
            }
            //ClientID, txtcode.Text, txtClientName.Text, 0, txtemailID.Text, txtphno.Text, txtMObileNO.Text, Mid, Pass, 
            //txtaddress.Text, txtOverview.Text, ddcity.SelectedItem.ToString(), ddArea.SelectedItem.ToString(), ddpropertytype.SelectedItem.ToString(), 
            //ddsaleemp.SelectedValue.ToString()
        }

        private void generateClientCode()
        {
            txtcode.Text = Convert.ToString(bll.ExecScalar("Select 'PHCL_'+Convert(nvarchar(50),ISNULL(MAx(productid),0)+1) from productmaster"));
        }


        protected void Button2_Click(object sender, EventArgs e)
        {
            int ClientID = 0;
            if (Request.QueryString["ClientID"] != null)
            {
                ClientID = Convert.ToInt32(Server.UrlDecode(enc.Decrypt(Request.QueryString["ClientID"].ToString())));
            }

            if (ClientID == 0)
            {
                //string strchk = "";
                //if (txtMObileNO.Text.Trim() != "")
                //    strchk += "Select SUM(Cnt) from ( Select Count(*) as cnt from dbo.ClientMaster where MobileNo='" + txtMObileNO.Text + "'";
                //if (txtMObileNO.Text.Trim() != "" && txtemailID.Text.Trim() != "")
                //    strchk += " UNION ALL ";
                //if (txtemailID.Text.Trim() != "")
                //    strchk += " Select Count(*) from dbo.ClientMaster where EmailID='" + txtemailID.Text + "' )dt";
                //int cntchk = Convert.ToInt32(bll.ExecScalar(strchk));
                //if (cntchk > 0)
                //{
                //    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Duplicate Entry Not Allowed')", true);
                //    return;
                //}
            }

            //string Mid = bll.GenerateCode(8);
            //string Pass = enc.Encrypt(bll.GenerateCode(6));


            string a = bll.InsertProductMaster(ClientID, txtcode.Text, txtcode.Text, txtproductname.Text, txtmrprate.Text, "", 1, Convert.ToInt32(ddArea.SelectedValue), 1, Server.HtmlDecode(txtOverview.Text), Convert.ToInt32(DropDownList1.SelectedValue), txtdealerrate.Text);


            //if (ClientID == 0)
            //{
            //    try
            //    {
            //        MailSender.SendEmail("pghostel.2018@gmail.com",
            //              "pghos@1234~", txtemailID.Text,
            //              "PG-HOSTEL.COM", "Welcome to PG-HOSTEL.COM " + Environment.NewLine +
            //              "Congratulations for be a part of PG-HOSTEL.COM.  " + Environment.NewLine +
            //              "Your Login Details : " + Environment.NewLine +
            //              "User Name : " + Mid + Environment.NewLine +
            //              "Password : " + enc.Decrypt(Pass) + Environment.NewLine +
            //              "Click this Link for Login http://pg-hostel.com/login-page.aspx"
            //              , System.Web.Mail.MailFormat.Text, "", "");
            //    }
            //    catch { }
            //}
            FillAttriute(a);

            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Record Inserted Successfully')", true);
            if (ClientID == 0)
            {
                Response.Redirect("AddProductNew.aspx");
            }
            else
                Response.Redirect("productlist.aspx");
        }

        private void FillAttriute(string _pid)
        {
            TextBox txtvaluename = new TextBox();


            HiddenField HiddenField1 = new HiddenField();
            HiddenField hdnsrvid = new HiddenField();
            CheckBox chkid = new CheckBox();
            foreach (GridViewRow item in DataDisplay.Rows)
            {
                hdnsrvid = (HiddenField)item.FindControl("hdnsrvid");
                HiddenField1 = (HiddenField)item.FindControl("HiddenField1");
                txtvaluename = (TextBox)item.FindControl("txtvaluename");
                chkid = (CheckBox)item.FindControl("chkid");
                if (hdnsrvid != null)
                {
                    if (hdnsrvid.Value.ToString() != "")
                    {
                        if (chkid.Checked)
                        {
                            bll.ExecNonQuery("EXEC [setProduct_Att_data] " + (Convert.ToString(HiddenField1.Value) == "" ? "0" : HiddenField1.Value) + "," + _pid + "," + hdnsrvid.Value + ",'" + txtvaluename.Text + "'");
                            //string c = Convert.ToString(bll.ExecScalar("Select count(*) from tbl_MarkMasterQuestion Where SurveyID=" + ddlexam.SelectedValue + " AND Qid=" + hdnid.Value));
                            //int a = 0;
                            //if (c == "0")
                            //{
                            //    int cnt = 0;
                            //    cnt = Convert.ToInt32(bll.ExecScalar("Select isnull(max(cnt),0)+1 from tbl_MarkMasterQuestion "));
                            //    a = bll.ExecNonQuery("insert into tbl_MarkMasterQuestion(cnt, SurveyID, Qid, Correct, wrong, Attend, OnDate)values(@cnt, @SurveyID, @Qid, @Correct, @wrong, @Attend, getdate())",
                            //        "@Correct", Convert.ToDecimal(txtcorrect.Text.Trim() == "" ? "0" : txtcorrect.Text.Trim()),
                            //        "@wrong", Convert.ToDecimal(txtwrong.Text.Trim() == "" ? "0" : txtwrong.Text.Trim()),
                            //        "@Attend", Convert.ToDecimal(txtattend.Text.Trim() == "" ? "0" : txtattend.Text.Trim()),
                            //        "@Qid", hdnid.Value,
                            //        "@SurveyID", ddlexam.SelectedValue,
                            //        "@cnt", cnt);
                            //}
                            //else
                            //{
                            //    a = bll.ExecNonQuery("Update tbl_MarkMasterQuestion  Set Correct=@Correct,wrong=@wrong,Attend=@Attend,OnDate=getdate() where Surveyid=@Surveyid AND Qid=@Qid", "@Correct",
                            //        Convert.ToDecimal(txtcorrect.Text.Trim() == "" ? "0" : txtcorrect.Text.Trim()), "@wrong", Convert.ToDecimal(txtwrong.Text.Trim() == "" ? "0" : txtwrong.Text.Trim()), "@Attend", Convert.ToDecimal(txtattend.Text.Trim() == "" ? "0" : txtattend.Text.Trim()), "@Qid", hdnid.Value, "@SurveyID", ddlexam.SelectedValue);
                            //}
                        }
                    }
                }
            }
        }

        protected void ddArea_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (ddArea.SelectedIndex > 0)
            {
                DropDownList1.DataSource = bll.GetDataSet("select 0 subcategoryid,'Select' as subcatname UNION ALL select subcategoryid,subcatname from Productsubcategory where status=1 and categoryid=" + ddArea.SelectedValue);
                DropDownList1.DataTextField = "subcatname";
                DropDownList1.DataValueField = "subcategoryid";
                DropDownList1.DataBind();

                DataTable ds;
                string str = "select *,'' as Avalue,id as Attid,0 as dtid from dbo.ProdductCategory_attribute where status=1 and CategoryId=" + ddArea.SelectedValue;
                str += " Order By Name";
                ds = bll.ExecDataTable(str);
                string ClientID = "0";
                if (Request.QueryString["ClientID"] != null)
                {
                    ClientID = Convert.ToString(Server.UrlDecode(enc.Decrypt(Request.QueryString["ClientID"].ToString())));
                }
                DataTable dspr = new DataTable();
                string strPro = "select a.ProductId,	a.Attid	,a.Avalue	,a.id  	dtid,CategoryId	,Name	from  [Product_Att_data] a inner join [ProdductCategory_attribute] b on a.attid = b.id where productid = " + ClientID;
                dspr = bll.ExecDataTable(strPro);
                //GridView1.DataSource = ds;
                //GridView1.DataBind();
                if (dspr.Rows.Count <= 0)
                {
                    DataDisplay.DataSource = ds;
                }
                else
                { DataDisplay.DataSource = dspr; }
                DataDisplay.DataBind();
            }
        }


    }
}