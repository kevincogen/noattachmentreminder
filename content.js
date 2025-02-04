function checkAttachmentBeforeSending(event) {
  const emailBody = document.querySelector('[aria-label="Message Body"]'); // Gmail's body field
  const attachmentIndicator = document.querySelector('[aria-label^="Attachment"]'); // Detect attachments

  if (emailBody && emailBody.innerText.includes("attachment") && !attachmentIndicator) {
      event.preventDefault(); // Stop email from sending

      if (confirm("You mentioned an attachment but did not attach any files. Do you still want to send?")) {
          event.target.click(); // Allow sending if user confirms
      }
  }
}

// Wait for Gmail to load
function addSendButtonListener() {
  const sendButton = document.querySelector('div[aria-label="Send ‪(Ctrl-Enter)‬"]');

  if (sendButton) {
      sendButton.addEventListener("click", checkAttachmentBeforeSending);
  } else {
      setTimeout(addSendButtonListener, 1000);
  }
}

window.onload = addSendButtonListener;
