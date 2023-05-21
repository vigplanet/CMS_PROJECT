using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Collections;
//using TemplateParser;
using System.Net;
namespace Online_Examination
{
    public class Email
    {
        public static string SendEmail(string FilePath, Hashtable templateVars, string Mailfrom, string MailTo, string Subject, params string[] BCC)
        {
            //Parser parser = new Parser(HttpContext.Current.Server.MapPath("~/MailTemplates/" + FilePath), templateVars);
            //return SendEmail(Mailfrom, MailTo, Subject, parser.Parse(), BCC);

            return "";
        }

        public static string SendEmail(string Mailfrom, string MailTo, string Subject, string body, params string[] BCC)
        {
            try
            {
                System.Net.Mail.MailAddress mailadd = new System.Net.Mail.MailAddress(Mailfrom, System.Configuration.ConfigurationManager.AppSettings["smtp_DisplayName"]);
                System.Net.Mail.MailMessage mailmsg = new System.Net.Mail.MailMessage();
                mailmsg.To.Add(MailTo);
                //for (int I = 0; I < BCC.Length; I++)
                //{
                //    mailmsg.Bcc.Add(BCC[I]);
                //}
                mailmsg.From = mailadd;
                mailmsg.Subject = Subject;
                mailmsg.Body = body;
                mailmsg.IsBodyHtml = true;
                System.Net.NetworkCredential cred = new System.Net.NetworkCredential();
                cred.UserName = System.Configuration.ConfigurationManager.AppSettings["smtp_username"];
                cred.Password = System.Configuration.ConfigurationManager.AppSettings["smtp_pwd"];
                System.Net.Mail.SmtpClient mailsmtp = new System.Net.Mail.SmtpClient();
                mailsmtp.Credentials = cred;
                //mailsmtp.EnableSsl = true;
                mailsmtp.Host = System.Configuration.ConfigurationManager.AppSettings["smtp_host"];
                mailsmtp.Send(mailmsg);
                return "Email successfully sent.";
            }
            catch (Exception ex)
            {
                return "Send Email Failed." + ex.Message;
            }

        }

        public static string SendEmail1(string Mailfrom, string MailTo, string Subject, string body, params string[] BCC)
        {
            try
            {

                System.Net.Mail.MailMessage message = new System.Net.Mail.MailMessage();
                message.To.Add(MailTo);
                message.Subject = Subject;
                message.From = new System.Net.Mail.MailAddress(Mailfrom);
                message.Body = body;
                string sendEmailsFrom = Mailfrom;
                string sendEmailsFromPassword = System.Configuration.ConfigurationManager.AppSettings["smtp_pwd"];
                System.Net.Mail.SmtpClient smtp = new System.Net.Mail.SmtpClient("smtp.gmail.com", 587);
                smtp.EnableSsl = true;
                smtp.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
                smtp.Credentials = new NetworkCredential(sendEmailsFrom, sendEmailsFromPassword);
                smtp.Timeout = 20000;
                smtp.Send(message);
                return "Email successfully sent.";
            }
            catch (Exception ex)
            {
                return "Send Email Failed." + ex.Message;
            }
        }

    }
}