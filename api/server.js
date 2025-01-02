const express = require("express");
const lighthouse = require("lighthouse");
const { URL } = require("url");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve a basic form for user input
app.get("/", (req, res) => {
  res.send(`
    <form action="/audit" method="POST">
      <label for="url">Enter Website URL:</label>
      <input type="url" id="url" name="url" required placeholder="https://example.com">
      <label for="email">Enter Your Email:</label>
      <input type="email" id="email" name="email" required>
      <button type="submit">Run Audit</button>
    </form>
  `);
});

// Handle audit requests
app.post("/audit", async (req, res) => {
  const { url, email } = req.body;

  if (!url || !email) {
    return res.status(400).send("Both URL and Email are required.");
  }

  try {
    // Run Lighthouse
    const { lhr, report } = await lighthouse(url, {
      output: "html",
      onlyCategories: ["performance", "accessibility", "seo", "best-practices"],
    });

    // Save the report as an HTML file
    const reportPath = path.join(__dirname, `audit-report-${Date.now()}.html`);
    fs.writeFileSync(reportPath, report);

    // Email the report
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "your-email@gmail.com", // Replace with your email
        pass: "your-password",       // Replace with your email password or app password
      },
    });

    await transporter.sendMail({
      from: '"Lighthouse Audit" <your-email@gmail.com>',
      to: email,
      subject: "Your Lighthouse Audit Report",
      text: `Here is your Lighthouse audit report for ${url}.`,
      attachments: [
        {
          filename: "audit-report.html",
          path: reportPath,
        },
      ],
    });

    res.send(
      `Audit completed for ${url}. The report has been emailed to ${email}.`
    );

    // Cleanup: Delete the report file after sending (optional)
    fs.unlinkSync(reportPath);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating Lighthouse report.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
