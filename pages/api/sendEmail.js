import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  try {
    const { lastName, firstName, email, phoneNumber, recontact, infos, message } = req.body;

    const msg = {
      to: 'juhel.brice@gmail.com',
      from: 'juhel.brice@gmail.com',
      subject: 'CARVA - Nouveau message',
      html: `
        <p><strong>Nom :</strong> ${lastName}</p>
        <p><strong>Prénom :</strong> ${firstName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Numéro de téléphone :</strong> ${phoneNumber}</p>
        <p><strong>Comment souhaitez-vous être recontacté(e) ?</strong> ${recontact}</p>
        <p><strong>Infos du véhicule :</strong> ${infos}</p>
        <p><strong>Message :</strong> ${message}</p>
      `,
    };

    await sgMail.send(msg);

    res.status(200).json({ message: 'E-mail envoyé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'envoi de l\'e-mail' });
  }
}
