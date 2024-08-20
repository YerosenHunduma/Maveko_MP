export const getQuotationTemplate = (username, followUpLink) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quotation Request</title>
    <style>
        body {
            font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;
            background-color: #f2f4f6;
            color: #51545e;
        }
        .email-wrapper {
            width: 100%;
            margin: 0;
            padding: 0;
            background-color: #f2f4f6;
        }
        .email-content {
            width: 100%;
            margin: 0;
            padding: 0;
        }
        .email-masthead {
            padding: 25px 0;
            text-align: center;
            background-color: #3869d4;
            color: #ffffff;
        }
        .email-body {
            width: 100%;
            margin: 0;
            padding: 0;
        }
        .email-body_inner {
            width: 570px;
            margin: 0 auto;
            padding: 45px;
            background-color: #ffffff;
        }
        .button {
            display: inline-block;
            padding: 10px 18px;
            margin: 20px 0;
            background-color: #22bc66;
            color: #ffffff;
            text-decoration: none;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0">
        <tr>
            <td align="center">
                <table class="email-content" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td class="email-masthead">
                            <h1>Your Quotation Request</h1>
                        </td>
                    </tr>
                    <tr>
                        <td class="email-body" width="100%" cellpadding="0" cellspacing="0">
                            <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td class="content-cell">
                                        <h2>Hi ${username},</h2>
                                        <p>Thank you for your quotation request. You can follow up on your request using the link below:</p>
                                        <p><a href="${followUpLink}" class="button">Follow Up on Your Request</a></p>
                                        <p>Best regards, <br>The Maveko Market Place Team</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <p>&copy; 2024 Maveko Market Place</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;
