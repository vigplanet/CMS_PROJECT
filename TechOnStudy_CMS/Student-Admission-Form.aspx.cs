using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using TechOnStudy_CMS.App_Code;

namespace TechOnStudy_CMS
{
    public partial class Student_Admission_Form : System.Web.UI.Page
    {
        BusinessLogicLayer bll = new BusinessLogicLayer();
        Encryption64 enc = new Encryption64();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                Page.Form.Attributes.Add("enctype", "multipart/form-data");
                ddlCountry.DataSource = bll.GetDataSet("select 0 CountryId,'Select' as CountryName UNION ALL select CountryId,CountryName from [Country_Master] order by countryname");
                ddlCountry.DataTextField = "CountryName";
                ddlCountry.DataValueField = "CountryId";
                ddlCountry.DataBind();

                ddl_cd_country.DataSource = bll.GetDataSet("select 0 CountryId,'Select' as CountryName UNION ALL select CountryId,CountryName from [Country_Master] order by countryname");
                ddl_cd_country.DataTextField = "CountryName";
                ddl_cd_country.DataValueField = "CountryId";
                ddl_cd_country.DataBind();
            }
        }

        protected void ddlCountry_SelectedIndexChanged(object sender, EventArgs e)
        {
            ddlstate.DataSource = bll.GetDataSet("select 0 StateId,'Select' as StateName UNION ALL select StateId,StateName from [State_Master] where CountryId=" + ddlCountry.SelectedValue + " order by StateName");
            ddlstate.DataTextField = "StateName";
            ddlstate.DataValueField = "StateId";
            ddlstate.DataBind();
        }

        protected void ddlstate_SelectedIndexChanged(object sender, EventArgs e)
        {
            ddlcity.DataSource = bll.GetDataSet("select 0 id,'Select' as CityName UNION ALL select id,CityName from [City_Master] where StateId=" + ddlstate.SelectedValue + " order by CityName");
            ddlcity.DataTextField = "CityName";
            ddlcity.DataValueField = "id";
            ddlcity.DataBind();
        }

        protected void ddl_cd_country_SelectedIndexChanged(object sender, EventArgs e)
        {
            ddl_cd_state.DataSource = bll.GetDataSet("select 0 StateId,'Select' as StateName UNION ALL select StateId,StateName from [State_Master] where CountryId=" + ddl_cd_country.SelectedValue + " order by StateName");
            ddl_cd_state.DataTextField = "StateName";
            ddl_cd_state.DataValueField = "StateId";
            ddl_cd_state.DataBind();
        }

        protected void ddl_cd_state_SelectedIndexChanged(object sender, EventArgs e)
        {
            ddl_cd_city.DataSource = bll.GetDataSet("select 0 id,'Select' as CityName UNION ALL select id,CityName from [City_Master] where StateId=" + ddl_cd_state.SelectedValue + " order by CityName");
            ddl_cd_city.DataTextField = "CityName";
            ddl_cd_city.DataValueField = "id";
            ddl_cd_city.DataBind();
        }

        protected void chksame_CheckedChanged(object sender, EventArgs e)
        {
            if (chksame.Checked == true)
            {
                txtCOMMUNICATION_ADDRESS.Text = txtPERMANENT_ADDRESS.Text;
                txt_cd_city.Text = txtCity.Text;
                ddl_cd_country.SelectedValue = ddlCountry.SelectedValue;
                ddl_cd_country_SelectedIndexChanged(ddl_cd_country, new EventArgs());
                ddl_cd_state.SelectedValue = ddlstate.SelectedValue;
                ddl_cd_state_SelectedIndexChanged(ddl_cd_state, new EventArgs());
                ddl_cd_city.SelectedValue = ddlcity.SelectedValue;
            }
        }

        protected void Button1_Click(object sender, EventArgs e)
        {

        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            lblerrormsg.Text = "";

            if (CheckBox3.Checked == false)
            {
                lblerrormsg.Text = "Please Select TERMS & CONDITIONS";
                ShowMessage("Please Select TERMS & CONDITIONS", MessageType.Error);
                return;
            }
            else if (txtemaiid.Text != txtconfirmemail.Text)
            {
                lblerrormsg.Text = "Email id Mismatch";
                ShowMessage("Email id Mismatch", MessageType.Error);
                return;
            }
            else if (txtcontactno.Text != txtconfirmno.Text)
            {
                lblerrormsg.Text = "Mobile No Mismatch";
                ShowMessage("Mobile No Mismatch", MessageType.Error);
                return;
            }
            else
            {
                #region PHOTO
                string img_photo = "", img_signature = "", img_id = "";
                try
                {
                    if (file_photo.HasFile)
                    {
                        string PDFVDfilename = Path.GetFileName(file_photo.PostedFile.FileName);
                        string ext = Path.GetExtension(PDFVDfilename);
                        Guid obj = Guid.NewGuid();
                        img_photo = obj.ToString() + ext;
                        //if (ext == ".pdf")
                        {
                            if (File.Exists(Server.MapPath("~/Upload/PHOTO/" + img_photo)))
                            {
                                File.Delete(Server.MapPath("~/Upload/PHOTO/" + img_photo));
                            }
                            file_photo.SaveAs(Server.MapPath("~/Upload/PHOTO/" + img_photo));
                        }
                    }
                    else
                    {
                        img_photo = "";
                    }
                }
                catch { }
                #endregion

                #region SIGNATURE            
                try
                {
                    if (file_signature.HasFile)
                    {
                        string PDFVDfilename = Path.GetFileName(file_signature.PostedFile.FileName);
                        string ext = Path.GetExtension(PDFVDfilename);
                        Guid obj = Guid.NewGuid();
                        img_signature = obj.ToString() + ext;
                        //if (ext == ".pdf")
                        {
                            if (File.Exists(Server.MapPath("~/Upload/SIGNATURE/" + img_signature)))
                            {
                                File.Delete(Server.MapPath("~/Upload/SIGNATURE/" + img_signature));
                            }
                            file_signature.SaveAs(Server.MapPath("~/Upload/SIGNATURE/" + img_signature));
                        }
                    }
                    else
                    {
                        img_signature = "";
                    }
                }
                catch { }
                #endregion

                #region img_id            
                try
                {
                    if (file_id.HasFile)
                    {
                        string PDFVDfilename = Path.GetFileName(file_id.PostedFile.FileName);
                        string ext = Path.GetExtension(PDFVDfilename);
                        Guid obj = Guid.NewGuid();
                        img_id = obj.ToString() + ext;
                        //if (ext == ".pdf")
                        {
                            if (File.Exists(Server.MapPath("~/Upload/ID/" + img_id)))
                            {
                                File.Delete(Server.MapPath("~/Upload/ID/" + img_id));
                            }
                            file_photo.SaveAs(Server.MapPath("~/Upload/ID/" + img_id));
                        }
                    }
                    else
                    {
                        img_id = "";
                    }
                }
                catch { }
                #endregion
                DataTable dtt = new DataTable();
                try
                {
                    using (DBClass obj = new DBClass("SET_StudentAdmissionForm", CommandType.StoredProcedure))
                    {
                        obj.AddParameters("@ID", 0);
                        obj.AddParameters("@CANDIDATENAME", txtcandidatename.Text);
                        obj.AddParameters("@GENDER", rdogender.SelectedValue);
                        obj.AddParameters("@CATEGORY", ddlcategory.SelectedValue);
                        obj.AddParameters("@DOB", txtdob.Text);
                        obj.AddParameters("@UpscRollNo", txtUpscRollno.Text);
                        obj.AddParameters("@EMAILID", txtemaiid.Text);
                        obj.AddParameters("@CONTACTNO", txtcontactno.Text);
                        obj.AddParameters("@ISHANDICAPPED", (chk_handicapped.Checked == true ? 1 : 0));
                        obj.AddParameters("@FATHERSNAME", txtfathername.Text);
                        obj.AddParameters("@OCCUPATION", txtOCCUPATION.Text);
                        obj.AddParameters("@MOCCUPATION", txtOCCUPATION.Text);

                        obj.AddParameters("@PA_LINE", txtPERMANENT_ADDRESS.Text);
                        obj.AddParameters("@PA_CITY_TOWN", txtCity.Text);
                        obj.AddParameters("@PA_COUNTRYID", ddlCountry.SelectedValue);
                        obj.AddParameters("@PA_STATEID", ddlstate.SelectedValue);
                        obj.AddParameters("@PA_CITYID", ddlcity.SelectedValue);

                        obj.AddParameters("@CA_LINE", txtCOMMUNICATION_ADDRESS.Text);
                        obj.AddParameters("@CA_CITY_TOWN", txt_cd_city.Text);
                        obj.AddParameters("@CA_COUNTRYID", ddl_cd_country.SelectedValue);
                        obj.AddParameters("@CA_STATEID", ddl_cd_state.SelectedValue);
                        obj.AddParameters("@CA_CITYID", ddl_cd_city.SelectedValue);


                        obj.AddParameters("@SESSIONID", ddlsession.SelectedValue);
                        obj.AddParameters("@CENTREID", ddlcenter.SelectedValue);
                        obj.AddParameters("@COURSEID", ddlcourse.SelectedValue);
                        obj.AddParameters("@BATCH_TYPEID", ddl_batch.SelectedValue);
                        obj.AddParameters("@C_STREAMID", ddlstream.SelectedValue);

                        obj.AddParameters("@QUALIFICATIONID", ddl_qualification.SelectedValue);
                        obj.AddParameters("@E_STREAMID", ddlstream2.SelectedValue);
                        obj.AddParameters("@NAME_OF_COLLEGE", txtcolllegename.Text);

                        obj.AddParameters("@PASSING_YEAR", txtpassingyear.Text);
                        obj.AddParameters("@MARKS_PER", txtmarks.Text);
                        obj.AddParameters("@OPTIONAL_SUBJECT_CSEID", ddloptonalsubject.SelectedValue);
                        obj.AddParameters("@PHOTOS", img_photo);
                        obj.AddParameters("@SIGNATURE", img_signature);
                        obj.AddParameters("@IDPROOF", img_id);
                        obj.AddParameters("@IS_AGREE", 1);
                        obj.AddParameters("@CreatedDatetime", DateTime.Now);
                        obj.AddParameters("@CreatedIpAddress", "");
                        obj.AddParameters("@Status", 1);
                        dtt = obj.ReturnDataTable();
                    }
                    //ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Record Saves Successfully')", true);
                    Response.Redirect("PrintAdmisisonPDF.aspx?id=" + dtt.Rows[0][0].ToString());

                }
                catch (Exception ex) { }
            }
        }


        public enum MessageType { Success, Error, Info, Warning };
        protected void ShowMessage(string Message, MessageType type)
        {
            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), System.Guid.NewGuid().ToString(), "ShowMessage('" + Message + "','" + type + "');", true);
        }
    }
}