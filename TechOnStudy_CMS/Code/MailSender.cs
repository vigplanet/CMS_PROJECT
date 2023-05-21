using System.Web.Mail;
using System;
public class MailSender
{
    public static bool SendEmail(string pGmailEmail, string pGmailPassword, string pTo,
        string pSubject, string pBody, System.Web.Mail.MailFormat pFormat, string pAttachmentPath, string server)
    {
        try
        {
            System.Web.Mail.MailMessage myMail = new System.Web.Mail.MailMessage();
            myMail.Fields.Add
                ("http://schemas.microsoft.com/cdo/configuration/smtpserver",
                              "smtp.gmail.com");
            myMail.Fields.Add
                ("http://schemas.microsoft.com/cdo/configuration/smtpserverport",
                              "465");
            myMail.Fields.Add
                ("http://schemas.microsoft.com/cdo/configuration/sendusing",
                              "2");
            //sendusing: cdoSendUsingPort, value 2, for sending the message using 
            //the network.

            //smtpauthenticate: Specifies the mechanism used when authenticating 
            //to an SMTP 
            //service over the network. Possible values are:
            //- cdoAnonymous, value 0. Do not authenticate.
            //- cdoBasic, value 1. Use basic clear-text authentication. 
            //When using this option you have to provide the user name and password 
            //through the sendusername and sendpassword fields.
            //- cdoNTLM, value 2. The current process security context is used to 
            // authenticate with the service.
            myMail.Fields.Add
            ("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate", "1");
            //Use 0 for anonymous
            myMail.Fields.Add
            ("http://schemas.microsoft.com/cdo/configuration/sendusername",
                pGmailEmail);
            myMail.Fields.Add
            ("http://schemas.microsoft.com/cdo/configuration/sendpassword",
                 pGmailPassword);
            myMail.Fields.Add
            ("http://schemas.microsoft.com/cdo/configuration/smtpusessl",
                 "true");
            myMail.From = pGmailEmail;
            myMail.To = pTo;
            myMail.Subject = pSubject;
            myMail.BodyFormat = pFormat;
            myMail.Body = pBody;
            if (pAttachmentPath.Trim() != "")
            {
                MailAttachment MyAttachment =
                        new MailAttachment(pAttachmentPath);
                myMail.Attachments.Add(MyAttachment);
                myMail.Priority = System.Web.Mail.MailPriority.High;
            }
            //  System.Web.Mail.SmtpMail.SmtpServer = "smtp.gmail.com:465";
            System.Web.Mail.SmtpMail.SmtpServer = server;
            System.Web.Mail.SmtpMail.Send(myMail);
            return true;
        }
        catch (Exception ex)
        {           
            return false;
        }
    }

    public static string messageformat(string msg)
    {
        string message = "<div style='width: 90%;'>";
        message += "<div style='background:url(http://www.wongfinancial.biz/images/bg_top.jpg) left center repeat-x;width:100%; float: left;'><div style='width: 236px; height: 100px; float: left;font-size:medium;font-weight:bolder;'><img src='http://www.wongfinancial.biz/images/logo.png' alt='Wong Financial Inc.'style='float: left; margin-left: 20px;' /></div></div>";
        message += "<div style='width:100%;float:left;'><p style='padding-left:10px;font-size:15px;font-weight:bold;color:#000;text-align:left;'>";
        message += msg;
        message += "</p></div>";
        message += "<div style='width:100%; color: #000;text-align: left;'><p style='padding-left:10px;'><b>Thank you.</b><br />Wong Financial Inc.<br />72th and 51th Street<br />Torre Global Bank,3701<br />P.O.Box 0825-01641 Panama,<br />Republic of Panama,FL USA<br />24/7 Customer Care +1-850-387-2339<br />E-mail Support@wongfinancial.com</p></div></div>";
        return message;
    }
}

