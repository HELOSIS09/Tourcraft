function doPost(e) {
  const data = JSON.parse(e.postData.contents);

  const body =
    "New TourCraft enquiry\n\n" +
    "Name: " + data.name + "\n" +
    "Email: " + data.email + "\n" +
    "Phone: " + (data.phone || "—") + "\n" +
    "Message: " + (data.message || "—") + "\n\n" +
    "----- Itinerary -----\n" +
    data.plan + "\n\n" +
    "Sent: " + data.timestamp;

  MailApp.sendEmail(
    "apurvaaniket8@gmail.com",
    "TourCraft Enquiry — " + data.destination,
    body
  );

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}