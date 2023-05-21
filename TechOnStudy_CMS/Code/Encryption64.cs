using System;
using System.IO;
using System.Xml;
using System.Text;
using System.Security.Cryptography;
using System.Configuration;
using System.Security;
using System.Web.Configuration;



public class Encryption64
{
    private byte[] key = {
	
};
    private byte[] IV = {
	0x12,
	0x34,
	0x56,
	0x78,
	0x90,
	0xab,
	0xcd,
	0xef
};
    public string Decrypt(string stringToDecrypt)
    {
        stringToDecrypt = stringToDecrypt.Replace(" ", "+");
        byte[] inputByteArray = new byte[stringToDecrypt.Length + 1];
        try
        {
            string SEncryptionKey = "mb&7$!d8@fp!>";
            //key = System.Text.Encoding.UTF8.GetBytes(Strings.Left(SEncryptionKey, 8));
            key = System.Text.Encoding.UTF8.GetBytes(SEncryptionKey.Substring(0, 8));
            DESCryptoServiceProvider des = new DESCryptoServiceProvider();
            inputByteArray = Convert.FromBase64String(stringToDecrypt);
            MemoryStream ms = new MemoryStream();
            CryptoStream cs = new CryptoStream(ms, des.CreateDecryptor(key, IV), CryptoStreamMode.Write);
            cs.Write(inputByteArray, 0, inputByteArray.Length);
            cs.FlushFinalBlock();
            System.Text.Encoding encoding = System.Text.Encoding.UTF8;
            return encoding.GetString(ms.ToArray());
        }
        catch (Exception e)
        {
            return e.Message;
        }
    }

    public string Encrypt(string stringToEncrypt)
    {
        try
        {
            string SEncryptionKey = "mb&7$!d8@fp!>";
            key = System.Text.Encoding.UTF8.GetBytes(SEncryptionKey.Substring(0, 8));
            DESCryptoServiceProvider des = new DESCryptoServiceProvider();
            byte[] inputByteArray = Encoding.UTF8.GetBytes(stringToEncrypt);
            MemoryStream ms = new MemoryStream();
            CryptoStream cs = new CryptoStream(ms, des.CreateEncryptor(key, IV), CryptoStreamMode.Write);
            cs.Write(inputByteArray, 0, inputByteArray.Length);
            cs.FlushFinalBlock();
            return Convert.ToBase64String(ms.ToArray());
        }
        catch (Exception e)
        {
            return e.Message;
        }
    }

    public string SHA1(string strSource)
    {
        strSource = strSource + "|hkhk#@ff!klkuVFdfAA";
        byte[] hash = null;
        SHA1CryptoServiceProvider sha1csp = new SHA1CryptoServiceProvider();
        hash = sha1csp.ComputeHash(Encoding.Default.GetBytes(strSource));
        StringBuilder sb = new StringBuilder(32);
        foreach (byte b in hash)
        {
            sb = sb.AppendFormat("{0:x2}", b);
        }
        return sb.ToString();
    }

}
