using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Online_Examination.Admin.Code
{
    public class Notifications
    {
        public static string ErrorMessageBlock(string Msg)
        {
            return "<div class='alert alert-error alert-block'><button class='close' data-dismiss='alert'>×</button><strong>Error!</strong> " + Msg + "</div>";
        }
        public static string ErrorMessage(string Msg)
        {
            return "<div class='alert alert-error'><button class='close' data-dismiss='alert'>×</button><strong>Error!</strong>" + Msg + "</div>";
        }
        public static string WarningMessage(string Msg)
        {
            return " <div class='alert'><button class='close' data-dismiss='alert'>×</button><strong>Warning!</strong> " + Msg + "</div>";
        }
        public static string SuccessMessage(string Msg)
        {
            return "<div class='alert alert-success'><button class='close' data-dismiss='alert'>×</button><strong>Success!</strong> " + Msg + "</div>";
        }
        public static string InfoMessage(string Msg)
        {
            return "<div class='alert alert-info'><button class='close' data-dismiss='alert'>×</button><strong>Info!</strong> " + Msg + "</div>";
        }
    }
}